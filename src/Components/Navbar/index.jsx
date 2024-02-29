import { NavLink } from "react-router-dom";
import { sections, accountLinks } from "./InitialValues";
import { useStoreContext } from "../../Context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const { counter } = useStoreContext();
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg">
          <NavLink to="/" style={{ activeStyle }}>
            Shopi
          </NavLink>
        </li>
        {sections.map((section) => (
          <li key={section.name} className={section.className}>
            <NavLink
              to={section.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {section.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 items-center">
        {accountLinks.map((link) => (
          <li key={link.name} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <NavLink to="/Carrito" style={{ activeStyle }}>
          <div className="flex justify-between gap-2">
            <FaShoppingCart /> {counter}
          </div>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
