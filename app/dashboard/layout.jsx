import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

export default function layout({ children }) {
  return (
    <div className="bg-teal-400 h-screen w-screen ">
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
