import React from 'react';
import "./OrderReview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const OrderReview = ({ order, romoveItem }) => {
    const { name, price, quantity, img, shipping } = order;
    return (
        <div className="order-item">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <div >
                    <p title={name}><h3>Name: {name.length > 20 ? name.slice(0, 20) + "..." : name}</h3></p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div>
                    <button onClick={() => romoveItem(order)} className='delete-btn'>
                        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;