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
  const expression="turning ideas into real life products is my calling."

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
    <>
     

      
  
    <div id='home'className='app__header '>
        <motion.div initial={{y:-100}} whileInView={{y:0}} transition={{duration:1.5}} 
        className='app__header-info'>        
            <h1 key={text} initial={{ opacity: 0}} whileInView={{opacity:1}}   className='head-text'>Hi  <br/>I'm Amine</h1>
            <motion.p  className='p-text' animate={{opacity:op}}>{text}</motion.p>
            <h2 className="head-text--description">
              {expression.split("").map((char,index)=>{
                return <motion.span>
                {char}
                </motion.span>
              })}
            </h2>
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
    </>
  )
  
}

export default Header