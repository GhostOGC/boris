import { Route, Routes } from "react-router";
import Bio from "./Components/BioPage/Bio";
import Contacts from "./Components/ContactsPage/Contacts";
import Projects from "./Components/HomePage/Projects";
import Footer from "./Components/Static/Footer";
import Header from "./Components/Static/Header";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
