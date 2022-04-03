import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './InfoSection.scss'

const InfoSection = ({ product,selectedColor,setSelectedColor }) => {
  const { localName, officialName, rate, properties,colors } = product;
  
  return (
    <div className="col-12 col-md-7">
      <div className="info-section">
        {/* product name , official name , rate */}
        <span className="product__brand-container">
          <Link to={`/shop/brands/${product.company}`} className="ref-link">
            {product.company}
          </Link>
          /
          <Link
            to={`/shop/${product.searchQuery}/${product.company}`}
            className="ref-link"
          >
            {product.category.categoriesList[0]}
          </Link>
        </span>
        <section className="product__name-container">
          <h5 className="product__local-name">{localName}</h5>
          {officialName && (
            <small className="product__official-name">{officialName}</small>
          )}
          <section className="product__category-container">
            <h6 className="product__detail-heading">دسته بندی: </h6>
            {product.category.categoriesList.map((item, index) => (
              <span className="product__category" key={index}>
                {item}
              </span>
            ))}
          </section>
          <span className="product__rate">
            {rate}
            <FaStar className="star-icon" />
          </span>
        </section>

        {/* product colors */}
        {selectedColor.title && (
          <section className="product__colors-container">
            <h6 className="product__detail-heading">رنگ : {selectedColor.title}</h6>
            {
              colors.colorList.map((item) => (
                <span
                  className={`product__color-item ${
                    selectedColor.title === item.title ? "product__color-item--active" : ""
                  }`}
                  onClick={() => setSelectedColor({title:item.title,hex:item.hex})}
                  key={item.id}
                  style={{ backgroundColor: item.hex }}
                ></span>
              ))}
          </section>
        )}

        {/* product properties */}
        {properties && (
          <section className="product__property-container">
            <h6 className="product__detail-heading">ویژگی ها :</h6>
            {Object.keys(properties).map((key, index) => (
              <p key={index} className="property-item">
                {key} : {properties[key]}
              </p>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
