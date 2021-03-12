import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { titleAnim } from "../animation";
function ContactUs() {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send An Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: #353535;
`;
const Hide = styled.div`
  overflow: hidden;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
