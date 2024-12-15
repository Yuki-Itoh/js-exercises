"use client";

import React, { useState, useEffect } from "react";
import styles from "./GameScreen.module.css";
import Header from "./Header";
import Footer from "./Footer";
import KuchiPatchi from "./character/Kuchipatchi";
import UnchiGauge from "./UnchiGauge";
import DiseaseIcon from "./DiseaseIcon";
import { motion } from "framer-motion";

const GameScreen: React.FC = () => {
  const [hunger, setHunger] = useState<number>(100);
  const [happiness, setHappiness] = useState<number>(100);
  const [unchi, setUnchi] = useState<number>(0);
  const [hasDisease, setDisease] = useState<boolean>(false);

  useEffect(() => {
    // 空腹度と幸福度を定期的に減少
    const statusTimer = setInterval(() => {
      setHunger((prev) => Math.max(prev - 5, 0));
      setHappiness((prev) => Math.max(prev - 3, 0));
    }, 10000);

    // 30秒おきにうんちをする
    const unchiTimer = setInterval(() => {
      setUnchi((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(statusTimer);
      clearInterval(unchiTimer);
    };
  }, []);

  if (unchi >= 10 && !hasDisease) {
    setDisease(true);
  }

  const feed = () => setHunger((prev) => Math.min(prev + 10, 100));
  const play = () => setHappiness((prev) => Math.min(prev + 10, 100));
  const toilet = () => setUnchi(0);
  const treat = () => {
    setDisease(false);
  };

  return (
    <div className={styles.gameScreen}>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <Header hunger={hunger} happiness={happiness} />
        <DiseaseIcon hasDisease={hasDisease} />
        <KuchiPatchi />
        <UnchiGauge unchi={unchi} />
        <Footer play={play} feed={feed} toilet={toilet} treat={treat} />
      </div>
    </div>
  );
};

export default GameScreen;
