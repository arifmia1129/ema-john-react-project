import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useOrders from '../../hooks/useOrders';
import useProducts from '../../hooks/useProducts';
import { calculate } from '../../utilities/calculate';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrderReview from '../OrderReview/OrderReview';
import "./Order.css";

const Order = () => {
    const [products, setProducts] = useProducts();
    const [orders, setOrders] = useOrders(products);
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

    const romoveItem = (item) => {
        const rest = orders.filter(order => order.id !== item.id)
        setOrders(rest);
        removeFromDb(item.id);
    }
    return (
        <div className='container'>
            <div>
                {
                    orders.map(order => <OrderReview key={order.id} romoveItem={romoveItem} order={order}></OrderReview>)
                }
            </div>
            <div className="order">
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
                        <p>Proceed Checkout</p>
                        <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;