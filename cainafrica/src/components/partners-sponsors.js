import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  TopHeaderText,
  TopParaText,
  OuterDiv,
  KeyDiv,
} from "./StyledComponents.js";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";
import sp1 from "../images/PS/CLINTON GLOBAL INITIATIVE UNIVERSITY.jpg";
import sp2 from "../images/PS/CORNELL UNIVERSITY.png";
import sp3 from "../images/PS/DAVIS PROJECT FOR PEACE.png";
import sp4 from "../images/PS/GATES VENTURES.jpg";
import sp5 from "../images/PS/crossbonds.jpg";
import sp6 from "../images/PS/MICROSOFT.jpg";

const PartenersSponsorsData = [
  {
    index: 1, //These should be incremental from the last interger
    image: `${sp1}`,
  },
  {
    index: 2,
    image: `${sp2}`,
  },
  {
    index: 3,
    image: `${sp3}`,
  },
  {
    index: 4,
    image: `${sp4}`,
  },
  {
    index: 5,
    image: `${sp5}`,
  },
  {
    index: 6,
    image: `${sp6}`,
  },
];

const SponsorsImage = styled.img`
  margin: auto;
  border-radius: 0.8rem;
  width: auto;
  max-width: 20rem;
  height: 10rem;
  padding: 2rem;
  @media (max-width: 320px) {
    margin: 0rem;
    width: 10rem;
    margin: 1rem auto;
  }
`;

const PartnersSponsors = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    All();
  }, []);

  let All = () => {
    setData(PartenersSponsorsData);
  };

  return (
    <div>
      <TopImage
        style={{
          backgroundImage: `url(${projectsCover})`,
          backgroundPosition: "center",
        }}
      >
        <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
        {props.sideDrawer}
        <TextWrapper style={{}}>
          <TopHeaderText>Partners & Sponsors</TopHeaderText>
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>
      <a
        style={{
          backgroundColor: "#d8aa35",
          color: "white",
          textDecoration: "none",
          padding: "2px 6px",
          fontSize: "12px",
          fontWeight: "bold",
          display: "inline-block",
        }}
        href="https://unsplash.com/@octadan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Octavian Dan"
      >
        <span style={{ display: "inline-block", padding: "2px 3px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "12px",
              width: "auto",
              position: "relative",
              verticalAlign: "middle",
              top: "-2px",
              fill: "white",
            }}
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </span>
        <span style={{ display: "inline-block", padding: "2px 3px" }}>
          Photo by: Octavian Dan on Unsplash
        </span>
      </a>
      <h1 style={{ textAlign: "center" }}>Our Partners & Sponsors</h1>
      <OuterDiv>
        {data.map((ps) => (
          <KeyDiv key={ps.index}>
            <SponsorsImage src={ps.image} class="sponsor_pic"></SponsorsImage>
          </KeyDiv>
        ))}
      </OuterDiv>
    </div>
  );
};

export default PartnersSponsors;
