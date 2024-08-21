import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cartItem.css';

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext);

    const subtotal = price * quantity;

    return (
        <div className="CartItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <section>
                <p className="Info">Cantidad: {quantity}</p>
                <p className="Info">Precio por unidad: ${price}</p>
                <p className="Info">Subtotal: ${subtotal}</p>
            </section>
            <footer>
                <button onClick={() => removeItem(id)}>X</button>
            </footer>
        </div>
    );
};

export default CartItem;
