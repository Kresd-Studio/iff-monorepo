import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Products from "../components/Sections/Products";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Gallery from "../components/Sections/Gallery";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <About />
      <Products />
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
}


