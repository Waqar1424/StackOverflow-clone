import React, {useEffect} from 'react';
import '../assets/styles.css';
import {Button} from 'react-bootstrap';
import {FiKey} from "react-icons/fi";
/* Animation */
import Aos from 'aos';
import 'aos/dist/aos.css';

function Features() {
    const featuresArr=[ {id: 1, icon: <FiKey />, description: "Robust read and write API"},
                        {id: 2, icon: <FiKey />, description: "Robust read and write API"},
                        {id: 3, icon: <FiKey />, description: "Robust read and write API"},
                        {id: 4, icon: <FiKey />, description: "Robust read and write API"} ]

        useEffect(() => {
                Aos.init();
                Aos.refresh();
        },[]);
  return (
        <div className='row feature-main-div justify-content-center'  >
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='200'>
                    <span><FiKey size="2.5em" color='#28358B'/></span>
                    <p>Robust read and write API</p>
            </div>
            <div className=" col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='1000'>
                    <span><FiKey size="2.5em" color='#28358B'/></span>
                    <p>Robust read and write API</p>
            </div>
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='1800'>
                    <span><FiKey size="2.5em" color='#28358B'/></span>
                    <p>Robust read and write API</p>
            </div>
            <div className="col-3 col-sm-2 feature-div" data-aos="zoom-in" data-aos-duration='500' data-aos-delay='2600'>
                    <span><FiKey size="2.5em" color='#28358B'/></span>
                    <p>Robust read and write API</p>
            </div> 
        </div>    
  )
}

export default Features