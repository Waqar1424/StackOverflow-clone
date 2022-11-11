import React, { useEffect, useRef, useState } from 'react'
import { Alert } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import Button from 'react-bootstrap/esm/Button';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { RiQuestionnaireFill} from "react-icons/ri";
import { AiFillTags } from "react-icons/ai";
import { AiTwotoneTrophy } from "react-icons/ai";
import { MdEject } from "react-icons/md";
import { useNavigate } from 'react-router-dom';





function Signup() {
    const displayNameRef= useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        console.log(passwordRef.current?.value,passwordConfirmRef.current.value);
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            console.log("Passwords not match")
           setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

  return (
    <div className="container-fliud signup-bg">
         {error && <Alert variant="danger">{error}</Alert>}
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-5  col-md-4 d-flex align-items-center'>
                <div className='signup-text-div'>
                    <p className='sign-up-p-join'>Join the Stack Overflow community</p>
                    <ul className='list-unstyled'>
                        <li><RiQuestionnaireFill color='#0a95ff' size="1.5em"/> Get unstuck — ask a question</li>
                        <li><MdEject color='#0a95ff' size="1.5em"/> Unlock new privileges like voting and commenting</li>
                        <li><AiFillTags color='#0a95ff' size="1.5em"/> Save your favorite tags, filters, and jobs</li>
                        <li><AiTwotoneTrophy color='#0a95ff' size="1.5em"/> Earn reputation and badges</li>
                    </ul>
                    <p className="sign-up-p1">Collaborate and share knowledge with a private group for FREE.</p>
                    <p className="sign-up-p2"><a href='#'>Get Stack Overflow for Teams free for up to 50 users.</a></p>
                </div>
            </div>
            <div className='col-12 col-sm-4  col-md-4'>
                <div>
                <Button className='signup-google-btn' variant="primary" size="sm">
                <div className='d-flex justify-content-center'><div className='icon-div-btn'><FcGoogle className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn">&nbsp;Log in with Google</p></div>
                </Button>{' '}
                <Button className='signup-github-btn' variant="secondary" size="sm">
                <div className='d-flex justify-content-center'><div className='icon-div-btn'><FaGithub className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn" style={{color: "white"}}>&nbsp;Log in with Google</p></div>
                </Button>
                <Button className='signup-facebook-btn' variant="secondary" size="sm">
                <div className='d-flex justify-content-center'><div className='icon-div-btn'><RiFacebookBoxFill  className='icon-' size='1.3rem'/></div><p className="icon-text-div-btn" style={{color: "white"}}>&nbsp;Log in with Google</p></div>
                </Button>
                {console.log("test")}
                {console.log("test")}
              </div>
              <div  className='d-flex justify-content-center'>
                
              <form className='signup-form shadow p-3 mb-5 bg-white rounded' onSubmit={handleSubmit}>
                {/* {JSON.stringify(currentUser.email)} */}
                    <div className="form-group">
                        <label htmlFor="display name" className='d-flex flex-row'>Display Name</label>
                        <input type="text" className="form-control" ref={displayNameRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='d-flex flex-row'>Email</label>
                        <input type="email" className="form-control"  ref={emailRef}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='d-flex flex-row'>Password</label>
                        <input type="password" className="form-control"  ref={passwordRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className='d-flex flex-row'>Confirm Password</label>
                        <input type="password" className="form-control" ref={passwordConfirmRef} />
                    </div>
                    <div className="form-group d-flex flex-row signup-check-box ">
                        <input type="checkbox" className="form-control" id="exampleInputPassword1"/>
                        <label htmlFor="exampleInputPassword1" className='d-flex flex-row'>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</label>
                    </div>
                    <button type="submit" className="btn btn-primary"  onSubmit={handleSubmit} disabled={loading}>Submit</button>
                    <p>By clicking “Sign up”, you agree to our <a href="#">terms of service, privacy policy</a> and <a href='#'>cookie policy</a></p>
                </form>
              </div>
              <div className='signup-form-p'>
                <p>Don’t have an account?<a href='#'> Sign up</a></p>
                <p>Are you an employer?<a href="#"> Sign up on Talent<BiLinkExternal/></a></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;