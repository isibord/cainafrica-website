import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage,TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage, PostIframe, PostIframeWrapper} from './StyledComponents.js';
import CAINASRP20191 from '../images/ProjectsData/CAINASRP20191.jpg';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';




const ProjectASRP2019 = (props) => {
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
                    <PostHeader>Akaeze Summer Reading Program 2018</PostHeader>
                    <PostParagraph> <i>“Reading is essential for those who seek to rise above the ordinary.” <strong>– Jim Rohn</strong></i> <br/><br/>
                    The purpose of this program is to help students cultivate a reading habit and develop critical thinking and communication skills. This program ran from August 11th to September 8th, 2018. The 2018 program was a pilot program because we wanted to create an engaging annual reading program to help students develop their reading, writing and speaking skills and at the same time, educate them on local and global issues. To our surprise, our pupils were so engaged in the discussions that we had to plead with them to take their lunch breaks even though we served very sumptuous meals. <br/><br/>
 
                    The Akaeze Reading program has four components: Reading, Discussions, Vocabulary and Essay writing. The book of choice was Things Fall Apart by Chinua Achebe and the discussions centered around gender roles, domestic violence and toxic masculinity, using examples from the book. We also created opportunities for our students to build their vocabulary and writing skills through vocabulary quizzes and essay writing. To round off the program, we gave two awards - one to the most active student and the other to the student with the best essay. In addition, every student not only received a copy of Things Fall Apart but also received school supplies to prepare them for the next school session.  <br/><br/>
  
                    What we achieved with this program was phenomenal. Our students left with a deep understanding of why domestic violence should not be condoned. Our girls left with greater confidence that they were equal to their male counterparts and our boys became conscious of how to prevent toxic masculinity. In light of these achievements, the Akaeze summer reading program will be one of the main annual programs hosted at our educational resource center. We are excited to continue to use this medium to educate the next generation and build people with superb character. 
 
                    </PostParagraph>                
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper>
                        <PostIframe  src="https://www.youtube.com/embed/ETBP3YoLt6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper>
                    <SingleImage>
                        <PostImage src={`${CAINASRP20191}`} />
                        <i style={{padding: '1rem 0'}}>Desree facilitating one of the reading groups.</i>
                    </SingleImage>

                </MediaWrapper>

                <br/><br/>
                <hr style={{width:'80%'}} />

                <PostWrapper>
                    <PostHeader>Akaeze Summer Reading Program 2019</PostHeader>
                    <PostParagraph>
                    This year, the literature of choice was “Dear Ijeawele, or a Feminist Manifesto in Fifteen Suggestions” by Chimamanda Adichie. We extensively discussed the concepts of feminism and sexual assault and had interesting conversations about marital rape and the stigmatization of sexual assault victims in Nigeria. At the end of the program, our students gained a better understanding on why it’s important to advocate for women’s rights, what constitutes consent, and how to deal with sexual assault cases. As usual, students received school supplies and we gave three awards - quiz whiz, aspiring author and star student. This time around, we asked our awardees what gift they would like, and they suggested we take them out for lunch, games and to watch a movie. We gave them what they asked for and they had a swell time.<br/><br/> 
                    </PostParagraph> 
                </PostWrapper>
                
                <MediaWrapper>
                    <PostIframeWrapper>
                        <PostIframe  src="https://www.youtube.com/embed/bR-mgVJ8mKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                    </PostIframeWrapper> 
                </MediaWrapper>
            </OverallWrapper>
        </div>
    )
}

export default ProjectASRP2019;