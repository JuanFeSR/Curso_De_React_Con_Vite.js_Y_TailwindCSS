import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const OrderCards = (props) => {
  const { title, image, price } = props;

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title} </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium ">${price} </p>
        <FaRegTrashAlt className="cursor-pointer" />
        {/* Agregar Hover rojo. Ver clase: Componente OrderCard para estilos CSS en comentarios. */}
      </div>
    </div>
  );
};

OrderCards.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderCards;
