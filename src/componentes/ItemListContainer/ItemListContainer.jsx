import React, { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asycMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { category } = useParams()

  useEffect(() => {
    setLoading(true)

    const callectionRef = category
    ? query(collection(db, 'products'), where('category', '==', category))
    : collection(db, 'products')

    getDocs( callectionRef )
      .then(snapshot => {
        const productsAdapted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
 },[category]) 


  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer