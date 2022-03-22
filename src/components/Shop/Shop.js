import React, { useEffect, useState } from 'react';
import { calculate } from '../../utilities/calculate';
import Product from '../Product/Product';
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const addToOrderList = (product) => {
        const totalOrders = [...orders, product];
        setOrders(totalOrders);
    }
    const totalPrice = calculate(orders, "price");
    const totalShipping = calculate(orders, "shipping");
    const totalTax = (totalPrice * 10) / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;


    const clearCart = () => {
        const currentOrders = [];
        setOrders(currentOrders);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToOrderList={addToOrderList}></Product>)
                }
            </div>
            <div className="order-container">
                <br />
                <div className="order-info">
                    <h2>Order Summary</h2>
                    <br />
                    <p>Selected item : {orders.length}</p>
                    <p>Total price : {totalPrice}</p>
                    <p>Total shipping : {totalShipping}</p>
                    <p>Total tax : {totalTax}</p>
                    <br />
                    <h2>Grand total : {grandTotal}</h2>
                </div>
                <div>
                    <button onClick={clearCart} className='first-btn'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon className='icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                    <br />
                    <button className='second-btn'>
                        <p>Order Preview</p>
                        <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;