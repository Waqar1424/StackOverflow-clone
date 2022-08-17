import React from 'react';
import { Button } from 'react-bootstrap';
import CreateFreeTeamsIcon from '../images/create-free-team.PNG'

function CreateFreeTeam() {
  return (
    <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 d-flex justify-content-center create-free-teams'>
            <img src={CreateFreeTeamsIcon} alt=''/>
            <p>Build a private community to share technical or non-technical knowledge.</p>
            <Button>Create a free Team</Button>
        </div>
    </div>
  )
}

export default CreateFreeTeam