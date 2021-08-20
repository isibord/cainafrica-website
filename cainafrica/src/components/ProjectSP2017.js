import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage, PostIframe, PostIframeWrapper} from './StyledComponents.js';
import CAINSP20172 from '../images/ProjectsData/CAINSP20172.JPG';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';
import summerImage2 from "../images/Tutorial/FNS.jpg";


const ProjectSP2017 = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>PROJECTS</TopHeaderText>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>

            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>CAIN Weekly Tutorial Program</PostHeader>
                    <PostParagraph> 
              CAIN Summer Tutorial Program is one of the key areas of intervention
            of the CAIN Scholars' Program, which is aimed at helping children
            from low-income families in Ikotun/Igando local government area gain
            access to quality educational resources, educational enhancement
            programs and equip them with skills to become globally competitive.
            When this programme was launched in August 2017, our tutors utilized
            very creative methods of teaching to aid better comprehension. For
            example, students learned songs to help them solve everyday
            mathematics problems such as multiplication and division. Students
            also received mathematical names like zainumeral, which they loved
            so much, and to our surprise, even students who disliked mathematics
            indicated that they could attend our mathematics class all day long.
            Similar creativity was applied to teach the other subjects. Students
            also learned about manners and how to make use of the five magic
            words in their daily interactions.
            <br></br>
            <br></br> A revamped format of this program is currently ongoing at
            our resource center and it involves four highly qualified tutors
            taking one hundred and twenty J.S.S.1 to S.S.S.3 students (20
            students from each class) in Mathematics and English lessons. The
            lessons take place every Monday to Saturday from 3pm to 6pm. In
            addition, extra attention is given to J.S.S.3 and S.S.S.3 students
            to adequately prepare them for external examinations. Like all our
            programs, this program is free so students aren’t charged any fees
            to participate. 

                    </PostParagraph>                
                </PostWrapper>

                <MediaWrapper>
                {/* style={{paddingLeft:"1rem"}} */}
                    <PostIframeWrapper>
                        <PostIframe  width="520" height="315" src="https://www.youtube.com/embed/pvpD_hIAqrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper>
                    <SingleImage>
                        <PostImage src={`${CAINSP20172}`} />
                        <i style={{padding: '1rem 0'}}>CAIN Tutorial Class at its inception in 2017</i>
                    </SingleImage>
                    <SingleImage>
                        <PostImage src={`${summerImage2}`} />
                        <i style={{ padding: "1rem 0" }}>
                        Students and Tutors from the CAIN Weekly Tutorial Program.
                        </i>
                    </SingleImage>
                </MediaWrapper>
            </OverallWrapper>
        </div>
    )
}

export default ProjectSP2017;
