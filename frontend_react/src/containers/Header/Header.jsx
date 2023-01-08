import React from 'react'
import './Header.scss'
import { motion } from "framer-motion"
import image from '../../constatnts/image'
import { useState } from 'react'
import { useEffect } from 'react'


const scaleVriants={
  initial:{scale: 0},
  whileInView:{scale:1} ,
  transition:{duration:1}
}

const Header = () => {

  const [text,setText]=useState("Web Developer Freelancer")
  const [op,setOp]=useState(1)
  const [firstRender,setFirstRender]=useState(true)

  useEffect(()=>{
  
      if(firstRender){
        setFirstRender(false)
      }else{
        const interval =setInterval(()=>{
          if(text=="Computer Science student"){
            setText("Web Developer Freelancer")
          }else if(text=="Web Developer Freelancer"){
            setText("Computer Science student")
          }
          console.log("1s left")
         
        },5000)
     

        return () =>clearInterval(interval);
      
    
      }
    
     
    
     
  })
  return (
    <div id='home'className='app__header app__flex'>
        <motion.div initial={{y:-100}} whileInView={{y:0}} transition={{duration:1.5}} 
        className='app__header-info'>        
            <h1 key={text} initial={{ opacity: 0}} whileInView={{opacity:1}}   className='head-text'>Amine <br/>Boukhari</h1>
            <motion.p  className='p-text' animate={{opacity:op}}>{text}</motion.p>
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
        {/*
        <motion.div className='app__header-image--container'
        variants={scaleVriants}
        initial={scaleVriants.initial}
        whileInView={scaleVriants.whileInView}
        transition={scaleVriants.transition}

        >
          
           {[image.react,image.javascript,image.html].map(element=><div className='app__header-image'> <img src={element} key={`${element}`}/> </div>)} 
        </motion.div> */}
    </div>
  )
}

export default Header