import React, { useState } from 'react'
import './NavBar.scss'
import  images from '../../constatnts/image'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import { motion } from "framer-motion"


const NavBar = () => {

  const[toggle,setToggle]=useState(false)
  return (
    <>
    
    <nav className="app__navbar">
    <img className='app__navbar--logo' src={images.logo}/>
    

       
           
          <ul className="app__navbar--links ">
            {['home','about','contact','work','skills'].map(element=><li className='p-text' key={`link-${element}`}><a>{element}</a></li>)} 
          </ul>
          <div className="app__navbar-Menu" >
          <HiMenuAlt4   onClick={()=>{
          setToggle(true)
           }}/>
          </div>
          

   
        


      
    </nav>
   
        {toggle ? (

          <motion.div className="app__navbar--menu" whileInView={{x:[300,0],opacity:[0,1]}}
            transition={{duration:0.65,ease:'easeIn'}}
          >
          
          <HiX className="app__navbar--menu-X" onClick={()=>{
            setToggle(false)
          }}/>
        
        <ul className="app__navbar--links--menu">
          {['home','about','contact','work','skills'].map(element=><li className='p-text' key={`${element}`}><a>{element}</a></li>)} 
        </ul>

       

    </motion.div>

    ) : ("")}

    
      

     

      
     
          

      
  
    
    
   

      </>
     
  )
}

export default NavBar