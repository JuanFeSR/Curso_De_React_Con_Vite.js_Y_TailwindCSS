import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrder";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

function App() {
  return (
    <div className="bg-slate-400">
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </div>
  );
}

export default App;
