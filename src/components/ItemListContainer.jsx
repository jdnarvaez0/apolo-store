import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getFirestore } from '../firebase/index'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  // const { catId } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const itemCollection = db.collection('items')
    //.where('category', '==', 'adidas');

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log('no hay documentos con en ese query')
          return
        }

        console.log('hay documentos')

        //console.log(querySnapShot.docs);

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
