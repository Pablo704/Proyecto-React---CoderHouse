import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const quantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
        const totalAmount = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

        setTotalQuantity(quantity);
        setTotal(totalAmount);
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
