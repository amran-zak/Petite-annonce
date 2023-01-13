import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../Components/404/NotFound";
import Header from "../Components/NavBar/Header";
import Home from "../Components/Annonces/Home";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import New_password from "../Components/Auth/New_password";


export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-body">
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/connexion" element={<Login/>} />
            <Route path="/inscription" element={<SignUp/>} />
            <Route path="/nouveau_mot_de_passe" element={<New_password/>} />
            {/*<Route path='/forbiddenAccess' element={<LoginPage/>} />*/}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
