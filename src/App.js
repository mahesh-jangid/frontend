import Nav from "./components/Nav";
import Home from "./pages/Home";
import Productpage from "./pages/Product/Productpage";
import Cartpage from "./pages/Cart/Cartpage";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./pages/Login/LoginScreen";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollIntoView from "./components/Scrollintoview";
import RingLoader from "react-spinners/RingLoader";
import RegisterScreen from "./components/RegisterScreen";
import ProfileScreen from "./components/ProfileScreen";
import Checkout from "./pages/checkout/Checkout";
import Placeorder from "./pages/placeorder/Placeorder";
import Order from "./pages/Order/Order";
import Users from "./pages/Userslist/Users";
import NotFoundPage from "./components/Notfoundpage";
import Edituser from "./pages/Useredit/Edituser";
import Products from "./pages/products/products";
import Editproduct from "./pages/Editproduct/Editproduct";
import Orders from "./pages/Orders/Orders";

const App = () => {
  const [loading, setLoading] = useState(false);
  // console.log(process.env.REACT_APP_HOME_URL);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="main">
      <Router>
        <ScrollIntoView>
          {loading ? (
            <div className="loading">
              <RingLoader color="#ff000d" size={65} loading={loading} />
            </div>
          ) : (
            <>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search/:keyword" component={Home} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="/product/:id" component={Productpage} />
                <Route path="/cart/:id?" component={Cartpage} />

                <Route path="/shipping" component={Checkout} />
                <Route path="/placeorder" component={Placeorder} />
                <Route path="/order/:id" component={Order} />

                <Route path="/admin/userlist" component={Users} />
                <Route path="/admin/productlist" component={Products} />
                <Route path="/admin/orderlist" component={Orders} />
                <Route path="/admin/user/:id/edit" component={Edituser} />
                <Route path="/admin/product/:id/edit" component={Editproduct} />

                <Route path="*" component={NotFoundPage} />
              </Switch>
              <Footer />
            </>
          )}
        </ScrollIntoView>
      </Router>
    </div>
  );
};
export default App;
