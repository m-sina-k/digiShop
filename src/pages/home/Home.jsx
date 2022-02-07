import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/slices/productsSlice";
import Banners from "./banners/Banners";
import ProductSlider from "../../components/product-slider/ProductSlider";
import { WiStars } from "react-icons/wi";
import Categories from "./categories/Categories";

const Home = () => {
  const { products, discountedProducts, featuredProducts, loading } =
    useSelector((state) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <main className="main-container">
      <Banners />
     
        <ProductSlider
          products={featuredProducts}
          fullWidth={false}
          title="محصولات پرفروش"
          loading={loading}
          titleIcon={<WiStars className="heading-icon heading-icon--gold" />}
        />
     
        <Categories/>
    </main>
  );
};

export default Home;
