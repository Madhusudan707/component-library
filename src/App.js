import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./config/routing/routes";
import Sidenav from "./components/Sidenav/Sidenav";
import Header from "./components/Header/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidenav />
        <Switch>
          {routes.map((route, key) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={key}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
