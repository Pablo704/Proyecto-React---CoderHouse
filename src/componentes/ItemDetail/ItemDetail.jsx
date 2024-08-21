import './ItemDetail.css';
import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
  return (
    <article className="car-item">
    <figure className="car-item__image-container">
        <img src={img} alt={name} className="car-item__image" />
    </figure>
    <section className="car-item__details">
        <h2 className="car-item__title">
            {name}
        </h2>
        <p className="car-item__detail">
            <strong>Categoría:</strong> {category}
        </p>
        <p className="car-item__detail">
            <strong>Descripción:</strong> {description}
        </p>
        <p className="car-item__detail">
            <strong>Precio:</strong> ${price}
        </p>
    <div className='itemCount'>
    {
        quantityAdded > 0 ?(
            <Link to='/cart' className='terminarCompra'>Terminar Compra</Link>
        ) : (
            
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
            
        )
    }
    </div>
    </section>
</article>

  )
}

export default ItemDetail