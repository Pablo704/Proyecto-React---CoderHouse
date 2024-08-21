import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./carwidget.css"
import { Link } from 'react-router-dom';

const CarWidget = () => {
  return (
    <div className='CarWidget'>
      <Link to='/cart' className='itemCar'><FaShoppingCart /></Link>
    </div>
  )
}

export default CarWidget