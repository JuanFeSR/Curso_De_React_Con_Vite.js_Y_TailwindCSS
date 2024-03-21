import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";
import { currentDate } from "../../Utilities";

const MyOrdersCard = (props) => {
  const { totalProducts, totalPrice } = props;

  return (
    <div className="flex justify-between items-center mb-4 shadow-md border rounded-lg border-black w-80 p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="flex justify-between items-center font-light gap-2">
            <MdDateRange />
            {currentDate()}
          </p>
          <p className="flex items-center font-light gap-2">
            <HiMiniShoppingBag /> {totalProducts} Products
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-2xl">${totalPrice}</p>
        <FaChevronRight />
      </div>
    </div>
  );
};

MyOrdersCard.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default MyOrdersCard;
