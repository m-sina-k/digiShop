import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../../server/contentful";
import { useSelector, useDispatch } from "react-redux";
import {
  initialState,
  updatePrice,
  clearFilters,
} from "../../../../features/slices/shopFilterSlice";
import _ from "lodash";
import Shop from "../../Shop";

const BrandSingle = () => {
  const { brand } = useParams();
  document.title = `${brand} | دیجی شاپ `;
  const { filterState } = useSelector((state) => state);
  const { minPrice, maxPrice, rate, searchInput, sale, featured, sort } =
    filterState;
  const dispatch = useDispatch();
  const [initialFilters, setinitialFilters] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  // min and max price of products , using for range slider
  const [minMax, setMinMax] = useState(null);
  // check if user activated any filter , to show "delete filters" button
  const [filtered, setFiltered] = useState(false);

  const formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const product = { ...item.fields, id, images };
      return product;
    });
    setFetchedProducts(tempItems);
    const min = Math.min(...tempItems.map((item) => item.price));
    const max = Math.max(...tempItems.map((item) => item.price));
    // need to add slider step to max price value in order to slider work correctly
    const SLIDER_STEP = 1_000_000;
    // set default value for min max price !required for price range slider!
    if (!minPrice && !maxPrice) {
      dispatch(updatePrice([min, max + SLIDER_STEP]));
    }
    if (!initialFilters.minPrice && !initialFilters.maxPrice) {
      setinitialFilters({
        ...initialFilters,
        minPrice: min,
        maxPrice: max + SLIDER_STEP,
      });
    }
    // set min max value !required for price range slider!
    if (!minMax) {
      setMinMax([min, max]);
    }
  };

  useEffect(() => {
    // reset the price filter if user changed catrgory
    if (minPrice && minMax) {
      setinitialFilters({ ...initialFilters, minPrice: null, maxPrice: null });
      dispatch(updatePrice([null, null]));
      setMinMax(null);
    }
  }, [brand]);

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        content_type: "digishop",
        "fields.company": brand,
        order: sort,
        ...(featured && { "fields.featured": true }),
        ...(sale && { "fields.discount[exists]": true }),
        ...(rate && { "fields.rate[lt]": rate }),
        ...(minPrice && { "fields.price[gte]": minPrice }),
        ...(maxPrice && { "fields.price[lte]": maxPrice }),
        ...(searchInput && {
          "fields.localName[match]": searchInput,
        }),
      })
      .then((res) => {
        setLoading(false);
        if (res.items.length) formatData(res.items);
      })
      .catch((err) => {
        setFetchError(true);
        console.log(err);
        setLoading(false);
      });
  }, [brand, filterState]);

  // reset the state on component unmount
  useEffect(() => {
    return () => dispatch(clearFilters());
  }, []);

  // check to see if user activated any filter , to show "delete filters" button
  useEffect(() => {
    const filtersDeactive = _.isEqual(initialFilters, filterState);
    setFiltered(filtersDeactive);
  }, [filterState, initialFilters]);

  return (
    <Shop
      fetchError={fetchError}
      loading={loading}
      productsList={fetchedProducts}
      filtered={filtered}
      minMax={minMax}
    />
  );
};

export default BrandSingle;
