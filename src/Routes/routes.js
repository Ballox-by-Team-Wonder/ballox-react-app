import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/SecondaryComponents/navBar/navBar.component";
import Test from "../Infrastructure/Test/Test";
import Home from "../Pages/Home";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default Navigation;
