'use client';

import { TypingText, StartSteps, TitleText } from "../components";
import { startingFeatures } from "../constants";
import styles from "../styles";

import { staggerContainer , fadeIn, planetVariants } from "../utils/motion";


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >