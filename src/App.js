import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import JustArrived from "./components/JustArrived";
import Client from "./components/Client";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <JustArrived />
      <Client />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
