import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import NavBar from "../Home/NavBar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new GoogleAuthProvider();
  initializeApp(firebaseConfig);
  const auth = getAuth();

  // signIn
  function signInPopUp() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        var { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signInUser);
        // localStorage.setItem('user', JSON.stringify(signInUser));
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.code, error.message, error.email);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
    
  // signOut
  // signOut(auth).then(() => {
  //   alert("Sign-out successful.");
  // }).catch((error) => {
  //   console.log({error})
  // });

  return (
    <div>
      <NavBar/>
      <div className="text-center">
      <h1>login New</h1>
      <button className="bg-gray-300 rounded px-2 py-3" onClick={signInPopUp}>
        Sign in with Google
      </button>
    </div>
    </div>


  );
};

export default Login;