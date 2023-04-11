"use client";

import styles from "../styles";

import { navVariants } from "../utils/motion";

import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className=""
  </motion.nav>
);

export default Navbar;
