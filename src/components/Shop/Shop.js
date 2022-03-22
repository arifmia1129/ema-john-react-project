import React, { useEffect, useState } from 'react';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>This is products container:{products.length}</h1>
            </div>
            <div className="order-container">
                <h1>This is order container</h1>
            </div>
        </div>
    );
};

export default Shop;