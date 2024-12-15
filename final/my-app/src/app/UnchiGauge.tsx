"use client";
import React from "react";

const UnchiGauge: React.FC<{ unchi: number }> = ({ unchi }) => {
  const hearts = Array(4)
    .fill(0)
    .map((_, index) => {
      return (
        <img
          src="./unchi.png"
          key={index}
          style={{
            visibility: index < unchi ? "visible" : "hidden", // ウンチの数分表示する（最大4個）
            width: 50,
            height: 50,
            marginTop: 90,
          }}
        ></img>
      );
    });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>{hearts}</div>
    </div>
  );
};

export default UnchiGauge;
