"use client";

import styles from "../styles";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";

import { motion } from "framer-motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    />
  </section>
);

export default Hero;
