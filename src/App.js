import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { createContext, useEffect, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

export const UserContext = createContext();
export const AppContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);

  return (
    <UserContext.Provider value={loggedInUser, setLoggedInUser}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
