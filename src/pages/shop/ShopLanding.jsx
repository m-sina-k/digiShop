import React, { useState, useEffect, lazy, Suspense } from "react";
import { client } from "../../server/contentful";
import { formatImages } from "../../helpers/formatImages";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../../features/slices/productsSlice";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorFallback";

const Slider = lazy(() => import("../../components/slider/Slider"));
const Categories = lazy(() => import("./../home/categories/Categories"));
const ProductSlider = lazy(() =>
  import("./../../components/product-slider/ProductSlider")
);
const Brands = lazy(() => import("./brands/Brands"));
const Banners = lazy(() => import("./../home/banners/Banners"));

const ShopLanding = () => {
  const dispatch = useDispatch();

  const [sliderLoading, setSliderLoading] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);

  const [bannerLoading, setBannerLoading] = useState(false);
  const [bannerImages, setBannerImages] = useState([]);

  const { products, loading } = useSelector((state) => state.productsState);
  const [gamingProducts, setGamingProducts] = useState([]);
  const [tabletProducts, setTabletProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    if (!loading) {
      setGamingProducts(
        products.filter((item) =>
          item.category.categoriesList.includes("لوازم گیمینگ")
        )
      );
      setTabletProducts(
        products.filter((item) => item.category.categoriesList.includes("تبلت"))
      );
    }
  }, [dispatch, loading]);

  useEffect(() => {
    const fetchSliderImages = async () => {
      setSliderLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "images",
          "fields.type": "shop-slider",
        });
        const data = formatImages(response.items);
        setSliderImages(data);
        setSliderLoading(false);
      } catch (err) {
        console.log(err);
        setSliderLoading(false);
      }
    };
    const fetchBannerImages = async () => {
      setBannerLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "images",
          "fields.type": "home-banner",
        });
        const data = formatImages(response.items);
        setBannerImages(data);
        setBannerLoading(false);
      } catch (err) {
        console.log(err);
        setBannerLoading(false);
      }
    };
    fetchSliderImages();
    fetchBannerImages();
  }, []);

  return (
    <div className="shop-landing">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Slider images={sliderImages} loading={sliderLoading} />
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
            products={gamingProducts.slice(0, 7)}
            title="محصولات گیمینگ"
            loading={loading}
            seeMore="/shop/gaming"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Brands />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <Banners
            images={[bannerImages[0], bannerImages[1]]}
            loading={bannerLoading}
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={null}>
          <ProductSlider
            products={tabletProducts.slice(0, 7)}
            title="تبلت ها"
            loading={loading}
            seeMore="/shop/tablet"
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ShopLanding;
