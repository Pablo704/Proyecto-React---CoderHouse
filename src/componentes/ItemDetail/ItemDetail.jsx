import './ItemDetail.css';
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
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
        <div className='ItemCount'>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </div>
    </section>
</article>

  )
}

export default ItemDetail
