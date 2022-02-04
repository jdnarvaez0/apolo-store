import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${itemId}`

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducto(json)
        console.log(json)
      })
  }, [itemId])

  return (
    <>
      {itemId}
      <ItemDetail item={producto} />
    </>
  )
}

export default ItemDetailContainer
