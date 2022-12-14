import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import UserState from './context/User/UserState';
import BusinessUserState from './context/User/BusinessUserState';
import Home from './pages/Home'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Registration from './pages/Registration';
import { Profile } from './pages/Profile';
import HomeBusiness from './pages/HomeBusiness';
import LoginBusiness from './pages/LoginBusiness';
import SignupBusiness from './pages/SignupBusiness';
import RegistrationBusiness from './pages/RegistrationBusiness';
import ProductForm from './pages/ProductForm';
import MarketPlace from './pages/Marketplace';
import MyProducts from './pages/MyProducts';
import { EditProfile } from './pages/EditProfile';
import CheckoutBusiness from './pages/CheckoutBusiness';
import Myorder from './pages/Myorder';
import RawMaterial from './pages/RawMaterial';
import Inventory from './pages/Inventory';
import ManufacturerProductForm from './pages/ManufacturerProductForm';
import ManufacturedProducts from './pages/ManufacturedProducts';
import Market from './pages/Market';
import CheckoutBusinessTransfer from './pages/CheckoutBusinessTransfer';
import MyProductsTransfer from './pages/MyProductsTransfer';


function App() {
  const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
      // scroll to the top of the browser window when changing route
      // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };

  //console.log(account);
  return (
    <div className="App">
      <UserState>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/login">
              <Login useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/signup">
              <Signup useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/register">
              <Registration />
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/editprofile">
              <EditProfile useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/products">
              <Products useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/productdetails" component={ProductDetails} />

            <Route exact path="/myorder">
              <Myorder useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </UserState>

      <BusinessUserState>
        <Router >
          <Switch>
            <Route exact path="/business">
              <HomeBusiness useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/login">
              <LoginBusiness useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/signup">
              <SignupBusiness useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/register">
              <RegistrationBusiness useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/productform">
              <ProductForm useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/marketplace">
              <MarketPlace useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/rawmaterial">
              <RawMaterial useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/myproducts">
              <MyProducts useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/inventory">
              <Inventory useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/checkout">
              <CheckoutBusiness useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/manufacturerproductform">
              <ManufacturerProductForm useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/manufacturedproducts">
              <ManufacturedProducts useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/transfer/market">
              <Market useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/transfer/myproducts">
              <MyProductsTransfer useScrollToTop={useScrollToTop} />
            </Route>

            <Route exact path="/business/transfer/checkout">
              <CheckoutBusinessTransfer useScrollToTop={useScrollToTop} />
            </Route>

          </Switch>
        </Router>
      </BusinessUserState>
    </div>
  );
}

export default App;

