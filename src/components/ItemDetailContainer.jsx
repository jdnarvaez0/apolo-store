import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products/{itemId}'

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // json = json.filter((item) => item.id === itemId)
        // let myProducto = json[0]
        setProducto(json)
        console.log(json)
      })
  }, [itemId])

  return (
    <>
      {itemId}
      <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer
