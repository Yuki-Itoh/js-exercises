"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer: React.FC<{
  play: () => void;
  feed: () => void;
  toilet: () => void;
  treat: () => void;
}> = ({ play, feed, toilet, treat }) => {
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
    <div
      style={{
        position: "absolute",
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        marginTop: 230,
      }}
    >
      <img
        src="play.png"
        onClick={play}
        style={{ width: "15%", height: "15%" }}
      />
      <img
        src="meal.png"
        onClick={feed}
        style={{ width: "15%", height: "15%" }}
      />
      <img
        src="toilet.png"
        onClick={toilet}
        style={{ width: "15%", height: "15%" }}
      />
      <img
        src="injection.png"
        onClick={treat}
        style={{ width: "15%", height: "15%" }}
      />
    </div>
  );
};

export default Footer;
