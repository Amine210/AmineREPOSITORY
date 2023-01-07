import React from 'react'
import './Header.scss'
import { motion } from "framer-motion"
import image from '../../constatnts/image'


const scaleVriants={
  initial:{scale: 0},
  whileInView:{scale:1} ,
  transition:{duration:1}
}

const Header = () => {
  return (
    <div id='home'className='app__header app__flex'>
        <motion.div  initial={{ x: -100 }} whileInView={{x:0}} transition={{duration:1.5}} 
        className='app__header-info'>
          <div>  
            <motion.span whileHover={{rotate:40,cursor:'pointer'}}
            transition={{ duration: 0.5 }}
            >👋</motion.span>
            <div>
              <p className='p-text'>Hello I'm</p>
              <h1 className='head-text'>Amine</h1>
            </div>
          </div>
          <div>
            <p className='p-text' >Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
         whileInView={{opacity:1}}
         transition={{duration:1} }
         className='app__header-profile app__flex'
         >
           <motion.img  className="circle" initial={{ scale: 0 }}
           whileInView={{scale:1}}
            transition={{duration:1} }
             src={image.circle}/> 
          <img src={image.profile} />
         
        </motion.div>

        <motion.div className='app__header-image--container'
        variants={scaleVriants}
        initial={scaleVriants.initial}
        whileInView={scaleVriants.whileInView}
        transition={scaleVriants.transition}

        >
          
           {[image.react,image.javascript,image.html].map(element=><div className='app__header-image'> <img src={element} key={`${element}`}/> </div>)} 
        </motion.div>
    </div>
  )
}

export default Header