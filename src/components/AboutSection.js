import React from "react";
import home1 from "../img/Faisal-pic.jpg";
import { motion } from "framer-motion";
import { About, Hide, Description, Image } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>I Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>Dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Come True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas we have a
          profissionals with amazing skils{" "}
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="home" />
      </Image>
      <Wave />
    </About>
  );
}

export default AboutSection;
