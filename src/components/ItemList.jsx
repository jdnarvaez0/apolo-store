import Item from './Item'

export default function ItemList({ productos }) {
    console.log(productos)
  return (
    <>
      {
        <div className='container flex flex-wrap justify-center ml-14 '>
          {productos.map((producto) => {
            return (
              <div className='m-2' key={producto.id}>
                <Item producto={producto} />
              </div>
            )
          })}
        </div>
      }
    </>
  )
}
