import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>{/**switch between pages with no refreshing */}
          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path = "/login">
            <h1>Login</h1>
          </Route>

          {/*  This sis the defailt route*/}
          <Route path = "/">
            <Header />
            <Home />
          </Route>

        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
