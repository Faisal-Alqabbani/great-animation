import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// import Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
// TEST TOOL
import { useScroll } from "./useScroll";
import { fade } from "../animation";

function ServiceSection() {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} ref={element}>
      <Description>
        <h2>
          High <span>quality</span> Skils
        </h2>
        <Cards>
          {/* Card one*/}
          <Card>
            <div className="icons">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card two*/}
          <Card>
            <div className="icons">
              <img src={diaphragm} alt="diaphragm" />
              <h3>diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card Three*/}
          <Card>
            <div className="icons">
              <img src={teamwork} alt="money" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card four*/}
          <Card>
            <div className="icons">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icons {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServiceSection;
