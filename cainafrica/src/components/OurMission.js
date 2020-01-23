import React from 'react';
import styled from 'styled-components';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, MidSection, MidParagraphOne} from './StyledComponents.js';
import TopOurMission2 from '../images/Our Mission/TopOurMission2.JPG';
import Toolbar from './Toolbar/Toolbar.js';

export const PostIframe = styled.iframe`
    padding-left: 0.5rem;
    border: 2px solid white;
    margin: auto;
    // border: 1px solid black;
    @media (max-width: 768px) {
        // padding-top: 5rem;
        padding-left: 0rem;
        width: 100%; 
        height: 15rem;
    }
`

const OurMission = (props) => {

    return(
        <div>
            <TopImage style={{backgroundImage: `url(${TopOurMission2})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>CAIN'S MISSION</TopHeaderText>
                    
                    <TopParaText>"BE THE CHANGE YOU WANT TO SEE IN THE WORLD." - MAHATMA GANDHI </TopParaText>
                </TextWrapper>
            </TopImage>

            <MidSection>
                <MidParagraphOne>
                    <h2 style={{margin:'0.5rem', fontSize: '1.25rem'}}>OUR MISSION</h2>
                    
                    <h4 style={{color:'#d8aa35',margin:'0.5rem', fontSize: '1.25rem'}}>Our mission is to provide quality education and healthcare to the less privileged in impoverished African societies.</h4>
                    
                    <p style={{margin:'0.5rem', fontSize: '1.25rem'}}>CAIN (Catering to Africans In Need) is a 501(c)(3) non-profit organization established in 2013 by young adults who are very passionate about helping the less privileged in Africa. Our main target areas are healthcare and education. At the heart of this foundation is the belief that everyone should have access to quality education and healthcare regardless of socioeconomic status.</p>
                </MidParagraphOne>
                <PostIframe width="560" height="315" src="https://www.youtube.com/embed/pvpD_hIAqrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"></PostIframe>
                {/* <MidParagraphTwo /> */}
            </MidSection>

            <div>

            </div>
        </div>
    )
}

export default OurMission;