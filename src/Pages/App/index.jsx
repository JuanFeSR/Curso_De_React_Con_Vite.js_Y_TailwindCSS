// React Router
import { BrowserRouter, useRoutes } from "react-router-dom";

// Components
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import SignIn from "../SignIn";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

//Styles
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/MyOrders/last", element: <MyOrder /> },
    { path: "/MyOrders/:id", element: <MyOrder /> },
    { path: "/:Category", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu />
    </BrowserRouter>
  );
};

export default App;
