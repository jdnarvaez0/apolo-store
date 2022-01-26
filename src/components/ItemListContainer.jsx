import { useEffect, useState } from "react"
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const url = "https://fakestoreapi.com/products" 

    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setProductos(json);
      console.log(json);
    });
  }, [])


  return (
    <div className="flex flex-wrap container">
      <ItemList productos={productos} />     
    </div>
  )
}

export default ItemListContainer
