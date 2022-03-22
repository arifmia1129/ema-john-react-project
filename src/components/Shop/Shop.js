import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const addToOrderList = (product) => {
        console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToOrderList={addToOrderList}></Product>)
                }
            </div>
            <div className="order-container">
                <h1>This is order container</h1>
            </div>
        </div>
    );
};

export default Shop;