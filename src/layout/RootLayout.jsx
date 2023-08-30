// react
import { Outlet } from "react-router-dom";
import { useState } from "react";
// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function RootLayout({ mode, setMode }) {
  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <main>
        <Outlet mode={mode} />
      </main>
      <Footer mode={mode} />
    </>
  );
}

export default RootLayout;
