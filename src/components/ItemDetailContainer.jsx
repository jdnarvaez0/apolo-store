import { useEffect, useState, useContext } from 'react'
import { cartContext } from '../contex/CartProvider'
import ItemDetail from './ItemDetail'
import { getFirestore } from '../firebase/index'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [added, setAdded] = useState(false)
  const { addToCart } = useContext(cartContext)

  useEffect(() => {

    const db = getFirestore()
    const itemCollection = db.collection('items')
    const miItem = itemCollection.doc('mEbnailf3KFryh2pUu3V')

    miItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('no existe ese documento')
          return
        }
        console.log('item found')
        setProducto({ id: doc.id, ...doc.data() })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const onAdd = (count) => {
    console.log(`Agregaste ${producto.title}, cantidad: ${count}.`)
    addToCart(producto, count)
    setAdded(true) // seteo en tru cuando es agregado el producto
  }

  return (
    <>
      <ItemDetail item={producto} onAdd={onAdd} added={added} />
    </>
  )
}

export default ItemDetailContainer
