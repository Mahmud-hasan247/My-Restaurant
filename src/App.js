import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import OrderComplete from './pages/OrderComplete';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';

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
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
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
