import React from "react";
import "./styles.scss";
import Nav from "./components/Nav";
import DummyData from "./components/DummyData";
import QuickMenu from "./components/QuickMenu";

export default function App() {
  return (
    <div className="wrapper">
      <Nav />
      <DummyData amount={1} />
      <DummyData amount={3} />
      <QuickMenu />
      <DummyData amount={2} />
      <DummyData amount={1} />
    </div>
  );
}
