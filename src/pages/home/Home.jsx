import React, { useState, useEffect, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/slices/productsSlice";

import { WiStars } from "react-icons/wi";
import { MdOutlineSell, MdOutlineFiberNew } from "react-icons/md";

import Services from "../../components/services/Services";
import ErrorFallback from "../../components/ErrorFallback";
const ProductSlider = lazy(()=>import("../../components/product-slider/ProductSlider"));
const SliderBanners = lazy(()=>import("./slider-banners/SliderBanners"));
const Categories = lazy(()=>import("./categories/Categories"));
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

  useEffect(() => {
    if (!loading) {
      setFilteredProducts(
        products.filter((item) =>
          item.category.categoriesList.includes(activeFilter)
        )
      );
    }
  }, [activeFilter, loading]);

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
            products={featuredProducts}
            title="محصولات پرفروش"
            loading={loading}
            titleIcon={<WiStars className="heading-icon heading-icon--gold" />}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Banners />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <ProductSlider
            products={filteredProducts}
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
