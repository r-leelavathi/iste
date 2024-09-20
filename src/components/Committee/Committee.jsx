import React, { useState } from 'react'
import './Committee.css';
import { CommitteeData } from '../../data/CommitteeData'
import leftarrow from '../../assets/leftArrow.png';
import rightarrow from '../../assets/rightArrow.png'
import { color, motion } from 'framer-motion'

const Committee = () => {
    const [selected, setSelected] = useState(0);
    const tLength = CommitteeData.length;
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='Committee' id="Committee">
            <div className="left-t">
                <span></span>
                <span className='stroke-text'>Organising</span>
                <span style={{color:'var(--orange)'}}>Committee Members</span>
                <motion.span
                key={selected}
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:100}}
                transition={transition}
                >
                   <div className='committe_name'> {CommitteeData[selected].name}</div>                     
                    <div> {CommitteeData[selected].designation}</div>
                    <div>{CommitteeData[selected].department}</div>
                    <div>{CommitteeData[selected].college} </div>
                </motion.span>

                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {/* {CommitteeData[selected].college} */}
                        mail id : 
                    </span>{" "}
                    - {CommitteeData[selected].review}
                </span>
            </div>
            <div className="right-t">
                <motion.div 
                initial= {{opacity:0, x:-100}}
                transition={{...transition, duration:2}}
                whileInView={{opacity:1, x:0}}
                >
                </motion.div>

                <motion.div 
                initial= {{opacity:0, x:100}}
                transition={{...transition, duration:2}}
                whileInView={{opacity:1, x:0}}
                >
                </motion.div>
                <motion.img 
                key={selected}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}
                src={CommitteeData[selected].image} alt="" />

                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0 ? setSelected(tLength - 1) :
                                setSelected((prev) => prev - 1);
                        }}
                        src={leftarrow} alt="" />
                    <img
                        onClick={() => {
                            selected === tLength - 1 ? setSelected(0) :
                                setSelected((prev) => prev + 1);
                        }}
                        src={rightarrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Committee
