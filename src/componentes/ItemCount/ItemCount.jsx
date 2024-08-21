import React, { useState } from 'react';
import './ItemCount.css'
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='button' onClick={increment}>+</button>
            </div>
            <div className='Controls'>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default ItemCount;
