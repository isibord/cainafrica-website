import React, {useState} from 'react';
import  {Switch, Route, HashRouter} from "react-router-dom";
import './App.css';

//Displayed components
import Home from './components/Home';
import OurMission from './components/OurMission';
import Projects from './components/Projects';
import MeetTheTeam from './components/ExecutiveTeam';
import OurMembers from './components/OurMembers';
import Volunteer from './components/Volunteer';
import BlogPosts from './components/Blog';
import Demo4 from './components/Gallery';
import Footer from './components/Footer';
import ProjectArise from './components/ProjectArise';
import ProjectBtG from './components/ProjectBtG';
import ProjectERC from './components/ProjectERC';
import ProjectSP2017 from './components/ProjectSP2017';
import ProjectASRP2019 from './components/ProjectASRP2019';
import ProjectChristmas from "./components/ProjectChris";
// import PartnersSponsors from "./components/partners-sponsors";

import DonateParent from './components/DonateParent';

import SideDrawer from './components/SideDrawer/SideDrawer.js';



const App = () => {

  const [state, setState] = useState({sideDrawerOpen: false})  

  let drawerToggleClickHandler = () => {
    setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  let closeBackDropClickHandler = () => {
    setState({sideDrawerOpen: false})
  }
  
  let sideDrawer;

  if(state.sideDrawerOpen){
    sideDrawer = <SideDrawer closeDrawer={closeBackDropClickHandler}/>
  }
  
  
  return (
    <div style={{height: "100%"}}>
      
      <HashRouter>
        <Switch>
          <Route 
            path='/home' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer} />}
          />
          <Route 
            path='/mission' 
            render = {(props)=> <OurMission {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/project-arise' 
            render = {(props)=> <ProjectArise {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-BtG' 
            render = {(props)=> <ProjectBtG {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINERC' 
            render = {(props)=> <ProjectERC {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Project-CAINSP2017' 
            render = {(props)=> <ProjectSP2017 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/projects/Akaeze-Summer-Program' 
            render = {(props)=> <ProjectASRP2019 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route
            path="/projects/Christmas-Benevolence-Project"
            render={(props) => (
              <ProjectChristmas
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          />
          <Route 
            path='/projects' 
            render = {(props)=> <Projects {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/executiveboard' 
            render = {(props)=> <MeetTheTeam {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/ourmembers' 
            render = {(props)=> <OurMembers {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/beavolunteer' 
            render = {(props)=> <Volunteer {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/blog' 
            render = {(props)=> <BlogPosts {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/gallery' 
            render = {(props)=> <Demo4 {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          <Route 
            path='/donate' 
            render = {(props)=> <DonateParent {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
          {/* <Route
            path="/partners-sponsors"
            render={(props) => (
              <PartnersSponsors
                {...props}
                drawerToggleClickHandler={drawerToggleClickHandler}
                sideDrawer={sideDrawer}
              />
            )}
          /> */}
          <Route path='/' 
            render = {(props)=> <Home {...props} drawerToggleClickHandler={drawerToggleClickHandler} sideDrawer={sideDrawer}  />}
          />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;