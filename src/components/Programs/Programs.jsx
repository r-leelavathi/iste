import React from 'react';
import './Programs.css';
import RightArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programsData';
const Programs = () => {
  return (
    <div className='Programs' id="programs">
        <div className='programs-header'>
            <span className='stroke-text'>call for</span>
            <span>diverse</span>
            <span className='stroke-text'>perspectives</span>
        </div>
      <div className="program-categories">
           { programsData.map((program)=>(
                <div className='category'>
                    <program.image />
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'><span
                    onClick={() => {
                      const section = document.getElementById('join-us');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>Join Now</span>
                    <img 
                    onClick={() => {
                      const section = document.getElementById('join-us');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    src={RightArrow}/></div>
                    </div>
            ))}
        
      </div>
    </div>
  )
}

export default Programs
