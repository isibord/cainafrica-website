import React from 'react';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import CainIjegunClassroom from '../images/ProjectsData/CainIjegunClassroom.JPG';
import CainIjegunClassroomTeam from '../images/ProjectsData/CainIjegunClassroomTeam.JPG';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';

const ProjectArise = (props) => {


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
                    <PostHeader>ARISE (Allocating Resources to Improve School Experience) </PostHeader>
                    <PostParagraph>In the past two years, the ARISE project has helped transform the learning experiences of over three hundred students in Ijegun Community primary school 1.  About two hundred textbooks in the major subjects — Mathematics and English— have been donated to the school. With a better foundation being developed in these subjects, the students attain a greater chance of achieving higher academic goals as most standardized examinations test students’ ability to solve problems analytically and to communicate effectively. New whiteboards have also been mounted in all the classrooms, including supplies of board markers and board erasers to facilitate the lecturing process. In the same vein, over nine hundred and fifty notebooks, including 28 dozens of pencils, and over two hundred pencil erasers have been donated. <br/> <br/>
                    Upon our arrival at the school’s location, a school official pleaded with us to provide stationery for the children as many of them were without these necessary tools for learning. It is no surprise to see how taking notes has greatly enhanced the students’ learning capabilities. We plan to continue effecting positive changes by building an educational resource center in the community, which provides students in all of Ijegun with access to more educational resources. By focusing on Ijegun Community Primary 1, we have only improved the quality of education for the number of students in attendance — a small percentage of the total number of students receiving substandard education in the community. Hence, an educational center in the community will immensely increase the number of students in these poor circumstances, who will have access to vast educational resources.
                    
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <SingleImage>
                        <PostImage src={`${CainIjegunClassroom}`} />
                        <i style={{padding: '1rem 0'}}>A classroom at  Ijegun Community Primary School 1</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${CainIjegunClassroomTeam}`}/>
                        <i style={{padding: '1rem 0'}}>Members of our team with some school officials and students after donating whiteboards, stationery and books to Ijegun Community Primary School 1</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectArise;