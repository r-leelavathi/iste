import React from 'react'
import './About.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/clgimg.jpg'
import image3 from '../../assets/clgimg.jpg'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'

const About = () => {
    return (
        <div className='About' id='About'>
            <div className='left-r'>

                <img src={image3} alt="" />
                <div>
                    {/* Embedded Google Map */}
                    <iframe
                        title="College Location"
                        width="480"
                        // height="450"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2622817252877!2d74.85143397320802!3d12.890849116647336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a145a8d7537%3A0x40972a862265bcb8!2sKarnataka%20(Govt.)%20Polytechnic!5e0!3m2!1sen!2sin!4v1707589756550!5m2!1sen!2sin"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
            <div className='right-r'>
                {/* <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" /> */}
                <span>About Us</span>
                <div>
                    <span className='stroke-text'>Fourth ISTE State Level </span>
                    <span> Student Convention for Polytechnics-2024</span>
                </div>

                <div className='details-r'>
                    {/* <div><span>ISTE has a very large and an effective membership base consisting of</span></div> */}
                    <div><img src={tick} alt=""></img><span>Theme: Science and Technology for Sustainable Development </span></div>
                    <div><img src={tick} alt="" /><span> Karnataka (Govt.) Polytechnic, Mangaluru is hosting State Level student Convention- 2024 for students of polytechnics in the state of Karnataka. </span></div>
                    <div><img src={tick} alt="" /><span>Our aim is to provide a platform to students to exhibit their knowledge and skills in all spheres of Engineering and Technology with a theme.  </span></div>
                    <div><img src={tick} alt="" /><span>ISTE Membership Online Web Portal https://membership.isteonline.in/  </span></div>
                    {/* <span className='our-partners-text'>    Our Partners  </span> */}
                </div>
                <div className="partners">
                    <img src={tick} alt="" /><img src={tick} alt="" /><img src={tick} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
