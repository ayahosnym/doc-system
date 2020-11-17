import React from "react";
import DisplayInfo from "../DisplayInfo/DisplayInfo";
import AddMatch from "../AddMatch/AddMatch";
import "./Home.less";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="brand-name" />
        MATCHES
      </header>
      <main className="site-layout">
        <div className="site-layout-background">
          <AddMatch />
          <DisplayInfo />
        </div>
      </main>
    </>
  );
}
