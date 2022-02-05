import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const { catId } = useParams()

  useEffect(() => {
    setLoading(true);
    const URL = catId ? `https://fakestoreapi.com/products/category/${catId}` : 'https://fakestoreapi.com/products/';

    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setProductos(json)
        console.log(json)
      })
      .finally(() => setLoading(false))
  }, [catId])

  return (
    <div className='flex flex-wrap container'>
      {loading ? <Loader /> : <ItemList productos={productos} />}
    </div>
  )
}

export default ItemListContainer
