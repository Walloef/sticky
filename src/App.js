import React from "react";
import "./styles.scss";
import Nav from "./components/Nav";
import DummyData from "./components/DummyData";
import SubMenu from "./components/SubMenu";

export default function App() {
  return (
    <div className="wrapper">
      <Nav />
      <DummyData amount={1} />
      <DummyData amount={3} />
      <SubMenu />
      <DummyData amount={2} />
      <DummyData amount={1} />
    </div>
  );
}
