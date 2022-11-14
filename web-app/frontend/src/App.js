import React,{useEffect} from 'react';
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
import LoginBusiness from './pages/LoginBusiness';
import SignupBusiness from './pages/SignupBusiness';
import HomeBusiness from './pages/HomeBusiness';
import ProductForm from './pages/ProductForm';

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
            <Route exact path="/products">
              <Products useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/login">
              <Login useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/signup">
              <Signup useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/productdetails" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </UserState>
      <BusinessUserState>
        <Router >
          <Switch>
            <Route exact path="/business/login">
              <LoginBusiness useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/business/signup">
              <SignupBusiness useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/business">
              <HomeBusiness useScrollToTop={useScrollToTop} />
            </Route>
            <Route exact path="/business/productform">
              <ProductForm useScrollToTop={useScrollToTop} />
            </Route>
          </Switch>
        </Router>
      </BusinessUserState>
    </div>
  );
}

export default App;

