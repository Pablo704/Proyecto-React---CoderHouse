import './ItemDetailContainer'
import React, { useState, useEffect } from 'react';
import { getProductsById } from '../../asycMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const {id} = useParams() 

    useEffect(() => {
        getProductsById(id)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error);
        })
    }, [id])

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer