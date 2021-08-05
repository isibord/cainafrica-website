import React from "react";
import Toolbar from "./Toolbar/Toolbar.js";
import {
  TopImage,
  TextWrapper,
  TopHeaderText,
  TopParaText,
  OverallWrapper,
  PostWrapper,
  PostHeader,
  PostParagraph,
  PostImage,
  MediaWrapper,
  SingleImage,
} from "./StyledComponents.js";
import CAINASRP20191 from "../images/christmas/IMG2.JPG";
import CHRISTMAS1 from "../images/christmas/IMG4.jpg";
import CHRISTMAS2 from "../images/christmas/IMG1.JPG";
import CHRISTMAS3 from "../images/christmas/IMG3.JPG";
import projectsCover from "../images/ProjectsData/projectsCover.jpg";

const ProjectASRP2019 = (props) => {
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
        <TextWrapper>
          <TopHeaderText>PROJECTS</TopHeaderText>
          <TopParaText>
            “SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM
            THE WORLD.” — HOWARD ZINN
          </TopParaText>
        </TextWrapper>
      </TopImage>

      <OverallWrapper>
        <PostWrapper>
          <PostHeader>Christmas Benevolence Project </PostHeader>
          <PostParagraph>
            <br />
            This is an initiative borne out of our desire to help and support
            the less fortunate members of underprivileged communities during the
            Christmas festive season. It's a benevolence project aimed at
            providing food and other gift items to indigent families during
            Christmas. The maiden edition of this program took place in December
            2020 and it was tagged The 50/50 Campaign. Donors were invited to
            participate by donating up to $50 to support 50 families with food
            items and Covid-19 sanitary materials. The programme was well
            planned and implemented and beneficiaries were carefully selected
            from the Ikotun/Igando community based on certain socio-economic
            vulnerability indicators. The program was a huge success as all the
            50 target beneficiaries were reached and immensely supported. Like
            some of our key programs, our aim is to make this an annual event.
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <SingleImage>
            <PostImage src={`${CAINASRP20191}`} />
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CHRISTMAS3}`} />
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CHRISTMAS1}`} />
          </SingleImage>
          <SingleImage>
            <PostImage src={`${CHRISTMAS2}`} />
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectASRP2019;
