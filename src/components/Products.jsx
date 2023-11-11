import React from 'react'
import Product from './Product'

const Products = (props) => {

  const productList = [];

  props.data.map((product) => {

    const {title, image, price, description, rating} = product;

    productList.push((
      <Product title={title} image={image} price={price} description={description} rate={rating.rate} count={rating.count} />
    ))

  })
  
  return (
    <div className="all_prodcuts">
      {productList}
    </div>
  );
}
export default Products;



