import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getFirestore } from '../firebase/index'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('items')

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          return
        }

        setProductos(
          querySnapShot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex flex-wrap container'>
      {productos.length ? (
        <ItemList productos={productos} />
      ) : (
        <h2>Loadin...</h2>
      )}
    </div>
  )
}

export default ItemListContainer
