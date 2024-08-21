import React from 'react'
import shipping from '../../assets/img/shipping.png'
import retur from '../../assets/img/return.png'
import gift from '../../assets/img/gift.png'
import contact from '../../assets/img/contact.png'
import './Feature.css'

const Feacture = ({ onToggleProducts, showProducts }) => {
  return (
    <>
    <div className='features'>
        <div className='feature'>
            <img className='featureIcon' src={shipping} alt=""/>
            <span className="featureTitle">Free Shipping</span>
            <span className="featureDesc">Envío gratuito a todo el país en todos los pedidos</span>
        </div>
        <div className="feature">
            <img className='featureIcon' src={retur} alt="" />
            <span className="featureTitle">30 Days Return</span>
            <span className="featureDesc">Devolución fácil y sin preguntas en 14 días</span>
        </div>
        <div className="feature">
            <img className='featureIcon' src={gift} alt="" />
            <span className="featureTitle">Gift Cards</span>
            <span className="featureDesc">Compre tarjetas de regalo y utilice códigos de cupón fácilmente.</span>
        </div>
        <div className="feature">
            <img className='featureIcon' src={contact} alt="" />
            <span className="featureTitle">Contact ARG!</span>
            <span className="featureDesc">Mantengámonos en contacto a través de correo electrónico y el sistema de soporte</span>
        </div>
    </div>
    <div className='productosBoton'>
        <button onClick={onToggleProducts} className='mostrarProducos'>
          {showProducts ? 'Ocultar Productos' : 'Mostrar Productos'}
        </button>
    </div>
    </>
  )
}

export default Feacture