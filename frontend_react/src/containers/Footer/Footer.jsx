import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion';
import { BsTwitter, BsInstagram  ,BsLinkedin,BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
    <section className="app__footer ">
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.5 }}
      className='app__footer--left'>
        <h1 className='app__footer--logo'>Logo</h1>
  
        <div className='app__footer--text'>In the mean time shall soon find out the cause of this: What was 
        the epicurus towards their children. </div>
        <div className='app__footer-container'>
          {[<BsTwitter/>,<BsInstagram/>,<BsLinkedin/>,<BsFacebook/>].map(element=>{ return element})}
        </div>
      </motion.div>
      <div  className="app__footer--right">
        <motion.button
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{ duration: 0.5 }}
        >
          Download CV
        </motion.button>

        <motion.button
         initial={{opacity:0,y:-100}}
         whileInView={{opacity:1,y:0}}
         transition={{ duration: 0.5 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </section>
  )
}

export default Footer