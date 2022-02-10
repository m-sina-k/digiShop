import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/slices/productsSlice";
import { WiStars } from "react-icons/wi";
import { MdOutlineSell, MdOutlineFiberNew } from "react-icons/md";

import SliderBanners from "./slider-banners/SliderBanners";
import ProductSlider from "../../components/product-slider/ProductSlider";
import Categories from "./categories/Categories";

import Banners from "./banners/Banners";
import bannerImage1 from "../../assets/images/banner-images/banner-small-03.jpg";
import bannerImage2 from "../../assets/images/banner-images/banner-small-04.jpg";

import Services from "../../components/services/Services";

const Home = () => {
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
      <SliderBanners />

      <ProductSlider
        products={discountedProducts}
        title="فروش فوق العاده"
        loading={loading}
        additionalClass="product-slider--sale"
        titleIcon={
          <MdOutlineSell className="heading-icon heading-icon--white" />
        }
      />

      <Categories />

      <ProductSlider
        products={featuredProducts}
        title="محصولات پرفروش"
        loading={loading}
        titleIcon={<WiStars className="heading-icon heading-icon--gold" />}
      />

      <Banners image1={bannerImage1} image2={bannerImage2} url1="#" url2="#" />

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

      <Services />
    </main>
  );
};

export default Home;
