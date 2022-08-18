import React, {useEffect} from 'react';
import '../assets/styles.css';
import {Button} from 'react-bootstrap';
import {FiKey} from "react-icons/fi";
import {ReactComponent as KeyOtherIcon} from '../images/Svgs/Features/KeyOther.svg';
import {ReactComponent as HeadsetIcon} from '../images/Svgs/Features/HeadsetOther.svg';
import {ReactComponent as PeopleSpotIcon} from '../images/Svgs/Features/PeopleOther.svg';
import {ReactComponent as LockDivIcon} from '../images/Svgs/Features/LockOther.svg';
/* Animation */
import Aos from 'aos';
import 'aos/dist/aos.css';

function Features() {
    const featuresArr=[ {id: 1, icon: <KeyOtherIcon />, description: "Robust read and write API"},
                        {id: 2, icon: <HeadsetIcon />, description: "Robust read and write API"},
                        {id: 3, icon: <PeopleSpotIcon />, description: "Robust read and write API"},
                        {id: 4, icon: <LockDivIcon />, description: "Robust read and write API"} ]

        useEffect(() => {
                Aos.init();
                Aos.refresh();
        },[]);
  return (
        <div className='row feature-main-div justify-content-center'  >
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='200'>
                    <span><KeyOtherIcon /></span>
                    <p>Robust read and write API</p>
            </div>
            <div className=" col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='1000'>
                    <span><LockDivIcon /></span>
                    <p>Robust read and write API</p>
            </div>
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='1800'>
                    <span><PeopleSpotIcon /></span>
                    <p>Robust read and write API</p>
            </div>
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='2600'>
                    <span><HeadsetIcon /></span>
                    <p>Robust read and write API</p>
            </div> 
        </div>    
  )
}

export default Features