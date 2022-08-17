import React from 'react';
import {GiSpaceship} from 'react-icons/gi';
import '../assets/styles.css'
import {ReactComponent as PeopleSpotIcon} from '../images/Svgs/PeopleSpot.svg';
import {ReactComponent as HeadsetIcon} from '../images/Svgs/Headset.svg';
import {ReactComponent as TechWritingIcon} from '../images/Svgs/TechWriting.svg';
import {ReactComponent as MatrixIcon} from '../images/Svgs/Matrix.svg';
import {ReactComponent as RocketIcon} from '../images/Svgs/Rocket.svg';

function Courses() {
    const courses=[
        {
        id: 1,
        icon: <PeopleSpotIcon />,
        title: "DevOps engineers",
        description: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads."},
        {
            id: 1,
            icon: <HeadsetIcon />,
            title: "Data scientists",
            description: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads."},
            {
                id: 1,
                icon: <TechWritingIcon />,
                title: "Software engineers",
                description: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads."},
                {
                    id: 1,
                    icon: <MatrixIcon />,
                    title: "Support teams",
                    description: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads."},
                    {
                        id: 1,
                        icon: <RocketIcon />,
                        title: "Engineering leaders",
                        description: "Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads."}    
                

    ]
  return (
    <div className='row courses-div justify-content-center'>
        <div className='col-11 col-sm-7 title-div'>
            <h2>Ensure your company stays on course</h2>
            <p>Here are just a few types of technologists that we help.</p>
        </div>
        <div className='d-flex justify-content-center course-main-div'>
            {courses.map((course) => {
                return(
                    <div key={course.id} className="course-div">
                        <span>{course.icon}</span>
                        <h3>{course.title}</h3>
                    </div>
                );
            })}            
        </div>
    </div>
  );
}

export default Courses