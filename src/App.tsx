import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {routes} from './router.js'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="layout">
    <Router>
      <div className="header">
        <Link to="/">
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png"
          alt="starwars"
          className="avatar"/>
        </Link>
      </div>

      {/* <Switch> */}
        {
          routes.map(({component: Component, ...restProps}) => (
            <Route
            key={restProps.path}
            {...restProps}
            render={(props) => (<Component {...props}/>)}
            />
          ))
        }
      {/* </Switch> */}
    </Router>
    </div>
  );
}

export default App;
