import Item from './Item'

export default function ItemList({ productos }) {
  return (
    <>
      {
        <div className=' flex flex-wrap items-center justify-center ml-14 '>
          {productos.map((producto) => {
            return (
              <div className='m-4' key={producto.id}>
                <Item producto={producto} />
              </div>
            )
          })}
        </div>
      }
    </>
  )
}
