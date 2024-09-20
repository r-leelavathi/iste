import React, {useRef} from 'react';
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();    
        emailjs
          .sendForm('service_egoftrp', 'template_jwut8nq', form.current, {
            publicKey: 'i2DF3sCVRV6f3gFJY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          alert("Thank You for joining us!.. Email has sent successfully.")
      };
    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR SKILLS</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className="right-j">
                <form ref ={form} className='email-container' onSubmit={sendEmail} >
                    <input type='email' name="user-email" placeholder='Enter your e-mail address'>
                    </input>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
