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
import projectsCover from "../images/ProjectsData/projectsCover.jpg";
import newJeida01 from "../images/Jeida/BPC.jpg";
import newJeida02 from "../images/Jeida/CHP.jpg";
import newJeida03 from "../images/Jeida/VCC.jpg";
import newJeida04 from "../images/Jeida/Clinic.jpg";

const ProjectBtG = (props) => {
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
          <PostHeader>Bridging the Gap - Health Care For Jeida</PostHeader>
          <PostParagraph>
            Kelechi Umoga, a medical student at Yale University, in partnership
            with CAIN and the Presbyterian church of Nigeria, carried out a
            project to build a healthcare clinic in Jeida, a small village on
            the outskirts of Abuja. In the summer of 2013, with the help of
            grants from Davis Projects for Peace, Engaged Learning and Research
            (ELR) and the Office of Academic Diversity Initiative (both
            departments at Cornell University), we began the process of
            establishing a health clinic in Jeida. By the end of the summer, it
            was built and roofed, and as of present, the construction work in
            its entirety including installment of fittings and painting have
            been completed. Kelechi’s work during the 2014 winter break was
            geared towards the procurement of medical equipment and furniture
            for the clinic, so it could be opened up to the communities by April
            2015. CAIN, being aware of the ongoing work was delighted to partner
            with Kelechi to secure funds from the Gianforte Family Foundation.{" "}
            <br />
            <br />
            Although the neighboring villages were in a better state than Jeida,
            they still face a common challenge of getting immediate access to
            basic health care. Thus, this out-patient health clinic located in
            the heart of the village will serve as a conduit through which basic
            health care can come to Jeida and the surrounding communities. In
            the long run, we hope to see improved health outcomes in these
            communities. Success in this endeavor will be measured by evaluating
            the ensuing mortality rates from preventable diseases. In addition
            to establishing the clinic, voluntary community health workers
            (CHWs) were recruited from the community and trained at a health
            technology school in the city. These CHWs will serve as a liaison
            between the formal health system and the community to help
            facilitate a continuous exchange of information between both
            parties.
          </PostParagraph>
        </PostWrapper>

        <MediaWrapper>
          <SingleImage>
            <PostImage src={`${newJeida04}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              The clinic after final completion of the internal fittings.
            </i>
          </SingleImage>{" "}
          <SingleImage>
            <PostImage src={`${newJeida01}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida02}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
          <SingleImage>
            <PostImage src={`${newJeida03}`} />
            <i style={{ padding: "1rem 0", width: "95%" }}>
              Ongoing humanitarian work at the clinic
            </i>
          </SingleImage>
        </MediaWrapper>
      </OverallWrapper>
    </div>
  );
};

export default ProjectBtG;
