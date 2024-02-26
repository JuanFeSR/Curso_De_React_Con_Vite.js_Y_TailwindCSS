// React Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Components
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import SignIn from "../SignIn";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";

//Styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="MyAccount" element={<MyAccount />} />
      <Route path="MyOrder" element={<MyOrder />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="MyOrders" element={<MyOrders />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
