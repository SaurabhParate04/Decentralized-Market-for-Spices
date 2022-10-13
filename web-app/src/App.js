import React,{useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import UserState from './context/User/UserState';
import Home from './pages/Home'
import Products from './pages/Products';

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
          </Switch>
        </Router>
      </UserState>
    </div>
  );
}

export default App;

