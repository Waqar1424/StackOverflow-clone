import React, { useRef, useState } from 'react'
import { Alert } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import icon from '../images/icon_stack_login.PNG';
import Button from 'react-bootstrap/esm/Button';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';




function Login() {
  const displayNameRef= useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history("/")
      console.log(emailRef.current.value + passwordRef.current.value);
    } catch {
      setError("Failed to log in")
      
    }

    setLoading(false)
  }

  return (
    <div className="container-fliud login-bg">
      {error && <Alert variant="danger">{error}</Alert>}
        <div className='row justify-content-center'>
            <div className='col-12 col-md-3 col-sm-6'>
                <img className='icon-login' src={icon} alt=""/>
                <div>
                <Button className='google-btn' variant="primary" size="sm">
                  <div className='d-flex justify-content-center'><div className='icon-div-btn'><FcGoogle className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn">&nbsp;Log in with Google</p></div>
                </Button>{' '}
                <Button className='github-btn' variant="secondary" size="sm">
                <div className='d-flex justify-content-center'><div className='icon-div-btn'><FaGithub className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn" style={{color: "white"}}>&nbsp;Log in with Google</p></div>
                </Button>
                <Button className='facebook-btn' variant="secondary" size="sm">
                <div className='d-flex justify-content-center'><div className='icon-div-btn'><RiFacebookBoxFill  className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn" style={{color: "white"}}>&nbsp;Log in with Google</p></div>
                </Button>
              </div>
              <div className='d-flex justify-content-center'>
              <form className='login-form  shadow p-3 mb-5 bg-white rounded' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='d-flex flex-row'>Email</label>
                        <input type="email" className="form-control" ref={emailRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='d-flex flex-row'>Password</label>
                        <input type="password" className="form-control"  ref={passwordRef}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
              </div>
              <div className='login-form-p'>
                <div >Don’t have an account? <Link to="/signup">Sign up</Link> </div>
                <p>Are you an employer?<a href="#"> Sign up on Talent<BiLinkExternal/></a></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login;