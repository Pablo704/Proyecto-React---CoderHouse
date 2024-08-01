import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./carwidget.css"

const CarWidget = () => {
  return (
    <div className='CarWidget'>
      <span className='itemCar'>0</span>
      <button className='itemCar'><FaShoppingCart /></button>
    </div>
  )
}

export default CarWidget