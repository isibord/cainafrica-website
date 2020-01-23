import React from 'react';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, DonateLink, SingleImage, PostImage, PostHeader, PostParagraph, PostWrapper, MediaWrapper, PostIframeWrapper, PostIframe } from './StyledComponents.js';
import CAINERC1 from '../images/ProjectsData/CAINERC1.JPG';
import CAINERC2 from '../images/ProjectsData/CAINERC2.jpg';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';



const ProjectERC = (props) => {

    let scrollToTop = () =>{
        window.scrollTo({top:500,behavior:'smooth'})
    }

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
                    <PostHeader>CAIN Educational Resource Center</PostHeader>                
                    
                    <PostParagraph>
                        For far too long, a good education in Nigeria has been the privilege of only those who can afford it. We believe this is a big problem. To break the cycle of poverty, we are committed to addressing what we believe is a root cause - the absence of quality education for the poor. We believe education needs to be made easily accessible and it needs to happen quickly. We are determined to proffer a solution by establishing an educational resource center to provide effective resources that will enhance intellectual development and consequently lead to self-reliance and socio-economic development.<br/><br/>

                        <strong>Phase 1: Purchase</strong> <br/>            
                        <strong>Status: Completed</strong> <br/>
                        In 2016, we completed payments and acquired the property for the educational resource center. With generous individual donations, together with grants from Microsoft and Davis Projects for Peace, we purchased the property. <br/><br/>

                        <strong>Phase 2: Renovation</strong> <br/>            <strong>Status: Completed Internal renovations but external renovations are still in progress</strong> <br/>
                        To fund renovations, we participated in a fundraising challenge held by the Clinton Global Initiative University and raised funds through the benevity platform at Microsoft and from donors who strongly believe in our mission. Although we’ve completed internal renovations, we still need to build a security station ($5,600) and do compound concreting ($3,400).<br/><br/>

                        <strong>Phase 3: Furnishing</strong> <br/>            <strong>Status: In progress</strong> <br/> 
                        We partnered with the Africans at Microsoft community and the Nigerian Students Association at Cornell University to raise funds to commence furnishing at the educational resource center. Currently, the library, seminar room, waiting room and one classroom are being furnished. Many more rooms still need to be furnished and we need your support. By supporting this project, you can impact the lives of over 50,000 underprivileged students in Nigeria.<br/><br/>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Room</th>
                                    <th>COST (US Dollars)</th>
                                </tr>
                                <tr>
                                    <td>ICT Room</td>
                                    <td>$27,000</td>
                                </tr>
                                <tr>
                                    <td>Alternative sources of Power</td>
                                    <td>$25,000</td>
                                </tr>
                                <tr>
                                    <td>Classroom</td>
                                    <td>$7,000</td>
                                </tr>
                                <tr>
                                    <td>Staff Room</td>
                                    <td>$3,000</td>
                                </tr>
                                <tr>
                                    <td>Kitchenette</td>
                                    <td>$2,500</td>
                                </tr>
                                <tr>
                                    <td>Reception</td>
                                    <td>$2,300</td>
                                </tr>
                                <tr>
                                    <td>Archives</td>
                                    <td>$700</td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <strong>Sponsor a room at CAIN’s Educational Resource Center</strong><br/><br/>            
                        <strong>One time/Monthly donation: </strong> 
                        Support this project by making a one-time donation or by signing up for a monthly donation. If you give ≥ $1000 during the course of one year, a program at the center will be named after you.<br/><br/>
                        <strong>Individual/Group Sponsorship of a room:</strong> Fund the furnishing and equipping of a room and get the room named after you or your organization.<br/><br/>
                        <PostHeader onClick={scrollToTop}>  <DonateLink style={{color:"black"}} to='/donate'>  <strong>Click here to donate towards this project.</strong> </DonateLink> </PostHeader>
                    </PostParagraph>  
                </PostWrapper>

                <MediaWrapper>
                    <PostIframeWrapper>
                        <PostIframe src="https://www.youtube.com/embed/QVSKpP0dfWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen" frameBorder="0"></PostIframe>
                    </PostIframeWrapper>
                    
                    <SingleImage>
                        <PostImage src={`${CAINERC1}`} />
                        <i style={{padding: '1rem 0'}}>Property purchased to serve as the educational resource center.</i>
                    </SingleImage>                  
                    
                    <SingleImage>
                        <PostImage src={`${CAINERC2}`} />
                        <i style={{padding: '1rem 0'}}>Current state of educational resource center after internal renovations and painting.</i>
                    </SingleImage>
                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectERC;