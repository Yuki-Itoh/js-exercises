"use client";
import React from "react";

const DiseaseIcon: React.FC<{ hasDisease: boolean }> = ({ hasDisease }) => {
  return (
    <div>
      <img
        src="/disease.png"
        style={{
          height: 40,
          width: 40,
          marginLeft: "auto",
          marginRight: 20,
          visibility: hasDisease ? "visible" : "hidden",
        }}
      ></img>
    </div>
  );
};

export default DiseaseIcon;
