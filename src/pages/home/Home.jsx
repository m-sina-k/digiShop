import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/slices/productsSlice";
import Banners from "./banners/Banners";
import ProductSlider from "../../components/product-slider/ProductSlider";
import {WiStars} from 'react-icons/wi'
// import { client } from "./../../server/contentful";

const Home = () => {
  const { products, discountedProducts, featuredProducts, loading } =
    useSelector((state) => state.productsState);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if ((!loading, products)) {
  }

  return (
    <main className="main-container">
      <Banners />
      {!loading && featuredProducts && <ProductSlider products={featuredProducts} fullWidth={false} title='محصولات پرفروش' titleIcon={<WiStars className="title-icon title-icon--gold"/>} />}
    </main>
  );
};

export default Home;
