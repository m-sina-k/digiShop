import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { client } from "../../../server/contentful";
import "./Categories.scss";

const Categories = () => {
  const categoriesCount = 8;

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;

      let category = { ...item.fields, id, image };
      return category;
    });
    return tempItems;
  };

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "categories",
          order: 'sys.createdAt'
        });
        const data = formatData(response.items);
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="categories">
      <div className="container px-2 px-md-0">
        <div className="heading categories__heading">
          <span className="icon-container">
            <BiCategory className="heading-icon heading-icon--blue" />
          </span>
          <h5 className="heading__title">دسته بندی ها</h5>
        </div>
        <div className="categories__row">
          {loading
            ? Array(categoriesCount).fill(
                <div className="category-skeleton">
                  <section className="skeleton-image"></section>
                  <p className="skeleton-text"></p>
                </div>
              )
            : categories.map((item) => (
                <Link to={item.url} key={item.id} className="category-item">
                  <figure className="category__image-container mb-2">
                    <img
                      src={item.image}
                      alt="category-image"
                      className="category__image"
                      loading="lazy"
                    />
                  </figure>
                  <h6 className="category__title">{item.name}</h6>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
