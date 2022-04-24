import { useEffect, useState } from "react"
import { storedCart } from "../utilities/fakedb";

const useOrders = (products) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const stored = storedCart();
        const savedCart = [];
        for (const id in stored) {
            const addedCart = products.find(product => product._id === id);
            if (addedCart) {
                const quantity = stored[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setOrders(savedCart);
    }, [products]);

    return [orders, setOrders];
}

export default useOrders;