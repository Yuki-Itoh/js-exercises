"use client";
import React, { useState } from "react";

const HungerGauge: React.FC<{ hunger: number }> = ({ hunger }) => {
  const hearts = Array(4)
    .fill(0)
    .map((_, index) => {
      return (
        <span
          key={index}
          style={{
            cursor: "pointer",
            color: index < hunger / 25 ? "red" : "lightgray", // 満腹度に応じてハートを赤にする
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
      <p style={{ fontSize: 10 }}>おなか ({hunger})</p>
      <div style={{ display: "flex", justifyContent: "center" }}>{hearts}</div>
    </div>
  );
};

export default HungerGauge;
