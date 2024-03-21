import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const OrderCards = (props) => {
  const { id, title, image, price, handleDelete } = props;

  return (
    <div className="relative bg-gray-200 rounded-lg p-2 mb-3">
      <div className="flex items-start">
        <figure className="w-14 h-20 bg-white rounded-lg mr-2">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
          />
        </figure>
        <div className="py-1 w-3/5">
          <p className="text-sm font-light line-clamp-2">{title}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        {handleDelete && (
          <FaRegTrashAlt
            className="cursor-pointer hover:text-red-600"
            onClick={() => handleDelete(id)}
          />
        )}
      </div>
      <div className="absolute bottom-2 right-2">
        <p className="text-lg font-medium text-green-500">${price}</p>
      </div>
    </div>
  );
};

OrderCards.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderCards;
