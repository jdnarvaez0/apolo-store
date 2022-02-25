import { Link } from "react-router-dom";
const Item = ({ producto }) => {
  return (
    <>
      <div className=" w-full h-full flex flex-col items-center justify-center max-w-md p-8 border">
        <div
          className="flex justify-center items-center w-full h-72 bg-cover m-3 ml-1"
          style={{ backgroundImage: `url(${producto.image})` }}
        />
        <div className="w-56 -mt-4 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 text-xs font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {producto.title}
          </h3>
          <div className="flex items-center text-lg justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              $ {producto.price}
            </span>
            <Link
              to={`/item/${producto.id}`}
              className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
