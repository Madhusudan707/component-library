import { SideNav } from "./Components";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
import "./App.css";

const App = () => {
  console.log({routes})
  return (
    <div className="App">
      <SideNav />
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
