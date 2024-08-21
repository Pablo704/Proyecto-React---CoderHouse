import './ItemDetailContainer'
import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';



const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    const {id} = useParams() 

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', id)

        getDoc(docRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productsAdapted = { id: snapshot.id, ...data}
                setProducts(productsAdapted)
            })
            .catch(error => {
                 console.error(error);
            })
            .finally(() =>{
                setLoading(false)
            })
        }, [id])
         
  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer