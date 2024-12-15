"use client";

import React, { useState, useEffect } from "react";
import HungerGauge from "./HungerGauge";
import HappyGauge from "./HappyGauge";

const Header: React.FC<{ hunger: number; happiness: number }> = ({
  hunger,
  happiness,
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // 現在時刻を更新
    const clockTimer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(clockTimer);
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
      <HappyGauge happiness={happiness} />
      <HungerGauge hunger={hunger} />
      <p>{currentTime}</p>
    </div>
  );
};

export default Header;
