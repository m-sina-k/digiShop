import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { client } from "../../server/contentful";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/slices/cartSlice";
import _ from "lodash";

import Alert from "../../components/alert/Alert";
import ImageSection from "./components/image-section/ImageSection";
import InfoSection from "./components/info-section/InfoSection";
import BuyBox from "./components/buy-box/BuyBox";
import PageLoading from "./../../components/page-loading/PageLoading";
import ProductSlider from "./../../components/product-slider/ProductSlider";
import ReviewSection from "./components/review-section/ReviewSection";

import { MdClose } from "react-icons/md";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { productId, productName } = useParams();
  document.body.style.backgroundColor = "white";
  document.title = productName;

  const { cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const [fetchError, setFetchError] = useState({
    message: null,
    retry: false,
  });

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  const [selectedColor, setSelectedColor] = useState({ title: "", hex: "" });
  const [selectedGuarantee, setSelectedGuarantee] = useState(null);

  const [itemInCart, setItemInCart] = useState(null);

  const formatData = (item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let tempProduct = { ...item.fields, id, images };
    setProduct(tempProduct);
  };

  const formatSimilarProducts = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let product = { ...item.fields, id, images };
      return product;
    });
    setSimilarProducts(tempItems);
    setLoading(false);
  };

  const handleError = (error) => {
    switch (error.message) {
      case "The resource could not be found.":
        setFetchError({
          ...fetchError,
          message: "کالای مورد نظر یافت نشد!",
        });
        break;
      default:
        setFetchError({
          message: "خطا در برقراری ارتباط با سرور.",
          retry: true,
        });
        break;
    }
    setLoading(false);
  };

  const closeMobileAddToCart = (e) => {
    const mobileAddToCart = e.currentTarget.parentElement;
    mobileAddToCart.style.display = "none";
  };

  // fetch selected product
  useEffect(() => {
    setLoading(true);
    client
      .getEntry(productId)
      .then((res) => {
        if (res) formatData(res);
      })
      .catch((err) => {
        handleError(err);
        console.log(err);
      });
  }, [productId]);

  // scroll back to top when product changes , fetch simialr products and update availbe colors and guarantee
  useEffect(() => {
    try {
      // using modern syntax for new browsers
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
    setLoading(true);
    if (product) {
      client
        .getEntries({
          content_type: "digishop",
          "fields.searchQuery": product.searchQuery,
          "fields.localName[nin]": product.localName,
          limit: 7,
        })
        .then((res) => {
          if (res.items.length) formatSimilarProducts(res.items);
        })
        .catch((err) => {
          console.log(err);

          setFetchError({
            message: "خطا در بارگذاری محصولات مشابه",
            retry: true,
          });
        });

      // update guarantee and color after product fetch
      if (product.guarantee) {
        setSelectedGuarantee(product.guarantee.guranteeList[0].title);
      }
      if (product.colors) {
        const defaultColor = product.colors.colorList[0];
        setSelectedColor({
          title: defaultColor.title,
          hex: defaultColor.hex,
        });
      }

      if (cartItems) {
        setItemInCart(
          cartItems.find((item) => item.id === product.id) ? true : false
        );
      }
    }
  }, [product]);

  // reset body backColor
  useEffect(() => {
    return () => (document.body.style.backgroundColor = null);
  }, []);

  const generateRandomLimit = () => Math.floor(Math.random() * (4 - 1)) + 1;

  const formatProduct = (selectedProduct) => {
    const image = selectedProduct.images[0];
    const limit = generateRandomLimit();
    const productInfo = _.pick(
      selectedProduct,
      "localName",
      "officialName",
      "price",
      "priceBeforeDiscount",
      "discount",
      "category",
      "searchQuery",
      "id"
    );
    return { ...productInfo, selectedColor, selectedGuarantee, image, limit };
  };

  const addItemToCart = (selectedProduct) => {
    dispatch(addToCart(formatProduct(selectedProduct)));
    setItemInCart(true);
  };

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
    setItemInCart(false);
  };

  return fetchError.message ? (
    <Alert
      variant="error"
      title="خطا"
      additionalClass="mt-5 mx-auto w-50"
      text={fetchError.message}
      {...(fetchError.retry && { callBackText: "تلاش مجدد" })}
      {...(fetchError.retry && {
        callBack: () => window.location.reload(),
      })}
    />
  ) : (
    <div className="single-product">
      {product && (
        <div className="single-product__breadcrumbs">
          <Link className="breadcrumb-link" to="/">
            صفحه اصلی
          </Link>
          <Link className="breadcrumb-link" to="/shop">
            فروشگاه
          </Link>
          <Link className="breadcrumb-link" to={`/shop/${product.searchQuery}`}>
            {product.category.categoriesList[0]}
          </Link>
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          {/* product images and info */}
          <div className="product-container">
            {loading ? (
              <PageLoading />
            ) : (
              // right side image container
              <div className="row">
                <div className="col-12 col-lg-4">
                  <ImageSection images={product.images} />
                </div>

                <div className="col-12 col-lg-8">
                  <div className="row">
                    {/* middle side product info */}
                    <InfoSection
                      product={product}
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                    />

                    {/* left side buy card */}
                    <BuyBox
                      product={product}
                      selectedGuarantee={selectedGuarantee}
                      setSelectedGuarantee={setSelectedGuarantee}
                      addItemToCart={addItemToCart}
                      removeItemFromCart={removeItemFromCart}
                      itemInCart={itemInCart}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* similar products */}
        <div className="row similar-products__row">
          <ProductSlider
            title="محصولات مشابه"
            loading={loading}
            products={similarProducts}
            fullWidth={true}
            additionalClass="product-slider--border"
          />
        </div>

        {/* review , details and comment section */}
        {!loading && <ReviewSection product={product} />}

        {/* mobile add to cart section */}
        {!loading && (
          <div className="mobile-add-to-cart">
            <span
              className="mobile-add-to-cart-close-button"
              onClick={(e) => closeMobileAddToCart(e)}
            >
              <MdClose />
            </span>
            <h5 className="product__name">{product.localName}</h5>
            <section className="d-flex justify-content-between align-items-center">
              <span className="product__price">
                {product.price.toLocaleString()} تومان
              </span>
              {itemInCart ? (
                <button
                  className="mobile-add-to-cart-button"
                  onClick={() => removeItemFromCart(product.id)}
                >
                  حذف از سبد خرید
                </button>
              ) : (
                <button
                  className="mobile-add-to-cart-button"
                  onClick={() => addItemToCart(product)}
                >
                  افزودن به سبد خرید
                </button>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
