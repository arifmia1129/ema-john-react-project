import React, { useEffect, useState } from 'react';
import { calculate } from '../../utilities/calculate';
import Product from '../Product/Product';
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { addToDb, storedCart, deleteShoppingCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [orders, setOrders] = useState([]);
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
        const exist = orders.find(order => order.id === product.id);
        let totalOrders;
        if (!exist) {
            product.quantity = 1;
            totalOrders = [...orders, product];
        }

        else {
            product.quantity = product.quantity + 1;
            const rest = orders.filter(order => order.id !== product.id);
            totalOrders = [...rest, product];
        }
        setOrders(totalOrders);
        addToDb(product.id);
        if (product.quantity === 0) {
            product.quantity = 1;
        }
    }
    let totalQuantity = 0;
    let totalPrice = 0;
    for (const order of orders) {
        totalQuantity = totalQuantity + order.quantity;
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
                    <Link to="/order" className='link-btn'>
                        <button className='second-btn'>
                            <p>Order Preview</p>
                            <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;