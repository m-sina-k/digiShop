import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "./../../server/contentful";

import { BeatLoader } from "react-spinners";
import "./SearchResult.scss";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const name = item.fields.localName;
      const image = item.fields.images[0].fields.file.url;
      const product = { name, id, image };
      return product;
    });
    setSearchResult(tempItems);
  };

  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        content_type: "digishop",
        "fields.localName[match]": searchQuery,
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
  }, [searchQuery]);

  return (
    <div className="search-result">
      <div className="container">
        <div className="row">
          <h6 className="search-result__heading heading-after">
            نتایج جستجو برای "{searchQuery}" :
          </h6>

          <div className="search-result__items-container">
            {fetchError ? (
              <p className="text-center text-danger">
                خطا در برقراری ارتباط با سرور.لطفا بعدا تلاش نمایید.
              </p>
            ) : loading ? (
              <div className="d-flex justify-content-center">
                <BeatLoader color="#f53b57" size={10} margin={5} />
              </div>
            ) : searchResult.length ? (
              searchResult.map((item) => (
                <article className="item">
                  <Link
                    to={`/product/${item.id}/${item.name}/`}
                    className="item__image-container"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item__image"
                    />
                  </Link>
                  <section className="item__text-container">
                    <p className="item__name">{item.name}</p>
                    <Link
                      to={`/product/${item.id}/${item.name}/`}
                      className="item__link"
                    >
                      مشاهده
                    </Link>
                  </section>
                </article>
              ))
            ) : (
              <p className="text-center text-danger">
                کالایی مطابق با عبارت وارد شده یافت نشد.لطفا فارسی جستجو کنید یا
                عبارت خود را اصلاح نمایید.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
