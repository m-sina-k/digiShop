import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { client } from "../../server/contentful";
import { MdClose } from "react-icons/md";

import Alert from "../../components/alert/Alert";
import ImageSection from "./components/image-section/ImageSection";
import InfoSection from "./components/info-section/InfoSection";
import BuyBox from "./components/buy-box/BuyBox";
import PageLoading from "./../../components/page-loading/PageLoading";
import ProductSlider from "./../../components/product-slider/ProductSlider";
import ReviewSection from "./components/review-section/ReviewSection";
import "./SingleProduct.scss";

const SingleProduct = () => {
  document.body.style.backgroundColor = "white"
  const { productId, productName } = useParams();
  document.title = productName;

  const [fetchError, setFetchError] = useState({
    message: null,
    retry: false,
  });

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

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

  // scroll back to top when product changes & fetch simialr products
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
    }
  }, [product]);

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
                    <InfoSection product={product} />

                    {/* left side buy card */}
                    <BuyBox product={product} />
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
              <button className="mobile-add-to-cart-button">
                افزودن به سبد خرید
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
