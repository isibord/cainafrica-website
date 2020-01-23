import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage, PostIframe, PostIframeWrapper} from './StyledComponents.js';
import CAINSP20172 from '../images/ProjectsData/CAINSP20172.JPG';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';


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
                    <PostHeader>CAIN Summer Tutorial Program</PostHeader>
                    <PostParagraph> 
                    CAIN Summer Tutorial Program is one of the key areas of intervention of the CAIN Scholars' Program, which is aimed at helping children from low-income families in Ikotun/Igando local government area gain access to quality educational resources, educational enhancement programs and equip them with skills to become globally competitive. This program was held from August 9th, 2017 to September 8th, 2017.  Tutors commenced the program by assessing the students to determine proper placement. Based on the assessments, the students were placed into senior, junior and basic classes respectively. The main subjects taught were Mathematics, English, Sciences and Personal development. <br/><br/>
                    
                    Our tutors utilized very creative methods of teaching to aid better comprehension. For example, the Mathematics class was very interesting as students learned songs to help them solve everyday mathematics problems such as multiplication and division. Students also received mathematical names like zainumeral, which they loved so much, and to our surprise, even students who disliked mathematics indicated that they could attend our mathematics class all day long. Similar creativity was applied to teach the other subjects. Not to mention, the personal development class was also one for the books. Students learned about manners and how to make use of the five magic words in their daily interactions. At the end of the program, awards were given to the best students in each subject and the most well-behaved student. In addition, every student received school supplies to prepare them for the next school year.

                    </PostParagraph>                
                </PostWrapper>

                <MediaWrapper>
                {/* style={{paddingLeft:"1rem"}} */}
                    <PostIframeWrapper>
                        <PostIframe  width="520" height="315" src="https://www.youtube.com/embed/pvpD_hIAqrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper>
                    <SingleImage>
                        <PostImage src={`${CAINSP20172}`} />
                        <i style={{padding: '1rem 0'}}>Students and Tutors from the CAIN Summer Tutorial Program.</i>
                    </SingleImage>

                    
                </MediaWrapper>

            </OverallWrapper>
        </div>
    )
}

export default ProjectSP2017;
