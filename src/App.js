import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import OrderComplete from './pages/OrderComplete';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/detail/:name">
            <DetailPage></DetailPage>
          </Route>
          <Route path="/signup">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrderPage></PlaceOrderPage>
          </Route>
          <Route path="/orderComplete">
            <OrderComplete></OrderComplete>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
