import React, { useState, useEffect, lazy, Suspense } from "react";
import { client } from "../../server/contentful";
import { formatImages } from "../../helpers/formatImages";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/slices/productsSlice";

import { WiStars } from "react-icons/wi";
import { MdOutlineSell, MdOutlineFiberNew } from "react-icons/md";

import Services from "../../components/services/Services";
import ErrorFallback from "../../components/ErrorFallback";
const ProductSlider = lazy(() =>
  import("../../components/product-slider/ProductSlider")
);
const SliderBanners = lazy(() => import("./slider-banners/SliderBanners"));
const Categories = lazy(() => import("./categories/Categories"));
const Banners = lazy(() => import("./banners/Banners"));

const Home = () => {
  document.title = "دیجی شاپ | صفحه اصلی";

  const { products, discountedProducts, featuredProducts, loading } =
    useSelector((state) => state.productsState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // filtering by category in product slider
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterOptions = ["گوشی موبایل", "لپتاپ"];
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);

  const [bannersLoading, setBannersLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFilteredProducts(
        products.filter((item) =>
          item.category.categoriesList.includes(activeFilter)
        )
      );
    }
  }, [activeFilter, loading]);

  useEffect(() => {
    const fetchBannerImages = async () => {
      setBannersLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "images",
          "fields.type": "home-banner",
        });
        const data = formatImages(response.items);
        setBannerImages(data);
        setBannersLoading(false);
      } catch (err) {
        console.log(err);
        setBannersLoading(false);
      }
    };
    fetchBannerImages();
  }, []);

  return (
    <main className="main-container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <SliderBanners />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <ProductSlider
            products={discountedProducts}
            title="فروش فوق العاده"
            loading={loading}
            additionalClass="product-slider--sale"
            titleIcon={
              <MdOutlineSell className="heading-icon heading-icon--white" />
            }
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Categories />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <ProductSlider
            products={featuredProducts.slice(0, 7)}
            title="محصولات پرفروش"
            loading={loading}
            titleIcon={<WiStars className="heading-icon heading-icon--gold" />}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Banners
            images={[bannerImages[0], bannerImages[1]]}
            loading={bannersLoading}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <ProductSlider
            products={filteredProducts.slice(0, 7)}
            title="جدید ترین ها"
            loading={loading}
            filterOptions={filterOptions}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            titleIcon={
              <MdOutlineFiberNew className="heading-icon heading-icon--red" />
            }
          />
        </Suspense>
      </ErrorBoundary>

      <Services />
    </main>
  );
};

export default Home;
