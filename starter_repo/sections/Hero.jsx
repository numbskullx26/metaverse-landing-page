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
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex jsutify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)}>
          METAVERSE
        </motion.h1>
      </div>
    </motion.div>
  </section>
);

export default Hero;
