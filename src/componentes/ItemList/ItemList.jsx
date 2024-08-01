import React from 'react';
import Item from '../Item/Item.jsx';
import './ItemList.css'

const ItemList = ({ products }) => {
  return (
    <div className='Lista'>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;