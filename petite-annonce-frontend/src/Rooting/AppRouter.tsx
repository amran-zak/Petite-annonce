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
import AirBNB from "../Components/Annonces/AirBnb/DetailPage/DetailPage";
import Add_Annonces from "../Components/Annonces/Add_Annonces";
import Details_id from "../Components/Annonces/DetailPage/DetailPageid";
import AirBNB_id from "../Components/Annonces/AirBnb/DetailPage/DetailPage_id"

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
            <Route path="/airbnb" element={<AirBNB/>} />
            <Route path="/ajouter_annonce" element={<Add_Annonces/>} />
            {/*<Route path='/forbiddenAccess' element={<LoginPage/>} />*/}

            <Route path="/details/:id" element={<Details_id/>} />
            <Route path="/airbnb/:id" element={<AirBNB_id/>} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
