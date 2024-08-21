import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import './cart.css';


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="option" >Productos</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            {cart.map((prod) => (
                <CartItem key={prod.id} {...prod} />
            ))}
            <div className="cart-total">
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()} className="limpiar">Limpiar Carrito</button>
                <Link to='/checkout' className="option">Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;
