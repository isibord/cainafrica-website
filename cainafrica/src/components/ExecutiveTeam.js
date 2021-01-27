import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, ExecutiveMother, FlipContainer, HeadingTwo, President, VP, PublicityChair, Position, Bio} from './StyledComponents.js';
import TeamHeader2 from '../images/Our Team/TeamHeader2.jpg';

const MeetTheTeam = (props) => {

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

            <ExecutiveMother>
                <HeadingTwo>Executive Board</HeadingTwo>
                <FlipContainer> 

                    <Flippy
                        // flipOnHover={true} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer'}} /// these are optional style, it is not necessary
                        >
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }} >                            
                            
                            <President> </President>
                            
                            <Position>
                                Oghenerukeme Asagba
                                <br/>
                                <i>Founder/President</i>
                            </Position>
                            
                        </FrontSide>
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}} >
                            
                            <Bio>
                            Ruke was born and raised in Lagos, Nigeria. She has a bachelor's degree in Human Biology, Health and Society, and a minor in Global Health from Cornell University. She also holds a master’s degree in Medical Physiology from Case Western Reserve University. <br/> <br/> Thus far, Ruke has conducted research on the National Health Research Act of Zambia and conducted clinical research at University Hospitals in Cleveland, Ohio. She has also served as a student health ambassador for the HBCU wellness program, and as a tutor and mentor in different capacities. Her passion for education and healthcare is intense, which is why she founded CAIN. She envisions Africa as a continent that provides access to quality education and healthcare for all. Thus, she hopes to contribute to the fulfillment of this vision by engaging future leaders in projects that combat inequities in education and healthcare. <br/> <br/> It’s a great pleasure to have a Founder/President who leads by example and gives her best to ensure that we make a tremendous impact.
                            </Bio>

                        </BackSide>

                    </Flippy>

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                            
                            <VP> </VP>

                            <Position>
                                Olatomiwa Lasebikan
                                <br/>
                                <i>Vice President</i>
                            </Position>

                        </FrontSide>
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}}>
                            
                            <Bio>
                                Tomiwa obtained his Bachelor’s degree in Computer Science and Mathematics from Fisk University after which he worked as a Software Engineer at Microsoft. <br/> <br/> He currently leads Product Development in a startup in Nigeria, BuyCoins. Tomiwa recognizes the challenges of healthcare and education - especially among children and the youth - in the building of African economies and talent. He believes in the power of technology and awareness of local context to solve these problems. <br/> <br/> Tomiwa currently serves as our Vice-President and has relentlessly served CAIN since its inception. We are really grateful to have him on board because he is always willing to take on responsibilities even outside his areas of expertise and is indeed the true definition of a servant leader. 
                            </Bio>

                        </BackSide>
                    </Flippy>                  

                    <Flippy
                        // flipOnHover={true}
                        flipOnClick={true} 
                        flipDirection="horizontal"
                        // ref={(r) => this.flippy = r}
                        style={{ width: '22rem', margin: '1rem', height: '45rem', cursor: 'pointer' }}>
                        
                        <FrontSide style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>

                            <PublicityChair> </PublicityChair> 
                            <Position>
                                Daisy Isibor
                                <br/>
                                <i>Director of Operations</i>
                            </Position>

                        </FrontSide>
                        
                        <BackSide style={{backgroundColor: '#f4e4ba', overflow: 'auto'}}>

                            <Bio>
                                Daisy is currently a Software Engineer in the greater Seattle area.<br/> <br/> She is passionate about technology, education and mentoring. She is always in pursuit of ways to enlighten herself and encourages other young people to do the same. Daisy leads our communications and operations in addition to the other hats she wears. <br/> <br/>We are beyond excited to have her on board because she has a knack for getting things done and pushing other members of the team to do so too. For her, professionalism is key and we love the way she infuses that mindset across the board.
                            </Bio>

                        </BackSide>
                    </Flippy>

                </FlipContainer>
                
            </ExecutiveMother>

        </>
    )
}

export default MeetTheTeam;
