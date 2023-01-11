import React, { useState } from 'react'
import './NavBar.scss'
import  images from '../../constatnts/image'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import { motion } from "framer-motion"


const NavBar = () => {

  const[toggle,setToggle]=useState(false)
  return (
    <>
  
    
    <nav 
    style={toggle==true?{top:0}:{top:-2000}}
    className="app__navbar">
      <div className="app__navbar--container">
     
    
          <ul className="app__navbar--links ">
            {['home','about','work','skills'].map(element=><li className='p-text' key={`link-${element}`}><a>{element}</a></li>)} 
          </ul>
          <div className="app__navbar-Menu" >
         
          </div>
      </div>
    </nav>
    {toggle ?(  <HiX    className="app__navbar--icon" onClick={()=>{
            toggle?(setToggle(false)) : (setToggle(true))
          }}/>):( <HiMenuAlt4  className="app__navbar--icon" style={{color:"white"}}  onClick={()=>{
            setToggle(true)
             }}/>) }
        {/*toggle ? (

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

        ) : ("")*/}

    
      

     

      
     
          

      
  
    
    
   

      </>
     
  )
}

export default NavBar