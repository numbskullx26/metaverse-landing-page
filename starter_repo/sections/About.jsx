"use client";
import { TypingText } from "../components";
import styles from "../styles";

import { fadeIn, staggerContainer } from "../utils/motion";

import { motion } from "framer-motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The Metaverse,</span>
        also stated as a virtual world is not just imagination but will be a
        reality in the coming years.
        <span className="font-extrabold text-white">The creation</span> of this
        digital realm will be possible by collecting different technological
        devices. Every task like shopping, playing, office work, meetings,
        seminars, entertainment, etc could be easily done by us in this virtual
        world. This will be possible by the efforts of companies like{" "}
        <span className="font-extrabold text-white">Facebook, Microsoft</span>,
        etc that are showing their interests in working on this concept to bring
        the existence of the virtual world into reality. The movies like The
        <span className="font-extrabold text-white">
          {" "}
          Matrix and Ready Player One
        </span>
        had given the representation of the virtual world in it.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
