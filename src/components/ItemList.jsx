import Item from './Item'

export default function ItemList({ productos }) {
  return (
    <>
      {productos.length > 0 ? (
        <div className='container flex flex-wrap ml-24'>
          {productos.map((producto) => {
            return (
              <div key={producto.id}>
                <Item producto={producto} />
              </div>
            )
          })}
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  )
}
