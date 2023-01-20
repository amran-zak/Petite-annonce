import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../Components/404/NotFound";
import Header from "../Components/NavBar/Header";
import Home from "../Components/Annonces/Home";
import Details from "../Components/Annonces/DetailPage/DetailPage";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import New_password from "../Components/Auth/New_password";
import UserProfile from "../Components/Auth/Profile/UserProfile"
import Add_AirBnb from "../Components/Annonces/AirBnb/Add_AirBnb";
import View_Airbnb from "../Components/Annonces/AirBnb/View_AirBnb";
import Modify_Airbnb from "../Components/Annonces/AirBnb/Modify_AirBnb";

import AirBNB from "../Components/Annonces/AirBnb/DetailPage/DetailPage";



export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-body">
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details" element={<Details />} />
            <Route path="/connexion" element={<Login/>} />
            <Route path="/inscription" element={<SignUp/>} />
            <Route path="/nouveau_mot_de_passe" element={<New_password/>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/voir_annonce_airbnb" element={<View_Airbnb/>} />
            <Route path="/ajouter_annonce_airbnb" element={<Add_AirBnb/>} />
            <Route path="/modifier_annonce_airbnb" element={<Modify_Airbnb/>} />
            <Route path="/airbnb" element={<AirBNB/>} />
            {/*<Route path='/forbiddenAccess' element={<LoginPage/>} />*/}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
