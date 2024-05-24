import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "../../Context/StoreContext";

function Navbar() {
  const {
    selectedProducts,
    categories,
    setSearchByCategory,
    toggleCheckoutSideMenu,
    setSignOut,
    signOut,
  } = useStoreContext();
  const activeStyle = "underline underline-offset-4";

  // Sign Out

  const isSignOut = localStorage.getItem("signOut");
  const parsedSignOut = JSON.parse(isSignOut);
  const isUserSignOut = signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("signOut", stringifiedSignOut);
    setSignOut(true);
  };

  const accountLinks = [
    {
      name: "juanfesr01@gmail.com",
      to: "/Profile",
      className: "text-black/60",
    },
    { name: "MyOrders", to: "/MyOrders", className: "" },
    { name: "MyAccount", to: "/MyAccount", className: "" },
  ];

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to={"SignIn"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          {accountLinks.map((link) => (
            <li key={link.name} className={link.className}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={"SignIn"}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 left-0 w-full py-5 px-8 text-sm border-b-1 bg-white shadow-lg">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            onClick={() => setSearchByCategory(null)}
            style={{ activeStyle }}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/"}
            onClick={() => setSearchByCategory(null)}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        {categories.map((category) => (
          <li key={category} className="capitalize">
            <NavLink
              to={`/${category}`}
              onClick={() => setSearchByCategory(category)}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex gap-3 items-center">
        {renderView()}
        <li className="relative">
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <FaShoppingCart
              className="w-4 h-4"
              onClick={() => toggleCheckoutSideMenu()}
            />
            <div className="absolute top-0 right-0 -mt-2 -mr-3 flex justify-center items-center w-4 h-4 bg-green-500 rounded-full text-white text-xs font-semibold ">
              {selectedProducts.length}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
