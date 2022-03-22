import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToOrderList }) => {
    const { img, name, price, ratings, seller } = product;
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
            <button onClick={() => addToOrderList(product)} className='btn-cart'>
                <p>Add to cart</p>
                <div className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    );
};

export default Product;