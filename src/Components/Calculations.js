import { Button } from 'react-bootstrap';
import React from 'react'

function Calculations() {
  return (
    <div className='row cal-main-div justify-content-center'>
        <div className='cal-div'>
            <p>A Forrester Consulting study shows <strong>179% return on investment</strong> with Stack Overflow for Teams.</p>
        </div>
        <div className='cal-div'>
        <p>The world’s largest telecom firm <strong>saved $10M</strong> in deflected support cases with our centralized knowledge base.</p>
        </div>
        <div className='cal-div'>
        <p>Subject-matter experts at software platform Unqork had <strong>27% more time </strong>to work on projects after using Teams.</p>
        </div>
        <div className='cal-div'>
        <p>You Can Save time and money with Stack Overflow for Teams.</p>
        <Button>Calculate Your ROI</Button>
        </div>
    </div>
  )
}

export default Calculations;