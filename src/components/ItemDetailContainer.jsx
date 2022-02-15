import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../contex/CartProvider";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    setLoading(true);

    const URL = `https://fakestoreapi.com/products/${itemId}`;
    const getItem = fetch(URL);
    getItem
      .then((res) => res.json())
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  const onAdd = (count) => {
    console.log(`Agregaste ${producto.title}, cantidad: ${count}.`);
    addToCart(producto, count);
    setAdded(true); // seteo en tru cuando es agregado el producto
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail item={producto} onAdd={onAdd} added={added} />
      )}
    </>
  );
};

export default ItemDetailContainer;
