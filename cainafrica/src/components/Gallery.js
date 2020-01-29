import React from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar/Toolbar.js';
import {TopImage, TextWrapper, TopHeaderText, TopParaText} from './StyledComponents.js';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import GalleryHeader3 from '../images/Gallery/GalleryHeader3.jpg'
import CainGallery1 from '../images/Gallery/CainGallery1.jpg';
import CainGallery2 from '../images/Gallery/CainGallery2.jpg';
import CainGallery3 from '../images/Gallery/CainGallery3.jpg';
import CainGallery4 from '../images/Gallery/CainGallery4.jpg';
import CainGallery6 from '../images/Gallery/CainGallery6.jpg';
import CainGallery7 from '../images/Gallery/CainGallery7.jpg';
import CainGallery8 from '../images/Gallery/CainGallery8.jpg';
import CainGallery9 from '../images/Gallery/CainGallery9.jpg';
import CainGallery10 from '../images/Gallery/CainGallery10.jpg';
import CainGallery11 from '../images/Gallery/CainGallery11.jpg';
import CainGallery12 from '../images/Gallery/CainGallery12.jpg';
import CainGallery13 from '../images/Gallery/CainGallery13.jpg';
import CainGallery14 from '../images/Gallery/CainGallery14.jpg';
import CainGallery15 from '../images/Gallery/CainGallery15.jpg';
import CainGallery17 from '../images/Gallery/CainGallery17.jpg';
import CainGallery21 from '../images/Gallery/CainGallery21.jpg';
import CainGallery22 from '../images/Gallery/CainGallery22.jpg';
import CainGallery23 from '../images/Gallery/CainGallery23.jpg';
import CainGallery24 from '../images/Gallery/CainGallery24.jpg';
import CainGallery25 from '../images/Gallery/CainGallery25.jpg';
import CainGallery26 from '../images/Gallery/CainGallery26.jpg';
import CainGallery27 from '../images/Gallery/CainGallery27.jpg';
import CainGallery28 from '../images/Gallery/CainGallery28.jpg';
import CainGallery29 from '../images/Gallery/CainGallery29.jpg';
import CainGallery30 from '../images/Gallery/CainGallery30.jpg';
import CainGallery31 from '../images/Gallery/CainGallery31.jpg';
import CainGallery32 from '../images/Gallery/CainGallery32.jpg';
import CainGallery33 from '../images/Gallery/CainGallery33.jpg';
import CainGallery34 from '../images/Gallery/CainGallery34.JPG';
import CainGallery35 from '../images/Gallery/CainGallery35.JPG';
import CainGallery36 from '../images/Gallery/CainGallery36.JPG';
import CainGallery37 from '../images/Gallery/CainGallery37.JPG';
import CainGallery38 from '../images/Gallery/CainGallery38.jpg';
import CainGallery39 from '../images/Gallery/CainGallery39.jpg';
import CainGallery40 from '../images/Gallery/CainGallery40.jpg';
import CainGallery41 from '../images/Gallery/CainGallery41.jpg';
import CainGallery42 from '../images/Gallery/CainGallery42.jpg';
import CainGallery43 from '../images/Gallery/CainGallery43.jpg';
import CainGallery44 from '../images/Gallery/CainGallery44.jpg';
import CainGallery45 from '../images/Gallery/CainGallery45.jpg';
import CainGallery46 from '../images/Gallery/CainGallery46.jpg';
import CainGallery47 from '../images/Gallery/CainGallery47.jpg';
import CainGallery48 from '../images/Gallery/CainGallery48.jpg';
import CainGallery49 from '../images/Gallery/CainGallery49.jpg';
import CainGallery50 from '../images/Gallery/CainGallery50.jpg';
import CainGallery51 from '../images/Gallery/CainGallery51.jpg';
import CainGallery52 from '../images/Gallery/CainGallery52.jpg';
import CainGallery53 from '../images/Gallery/CainGallery53.jpg';
import CainGallery54 from '../images/Gallery/CainGallery54.jpg';
import CainGallery55 from '../images/Gallery/CainGallery55.JPG';
import CainGallery56 from '../images/Gallery/CainGallery56.JPG';
import CainGallery57 from '../images/Gallery/CainGallery57.JPG';
import CainGallery58 from '../images/Gallery/CainGallery58.JPG';
import CainGallery59 from '../images/Gallery/CainGallery59.JPG';
import CainGallery60 from '../images/Gallery/CainGallery60.JPG';
import CainGallery61 from '../images/Gallery/CainGallery61.jpg';
import CainGallery62 from '../images/Gallery/CainGallery62.JPG';
import CainGallery63 from '../images/Gallery/CainGallery63.JPG';
import CainGallery64 from '../images/Gallery/CainGallery64.JPG';
import CainGallery65 from '../images/Gallery/CainGallery65.JPG';
import CainGallery66 from '../images/Gallery/CainGallery66.JPG';
import CainGallery67 from '../images/Gallery/CainGallery67.JPG';
import CainGallery68 from '../images/Gallery/CainGallery68.JPG';
import CainGallery69 from '../images/Gallery/CainGallery69.JPG';
import CainGallery70 from '../images/Gallery/CainGallery70.JPG';
import CainGallery71 from '../images/Gallery/CainGallery71.JPG';
import CainGallery72 from '../images/Gallery/CainGallery72.JPG';
import CainGallery73 from '../images/Gallery/CainGallery73.JPG';
import CainGallery74 from '../images/Gallery/CainGallery74.JPG';
import CainGallery75 from '../images/Gallery/CainGallery75.JPG';
import CainGallery76 from '../images/Gallery/CainGallery76.JPG';
import CainGallery77 from '../images/Gallery/CainGallery77.JPG';
import CainGallery78 from '../images/Gallery/CainGallery78.JPG';
import CainGallery79 from '../images/Gallery/CainGallery79.JPG';
import CainGallery80 from '../images/Gallery/CainGallery80.JPG';
import CainGallery81 from '../images/Gallery/CainGallery81.jpg';
import CainGallery82 from '../images/Gallery/CainGallery82.jpg';
import CainGallery83 from '../images/Gallery/CainGallery83.jpg';
import CainGallery84 from '../images/Gallery/CainGallery84.jpg';
import CainGallery85 from '../images/Gallery/CainGallery85.jpg';
import CainGallery86 from '../images/Gallery/CainGallery86.jpg';
import CainGallery87 from '../images/Gallery/CainGallery87.jpg';
import CainGallery88 from '../images/Gallery/CainGallery88.jpg';

