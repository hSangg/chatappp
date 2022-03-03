import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import { AuthContext } from "./context/AuthContext";
import Auth from "./pages/Auth";
import Messenger from "./pages/Messenger";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Switch>
        <Route exact path="/">
          {user ? (
            <Redirect to="/messenger" />
          ) : (
            <Auth path="/login" component={LoginForm} />
          )}
        </Route>
        <Route exact path="/register">
          {user ? (
            <Redirect to="/" />
          ) : (
            <Auth path="/register" component={RegisterForm} />
          )}
        </Route>

        <Route exact path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>

        <Route exact path="/login">
          {user ? (
            <Redirect to="/" />
          ) : (
            <Auth path="/login" component={LoginForm} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}
