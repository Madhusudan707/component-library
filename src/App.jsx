import { SideNav,Contact } from "./Components";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SideNav />
      <Contact/>
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