import CAINSP20171 from '../images/ProjectsData/CAINSP20171.JPG';
import CAINSP20172 from '../images/ProjectsData/CAINSP20172.JPG';
import CAINBtG1 from '../images/ProjectsData/CAINBtG1.jpg';
import CAINBtG2 from '../images/ProjectsData/CAINBtG2.jpg';
import CAINBtG3 from '../images/ProjectsData/CAINBtG3.jpg';
import CAINBtG4 from '../images/ProjectsData/CAINBtG4.jpg';
import CAINBtG6 from '../images/ProjectsData/CAINBtG6.jpg';
import CAINBtG7 from '../images/ProjectsData/CAINBtG7.jpg';
import CAINBtG8 from '../images/ProjectsData/CAINBtG8.jpg';
import CAINBtG9 from '../images/ProjectsData/CAINBtG9.jpg';
import CAINBtG10 from '../images/ProjectsData/CAINBtG10.jpg';
import CAINBtG11 from '../images/ProjectsData/CAINBtG11.jpg';
import CAINERC1 from '../images/ProjectsData/CAINERC1.JPG';
import CAINERC2 from '../images/ProjectsData/CAINERC2.jpg';
import CAINBtG5 from '../images/ProjectsData/CAINBtG5.jpg';

const PhotoBox = styled.div`
    margin: 2rem auto;
    padding: 2rem;
    display: block;
    minHeight: 1rem;
    width: 80%;
    //border:1px solid #ddd;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem; 
    overflow: auto;
    @media (max-width: 768px) {
        padding: 1rem;
    }
`


