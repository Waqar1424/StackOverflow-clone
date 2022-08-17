import React, { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGlobeAmericas} from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import OffCanvasImage from "../images/offCanvass.svg"
import MenuIcon from "../images/icons8-menu.svg"
import '../assets/styles.css'

const options = [
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      <div onClick={toggleShow} >
        <img src={MenuIcon} alt="" />
      </div>
      <Offcanvas className="offCanvas-ofc" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
          <div className='row'>
            <div className='off-canvas-home-div'>
              <p href="#" className="off-canvas-home">Home</p>
            </div>
            <div className="row">
              <p class="offCanvas-p">PUBLIC</p>
            </div>
            <div className="row">
                <p><FaGlobeAmericas color='#838383' />&nbsp; Questions</p>
              <ul className="list-unstyled offCanvas-li">
                <li>Tags</li>
                <li>Users</li>
                <li>Companies</li> 
              </ul>
            </div>
            <div className="row">
              <div>
                <p class="offCanvas-collectives">COLLECTIVES</p>
              </div>
              <div className="OffCanvas-q-div">                                   
                <p><FaRegSun color='#f48225'/>&nbsp; Explore Collectives</p>
              </div>
              <div>
                <p class="offCanvas-p">TEAMS</p>
              </div>
              <div className='offCanvas-teams'>
                <p><strong>Stack Overflow for Teams –</strong> <br/>Start collaborating and sharing organizational knowledge.</p>
                <img src={OffCanvasImage} alt=""/>
              </div>
              <div>
                <Button className='offCanvass-teams-btn-1' variant="primary" size="sm">
                  Create a free Team
                </Button>
                <Button className='offCanvass-teams-btn-2' variant="secondary" size="sm">
                  Why Teams?
                </Button>
              </div>
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function OffCanvas() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default OffCanvas;