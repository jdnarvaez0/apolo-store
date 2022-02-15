import React, { useContext } from 'react';
import { cartContext } from '../../contex/CartProvider';

const CartItem = ({prod}) => {

  const {deleteItem} = useContext(cartContext)

  return (
    <div>
      <p>quantity: {prod.count}</p> 
      <button onClick={() => deleteItem(prod.item.id)}>Delete</button> 
    </div>
  )
}
 
export default CartItem
