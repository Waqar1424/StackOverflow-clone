import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../assets/styles.css'
import icon from '../images/icon_stack.png'
import OffCanvas from './OffCanvas';
import {AiOutlineSearch} from 'react-icons/ai';



function Header() {
  return (
    <div>
    <div id="notify-container"></div>
    <div className='custom-nav d-flex justify-content-center'>
      
        <div className='offcanvas-ham-menu'><OffCanvas /></div>
        <div className='nav-icon-text d-flex '><Link to="/"><img src={icon}/></Link><p>stack  <strong>overflow</strong></p></div>
        <div className='nav-ul d-flex justify-content-center'>
          <ul className='list-unstyled'>
            <li>About</li>
            <li>Products</li>
            <li>For Teams</li>
          </ul>
        </div>
        <div className='nav-search'>
          <input className='nav-search-s' type='text' placeholder=' &#61442; Search...'/>
        </div>
        <div className='search-nav-icon .d-block .d-sm-none'><AiOutlineSearch size='1.4rem'/></div>
        <div className="nav-btn">
        <a type="button" className='btn btn-primary nav-btn-l'><Link to="/login">Login</Link></a>
        <a type="button" className='btn btn-primary nav-btn-s'><Link to="/signup">Signup</Link></a>
        </div>
    </div>
    </div>
  );
}


export default Header;