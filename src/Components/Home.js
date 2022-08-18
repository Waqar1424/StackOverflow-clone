import { Button } from 'react-bootstrap';
import React, {useEffect} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {BiLock} from 'react-icons/bi';
import TypedR from './ReactTyped';
import icon from '../images/icon_stack.png'
import IconSecMainDiv from '../images/icon_sec_main_div.PNG'
import StackOverflowDiv from '../images/stack-overflow-div.svg';
import ForTeamsDiv from '../images/for-teams-div.svg';
import Carousel from 'react-bootstrap/Carousel';
import {ReactComponent as SearchDivIcon} from '../images/Svgs/Search-div-icon.svg';
import {ReactComponent as LockDivIcon} from '../images/Svgs/Lock-div-icon.svg';
import {ReactComponent as RoundTickIcon} from '../images/Svgs/RoundTick.svg';
/* Components Export*/
import Courses from './Courses';
import BillingCards from './BillingCards';
import Calculations from './Calculations';
import OtherTools from './OtherTools';
import Features from './Features';
import Quotes from './Quotes';
import AdditionalProducts from './AdditionalProducts';
import CreateFreeTeam from './CreateFreeTeam';
import ExampleCarousel from './Carousel';

/* Animation */
import Aos from 'aos';
import 'aos/dist/aos.css';

import Item1Img1 from "../images/item1-img1.svg";
import Item2Img2 from "../images/item2-img2.svg";
import Item3Img3 from "../images/item3-img3.svg";
import Item4Img4 from "../images/item4-img4.svg";

import ItemTImg1 from "../images/imgT-img1.svg";
import ItemTImg2 from "../images/imgT-img2.svg";
import ItemTImg3 from "../images/imgT-img3.svg";
import ItemTImg4 from "../images/imgT-img4.svg";

import ItemThImg1 from "../images/imgTh-img1.svg";
import ItemThImg2 from "../images/imgTh-img2.svg";
import ItemThImg3 from "../images/imgTh-img3.svg";
import ItemThImg4 from "../images/imgTh-img4.svg";

function Home() { 


    useEffect(() => {
      Aos.init();
      Aos.refresh();
    },[]);

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
         <div className='col-11 col-sm-11 home-main-div '>
            <div className='row justify-content-center'>
                <div className='col-11 col-sm-5 home-main-search-div'>
                    <div className='home-search-icon'><SearchDivIcon/></div>
                    <p>Find the best answer to your technical question, help others answer theirs</p>
                    <Button>Join the community</Button>
                    <p className='home-main-link'>or <a href="">search content</a></p>
                </div>
                <div className='col-11 col-sm-5 home-main-lock-div'>
                    <div className='home-search-icon'><LockDivIcon/></div>
                    <p>Want a secure, private space for your technical knowledge?</p>
                    <p className='get-started'>Get Started</p>
                    <Button className='home-main-lock-div-button'>For Large Organizations</Button>
                    <Button className='home-main-lock-div-button'>For Small Teams</Button>
                </div> 
          </div>
            <div className='row justify-content-center'>
             <div className='col-10 col-sm-8 developers-titles'>
              Every <TypedR /> has a tab open to Stack Overflow</div>
            </div>
            <div className='row justify-content-center ratings-div'>
              <div className='col-11 col-sm-2 ratings'>
                  <h3>100+ million</h3>
                  <p>monthly visitors to Stack Overflow Stack-Exchange</p>
              </div>
              <div className='col-11 col-sm-2 ratings'>
                  <h3>45.1+ billion</h3>
                  <p>Times a developer got help since 2008</p>
              </div>
              <div className='col-11 col-sm-2 ratings'>
                  <h3>179% ROI</h3>
                  <p>from companies using Stack Overflow for Teams</p>
              </div>
              <div className='col-11 col-sm-2 ratings'>
                  <h3>5,000+</h3>
                  <p>Stack Overflow for Teams instances active every day</p>
              </div>
            </div>  
         </div>
      </div>
      <div className='row justify-content-center stack-teams-main-div'>
          <div className='col-11 col-sm-5 stack-overflow-div'>
              <div className='d-flex justify-content-center'><img className="icon-stack-overflow-div" src={icon} alt=""/><span>stack<strong>overflow</strong></span></div>
              <div className='stack-overflow-div-image'>
                <img src={StackOverflowDiv} alt=""/>
              </div>
              <div className='stack-overflow-div-bold-text' >
              A public platform building the definitive collection of coding questions & answers
              </div>
              <div className='stack-overflow-div-text'>
              A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
              </div>
              <Button>Join the community</Button>
              <p className='home-main-link'>or <a href="">search content</a></p>
          </div>

          <div className='col-11 col-sm-5 for-teams-div'>
              <div className='d-flex justify-content-center'><img className="icon-stack-overflow-div" src={icon} alt=""/><span> &nbsp; <strong>FOR TEAMS</strong></span></div>
              <div className='for-teams-div-image'>
                <img src={ForTeamsDiv} alt=""/>
              </div>
              <div className='for-teams-div-bold-text' >
                  A public platform building the definitive collection of coding questions & answers
              </div>
              <div className='for-teams-div-text'>
                  A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
              </div>
              <p className='get-started'>Get Started</p>
              <Button className='home-main-lock-div-button'>For Large Organizations</Button>
              <Button className='home-main-lock-div-button-1'>For Small Teams</Button>
          </div>

          <div className='row justify-content-center'>
            <div className='col-11 col-sm-7 carousel-text'>Thousands of organizations around the globe use Stack Overflow for Teams</div>
              <ExampleCarousel />
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-sm-11 sec-main-div'>
                    <img className="" src={IconSecMainDiv} alt=""/>
              <div className='row justify-content-center'>
                  <div className='col-11 col-sm-7 sec-main-div-p'>
                    <p>Capture your company’s knowledge and context in a discoverable format to <span> unblock your team</span></p>
                    <Button>Take a tour of Teams</Button>
                  </div>
              </div>
              <div className='row justify-content-center'>
                  <div className='col-11 col-sm-4 marketing-row' data-aos="zoom-in">
                      <span><RoundTickIcon/></span>
                      <h4>Increase productivity</h4>
                      <p>If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
                  </div>
                  <div className='col-11 col-sm-4 marketing-row' data-aos="zoom-in">
                      <span><RoundTickIcon/></span>
                      <h4>Accelerate time to market</h4>
                      <p>If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
                  </div>
                  <div className='col-11 col-sm-4 marketing-row' data-aos="zoom-in">
                      <span><RoundTickIcon/></span>
                      <h4>Protect institutional knowledge</h4>
                      <p>If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
                  </div>
              </div>

                  <hr className='hr-home' align="center"/>

              <Courses />
              <BillingCards />
              <Calculations />
              <OtherTools />
            </div>
          </div>
          <Features />
          <Quotes />
          <CreateFreeTeam />
      </div>
    </div>
  )
}
export default Home;