import React from "react";
import dummyDataStyle from "./dummyData.module.scss";

export default function DummyData({ amount }) {
  return (
    <div className={dummyDataStyle.wrapper}>
      {Array(amount)
        .fill()
        .map((dummy, index) => (
          <div className={dummyDataStyle.block} key={index}></div>
        ))}
    </div>
  );
}
