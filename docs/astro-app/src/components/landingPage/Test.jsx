/** @jsxImportSource react */
import { Hero } from "./Hero.jsx";
import { Navbar } from "./Navbar.jsx";
import { FAQ } from "./FAQ.jsx";
import { Footer } from "./Footer.jsx";
import { motion } from "framer-motion";

export const Test = () => {
  return (
    <>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <FAQ />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};
