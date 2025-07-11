import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import ProductInfo from "../components/Sections/Product";
import Contact from "../components/Sections/Contact";
import WhatsAppButton from "../components/Buttons/Whatsapp";

export default function ProductDetail() {
  return (
    <>
      <TopNavbar />
      <ProductInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}


