import React, { useEffect, useState } from 'react';
import { calculate } from '../../utilities/calculate';
import Product from '../Product/Product';
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { addToDb, storedCart, deleteShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        const stored = storedCart();
        const savedCart = [];
        for (const id in stored) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = stored[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);

            }


        }
        setOrders(savedCart);
    }, [products])

    const addToOrderList = (product) => {
        const totalOrders = [...orders, product];
        setOrders(totalOrders);
        addToDb(product.id);
        if (product.quantity === 0) {
            product.quantity = 1;
        }
    }
    const totalQuantity = calculate(orders, "quantity");

    let totalPrice = 0;
    for (const order of orders) {
        totalPrice = totalPrice + order.price * order.quantity;
    }

    const totalShipping = calculate(orders, "shipping");
    const totalTax = (totalPrice * 10) / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;


    const clearCart = () => {
        const currentOrders = [];
        setOrders(currentOrders);
        deleteShoppingCart();
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
                    <p>Selected item : {totalQuantity}</p>
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