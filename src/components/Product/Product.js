import React from 'react';
import "./Product.css";
const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <div className='first-info'>
                    <p className='product-name'>{name}</p>
                    <p>Price : ${price}</p>
                </div>
                <div className='second-info'>
                    <p>Manufacturer : {seller}</p>
                    <p>Ratings : {ratings} star</p>
                </div>

            </div>
            <button className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;