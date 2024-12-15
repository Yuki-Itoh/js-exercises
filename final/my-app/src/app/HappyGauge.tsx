"use client";
import React, { useState } from "react";

const HappyGauge: React.FC<{ happiness: number }> = ({ happiness }) => {
  const hearts = Array(4)
    .fill(0)
    .map((_, index) => {
      return (
        <span
          key={index}
          style={{
            cursor: "pointer",
            color: index < happiness / 25 ? "red" : "lightgray", // 満腹度に応じてハートを赤にする
            fontSize: "1rem",
            margin: "0 5px",
          }}
        >
          ♥
        </span>
      );
    });

  return (
    <div>
      <p style={{ fontSize: 10 }}>ごきげん ({happiness})</p>
      <div style={{ display: "flex", justifyContent: "center" }}>{hearts}</div>
    </div>
  );
};

export default HappyGauge;
