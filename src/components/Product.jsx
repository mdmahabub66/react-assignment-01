import React from 'react';


const Product = (props) => {

  const {title, image, price, description, rate, count} = props;
  
  return (
    <article className="product">
      <h1>{props.x}</h1>
      <img src={image} alt="Product_Image" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: ${price}</p>
        <p>Rating: {rate}/{count}</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
