import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../Components/404/NotFound";
import Header from "../Components/NavBar/Header";
import Home from "../Components/Annonces/Home";

export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div>
          <Header />
        </div>
        <div className="app-body">
          <Routes>
            <Route path="/login" element="" />
            <Route path="/" element={<Home />} />
            {/*<Route path='/forbiddenAccess' element={<LoginPage/>} />*/}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}