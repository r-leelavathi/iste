import React from 'react'
import './Registration.css'
import Date from '../Dates/Date'
import Account from '../Account/Account'

const Registration = () => {
    return (
        <div className='registration' id='registration'>
            <div className='registration-header'>
                <span className='stroke-text'>Registration</span>
                <span>Details</span>
            </div>

            <div className="registration-container">
                <div className="reg-intro-l">
                    <div>
                        Registration Process:
                    </div>
                    <div className='registration-msg'>
                        Participants are requested to register by paying
                        registration fee through NEFT and the transaction ID is necessary
                        to fill the registration form.
                    </div>
                </div>
            </div>
            <Account />
            <Date />
        </div>
    )
}

export default Registration