class Demo4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                            this.setCustomTags(i)}
                        </div>);
                    return i;
                });
        return (
            <div>
                <TopImage style={{backgroundImage: `url(${GalleryHeader3})`}}>
                    <Toolbar drawerClickHandler={this.props.drawerToggleClickHandler} />
                    {this.props.sideDrawer}
                    <TextWrapper>
                        <TopHeaderText>GALLERY</TopHeaderText>
                        <TopParaText>“A KIND GESTURE CAN REACH A WOUND THAT ONLY COMPASSION CAN HEAL.” ― STEVE MARABOLI</TopParaText>
                    </TextWrapper>
                </TopImage>
                    
                <PhotoBox>
                    <Gallery images={images} enableImageSelection={false}/>
                </PhotoBox>
            </div>
        );
    }
}

Demo4.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

Demo4.defaultProps = {
    images:[
        {
            src: `${CainGallery1}`,
            thumbnail: `${CainGallery1}`,
            thumbnailWidth: 524.5,
            thumbnailHeight: 349.7
            // tags: [{value: "Nature", title: "Nature | Flowers"}], Uncomment these 2 lines if you want to put tags on individual picture
            // caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: `${CainGallery2}`,
            thumbnail: `${CainGallery2}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery3}`,
            thumbnail: `${CainGallery3}`,
            thumbnailWidth: 510.4,
            thumbnailHeight: 340.3,
            
        },
        {
            src: `${CainGallery4}`,
            thumbnail: `${CainGallery4}`,
            thumbnailWidth: 416,
            thumbnailHeight: 312,
            
        },
        {
            src: `${CainGallery6}`,
            thumbnail: `${CainGallery6}`,
            thumbnailWidth: 137,
            thumbnailHeight: 137,
            
        },
        {
            src: `${CainGallery7}`,
            thumbnail: `${CainGallery7}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery8}`,
            thumbnail: `${CainGallery8}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery9}`,
            thumbnail: `${CainGallery9}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery10}`,
            thumbnail: `${CainGallery10}`,
            thumbnailWidth: 496,
            thumbnailHeight: 335.3,
            
        },
        {
            src: `${CainGallery11}`,
            thumbnail: `${CainGallery11}`,
            thumbnailWidth: 481.1,
            thumbnailHeight: 320.7,
            
        },
        {
            src: `${CainGallery12}`,
            thumbnail: `${CainGallery12}`,
            thumbnailWidth: 509.8,
            thumbnailHeight: 298.1,
            
        },
        {
            src: `${CainGallery13}`,
            thumbnail: `${CainGallery13}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery14}`,
            thumbnail: `${CainGallery14}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery15}`,
            thumbnail: `${CainGallery15}`,
            thumbnailWidth: 454.5,
            thumbnailHeight: 316.9,
            
        },
        {
            src: `${CainGallery17}`,
            thumbnail: `${CainGallery17}`,
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            
        },
        {
            src: `${CainGallery21}`,
            thumbnail: `${CainGallery21}`,
            thumbnailWidth: 403.2,
            thumbnailHeight: 302.4,
            
        },
        {
            src: `${CainGallery22}`,
            thumbnail: `${CainGallery22}`,
            thumbnailWidth: 403.2,
            thumbnailHeight: 302.4,
            
        },        
        {
            src: `${CainGallery23}`,
            thumbnail: `${CainGallery23}`,
            thumbnailWidth: 332.5,
            thumbnailHeight: 249.4,
            
        },
        {
            src: `${CainGallery24}`,
            thumbnail: `${CainGallery24}`,
            thumbnailWidth: 561,
            thumbnailHeight: 390,
            
        },
        {
            src: `${CainGallery25}`,
            thumbnail: `${CainGallery25}`,
            thumbnailWidth: 191.6,
            thumbnailHeight: 191.6,
            
        },
        {
            src: `${CAINSP20171}`,
            thumbnail: `${CAINSP20171}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CAINSP20172}`,
            thumbnail: `${CAINSP20172}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106.7,
            
        },
        {
            src: `${CAINBtG1}`,
            thumbnail: `${CAINBtG1}`,
            thumbnailWidth: 104.6,
            thumbnailHeight: 78.4,
            
        },
        {
            src: `${CAINBtG2}`,
            thumbnail: `${CAINBtG2}`,
            thumbnailWidth: 108.8,
            thumbnailHeight: 81.2,
            
        },
        {
            src: `${CAINBtG5}`,
            thumbnail: `${CAINBtG5}`,
            thumbnailWidth: 108.8,
            thumbnailHeight: 81.2,
            
        },
        {
            src: `${CAINBtG6}`,
            thumbnail: `${CAINBtG6}`,
            thumbnailWidth: 65.1,
            thumbnailHeight: 46.4,
            
        },
        {
            src: `${CAINBtG7}`,
            thumbnail: `${CAINBtG7}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CAINBtG8}`,
            thumbnail: `${CAINBtG8}`,
            thumbnailWidth: 65.1,
            thumbnailHeight: 46.4,
        },
        {
            src: `${CAINBtG9}`,
            thumbnail: `${CAINBtG9}`,
            thumbnailWidth: 65.1,
            thumbnailHeight: 46.4,
        },
        {
            src: `${CAINBtG3}`,
            thumbnail: `${CAINBtG3}`,
            thumbnailWidth: 100.2,
            thumbnailHeight: 90.2,
            
        },
        {
            src: `${CAINBtG4}`,
            thumbnail: `${CAINBtG4}`,
            thumbnailWidth: 104.5,
            thumbnailHeight: 78.2,
            
        },
        {
            src: `${CAINBtG10}`,
            thumbnail: `${CAINBtG10}`,
            thumbnailWidth: 64,
            thumbnailHeight: 41.5,
            
        },
        {
            src: `${CAINBtG11}`,
            thumbnail: `${CAINBtG11}`,
            thumbnailWidth: 72,
            thumbnailHeight: 128,
            
        },
        {
            src: `${CainGallery26}`,
            thumbnail: `${CainGallery26}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery27}`,
            thumbnail: `${CainGallery27}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery84}`,
            thumbnail: `${CainGallery84}`,
            thumbnailWidth: 81,
            thumbnailHeight: 108,
            
        },
        {
            src: `${CainGallery40}`,
            thumbnail: `${CainGallery40}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
            
        },
        {
            src: `${CAINERC1}`,
            thumbnail: `${CAINERC1}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
            
        },
        {
            src: `${CAINERC2}`,
            thumbnail: `${CAINERC2}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
            
        },
        {
            src: `${CainGallery28}`,
            thumbnail: `${CainGallery28}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery29}`,
            thumbnail: `${CainGallery29}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery30}`,
            thumbnail: `${CainGallery30}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery31}`,
            thumbnail: `${CainGallery31}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,            
        },
        {
            src: `${CainGallery32}`,
            thumbnail: `${CainGallery32}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,
        },
        {
            src: `${CainGallery33}`,
            thumbnail: `${CainGallery33}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,
        },
        {
            src: `${CainGallery34}`,
            thumbnail: `${CainGallery34}`,
            thumbnailWidth: 345.6,
            thumbnailHeight: 194.4,
        },
        {
            src: `${CainGallery35}`,
            thumbnail: `${CainGallery35}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,
        },
        {
            src: `${CainGallery36}`,
            thumbnail: `${CainGallery36}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,
        },
        {
            src: `${CainGallery37}`,
            thumbnail: `${CainGallery37}`,
            thumbnailWidth: 326.4,
            thumbnailHeight: 183.6,
        },
        {
            src: `${CainGallery38}`,
            thumbnail: `${CainGallery38}`,
            thumbnailWidth: 152,
            thumbnailHeight: 268.8,
            
        },
        {
            src: `${CainGallery39}`,
            thumbnail: `${CainGallery39}`,
            thumbnailWidth: 128.7,
            thumbnailHeight: 96,
            
        },
        {
            src: `${CainGallery41}`,
            thumbnail: `${CainGallery41}`,
            thumbnailWidth: 453,
            thumbnailHeight: 264.6,
            
        },
        {
            src: `${CainGallery42}`,
            thumbnail: `${CainGallery42}`,
            thumbnailWidth: 474.8,
            thumbnailHeight: 276.9,
            
        },
        {
            src: `${CainGallery43}`,
            thumbnail: `${CainGallery43}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
            
        },
        {
            src: `${CainGallery44}`,
            thumbnail: `${CainGallery44}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
        },
        {
            src: `${CainGallery45}`,
            thumbnail: `${CainGallery45}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
        },
        {
            src: `${CainGallery46}`,
            thumbnail: `${CainGallery46}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
        },
        {
            src: `${CainGallery47}`,
            thumbnail: `${CainGallery47}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery48}`,
            thumbnail: `${CainGallery48}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery49}`,
            thumbnail: `${CainGallery49}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery50}`,
            thumbnail: `${CainGallery50}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery51}`,
            thumbnail: `${CainGallery51}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery52}`,
            thumbnail: `${CainGallery52}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery53}`,
            thumbnail: `${CainGallery53}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery54}`,
            thumbnail: `${CainGallery54}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery55}`,
            thumbnail: `${CainGallery55}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery56}`,
            thumbnail: `${CainGallery56}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery57}`,
            thumbnail: `${CainGallery57}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery58}`,
            thumbnail: `${CainGallery58}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery59}`,
            thumbnail: `${CainGallery59}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery60}`,
            thumbnail: `${CainGallery60}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery61}`,
            thumbnail: `${CainGallery61}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery62}`,
            thumbnail: `${CainGallery62}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery63}`,
            thumbnail: `${CainGallery63}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery64}`,
            thumbnail: `${CainGallery64}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery65}`,
            thumbnail: `${CainGallery65}`,
            thumbnailWidth: 345.6,
            thumbnailHeight: 518.4,
            
        },
        {
            src: `${CainGallery66}`,
            thumbnail: `${CainGallery66}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery67}`,
            thumbnail: `${CainGallery67}`,
            thumbnailWidth: 345.6,
            thumbnailHeight: 518.4,
            
        },
        {
            src: `${CainGallery68}`,
            thumbnail: `${CainGallery68}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
            
        },
        {
            src: `${CainGallery69}`,
            thumbnail: `${CainGallery69}`,
            thumbnailWidth: 518.4,
            thumbnailHeight: 345.6,
        },
        {
            src: `${CainGallery70}`,
            thumbnail: `${CainGallery70}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery71}`,
            thumbnail: `${CainGallery71}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
            
        },
        {
            src: `${CainGallery72}`,
            thumbnail: `${CainGallery72}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
        },
        {
            src: `${CainGallery73}`,
            thumbnail: `${CainGallery73}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
        },
        {
            src: `${CainGallery74}`,
            thumbnail: `${CainGallery74}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
        },
        {
            src: `${CainGallery75}`,
            thumbnail: `${CainGallery75}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
        },
        {
            src: `${CainGallery76}`,
            thumbnail: `${CainGallery76}`,
            thumbnailWidth: 432,
            thumbnailHeight: 324,
        },
        {
            src: `${CainGallery77}`,
            thumbnail: `${CainGallery77}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery78}`,
            thumbnail: `${CainGallery78}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery79}`,
            thumbnail: `${CainGallery79}`,
            thumbnailWidth: 168.3,
            thumbnailHeight: 193.6,
            
        },
        {
            src: `${CainGallery80}`,
            thumbnail: `${CainGallery80}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery81}`,
            thumbnail: `${CainGallery81}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery82}`,
            thumbnail: `${CainGallery82}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery83}`,
            thumbnail: `${CainGallery83}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery85}`,
            thumbnail: `${CainGallery85}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery86}`,
            thumbnail: `${CainGallery86}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery87}`,
            thumbnail: `${CainGallery87}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        },
        {
            src: `${CainGallery88}`,
            thumbnail: `${CainGallery88}`,
            thumbnailWidth: 160,
            thumbnailHeight: 106,
            
        }
    ]
};

export default Demo4;