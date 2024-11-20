import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import infoDocUI from './imgs/infodocUI.png';
import skyFlyUI from './imgs/skyflyUI.png';
import collegeUI from './imgs/collegeUI.png';
import CGPAUI from './imgs/CGPAUI.png';

function Project() {
    useEffect(() => {
        const elements = document.querySelectorAll('.project-img');
        VanillaTilt.init(elements, {
            max: 10,
            speed: 200,
            glare: true,
            'max-glare': 5,
        });
    }, []);

    return (
        <div className="container mt-5">
            {/* <div className="row card mb-5"></div> */}
            <h1 className="text-white text-center">My Projects</h1>
            <p className="card-subtitle text-center">Some of my projects</p>
            <div className="row project-row">
                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center mt-4">
                    <div className="card p-2 project-card">
                        <a href=""><img className='project-img infodoc rounded img-fluid' src={infoDocUI} alt="InfoDoc" /></a>
                        <p className='h5 my-4'>InfoDoc - Shows Doctors in local area</p>  
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column text-center mt-4">
                    <div className="card p-2 project-card">
                        <a href="https://sky-fly-plum.vercel.app/" target='_blank'><img className='project-img skyfly rounded img-fluid' src={skyFlyUI} alt="SkyFly" /></a>
                        <p className='h5 my-4'>SkyFly - Online Trip planner</p>
                    </div>
                </div>
            </div>
            <div className="row project-row"> 
                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center mt-4">
                    <div className="card p-2 project-card">
                        <a href="https://ksrct.ac.in/" className='text-center' target='_blank'><img className='project-img rounded img-fluid' src={collegeUI} alt="collegeWebsiteUI" /></a>
                        <p className='h5 my-4'>KSRCT - College Official Webpage (Team)</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-center mt-4">
                    <div className="card p-2 project-card">
                        <a href="https://cgpa-calculator-it.netlify.app/" className='text-center' target='_blank'><img className='project-img rounded img-fluid' src={CGPAUI} alt="collegeWebsiteUI" /></a>
                        <p className='h5 my-4'>GPA Calculator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
