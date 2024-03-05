// import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const MyOrdersCard = (props) => {
  const { totalProducts, totalPrice } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>05/03/2024</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

MyOrdersCard.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default MyOrdersCard;
