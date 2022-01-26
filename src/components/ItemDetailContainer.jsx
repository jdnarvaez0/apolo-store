import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
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
    <div>
      <ItemDetail productos={productos} /> 
    </div>
  )
}

export default ItemDetailContainer
