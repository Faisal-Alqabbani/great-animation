import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollRevel } from "../animation";

function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollRevel} ref={element} animate={controls}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                iste.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What Product Do you offer?">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                iste.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                iste.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment">
          <div className="questions">
            <div className="answer">
              <p>Lorem ipsum dolor sit.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                iste.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  h4 {
    cursor: pointer;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
