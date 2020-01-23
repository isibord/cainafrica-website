import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage,TextWrapper, TopHeaderText, TopParaText, MemberMother, FlipContainerMember, HeadingTwo, Position, Bio, Moyo, Eric} from './StyledComponents.js';
import Toolbar from './Toolbar/Toolbar.js';
import TeamHeader2 from '../images/Our Team/TeamHeader2.jpg';

function OurMembers(props) {

    return(
        <>
            <TopImage style={{backgroundImage: `url(${TeamHeader2})`}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>MEET OUR TEAM</TopHeaderText>
                    <TopParaText>“REMEMBER, EACH ONE OF US HAS THE POWER TO CHANGE THE WORLD.” – YOKO ONO</TopParaText>
                </TextWrapper>
            </TopImage>

            <MemberMother>
                <HeadingTwo>Members</HeadingTwo>
                <FlipContainerMember>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Moyo> </Moyo> 
                            <Position>
                                Moyosoreoluwa Orekoya
                                <br/>
                                <i>Member</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#f4e4ba'}}>

                            <Bio>
                                Moyo is a graduate of Illinois Institute of Technology with a degree in Chemical Engineering. Not wanting to wear a hard hat, he went on to earn his Masters in Engineering Management at Duke University. A thrill seeker, he opted to work as a Project Manager for a startup in Charlotte. He likes to describe his job as riding a unicycle while juggling a bowling ball, a burning tennis ball, a cactus and a morning star with a smile on his face. He loves it though!<br/> <br/> He joined CAIN because he believes in the power of a few dedicated people to do unfathomable good. He is interested in alleviating poverty by improving the education and the financial inclusion of low-income women.

                            </Bio>

                        </BackSide>
                    </Flippy>
                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer', backgroundColor: 'white'}}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <Eric> </Eric> 
                            <Position>
                                Eric Asagba
                                <br/>
                                <i>Member</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#f4e4ba'}}>

                            <Bio>
                                Eric, a consultant for one of the leading Energy companies in Canada, graduated from the University of Lagos Nigeria in 2014 before relocating to Canada in 2015 to attain Post Graduate education in Energy Management. <br/> <br/> As a vibrant individual residing in a diverse community, Eric strikes the perfect balance between work & life by travelling to different parts of the world with scenic views, learning about different cultures, and attending sporting events. He also loves reading motivational materials and listens to music from a wide variety of genres.<br/> <br/> Eric’s understanding of the disparity between being privileged versus being underprivileged has become a driving factor for his continuously evolving passion to impact lives when the opportunity arises.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainerMember>
            </MemberMother>
        </>
    )
}

export default OurMembers;
