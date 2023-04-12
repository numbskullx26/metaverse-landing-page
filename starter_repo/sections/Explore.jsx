"use client";

import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreworlds } from "../constants";
import styles from "../styles";

import { staggerContainer } from "../utils/motion";

import { motion } from "framer-motion";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    />
  </section>
);

export default Explore;
