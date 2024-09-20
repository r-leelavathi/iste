import React from 'react'
import './Links.css'
import code1 from '../../assets/registrationqrcode.png'
import code2 from '../../assets/papersubmissionqrcode.png'
import { FaHandPointRight } from 'react-icons/fa';

const Links = () => {
    const registrationFormUrl = ''; // Replace with your Google Form link

    const papersubmitionFormUrl = '';
    const registrationForm = () => {
        window.open(registrationFormUrl, '_blank');
    };
    const papersubmitionForm = () => {
        window.open(papersubmitionFormUrl, '_blank');
    };
    return (
        <div id="link_section" className='links_section' >
            <div className="link_header">
                <span className='stroke-text'>Important</span>
                <span>Links</span>
            </div>
            <div className='link_container'>
                <div className="link-l">
                    <div className="link">
                        <span>Registration link </span>
                        <button className='btn' onClick={() => window.open('https://forms.gle/g5Qt4riPfKV1ird17', '_blank')}>
                            <FaHandPointRight className='handicon' />Click Here
                        </button>
                    </div>
                    <span className='scanimagetext'>
                        or scan below image to register
                    </span>
                    <img src={code1} alt="" />
                </div>

                <div className="link-r">
                    <div className="link">
                        <span>Paper Submission link </span>
                        <button className='btn' onClick={() => window.open('https://forms.gle/PhY9pweYr4tpY1C97', '_blank')}>
                            <FaHandPointRight className='handicon' />Click Here
                        </button>
                    </div>
                    <span className='scanimagetext'>
                        or scan below image to submit paper
                    </span>
                    <img src={code2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Links
