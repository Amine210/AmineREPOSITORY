import React from 'react'
import { useState ,useEffect } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion';
import image from '../../constatnts/image'
import { urlFor, client } from '../../client'

const Skills = () => {
  const [skills,setSkills]=useState([])

  useEffect(()=>{
    const query="*[_type == 'skills']"
    client.fetch(query)
    .then((works)=>{
      setSkills(works)   
    })
  },[])

  return (
    <>
      <motion.h2 
      initial={{opacity:0}}
      whileInView={{opacity:0.5}}
      transition={{duration:0.85}}
      className="head-text" id="skills-head-text">SKILLS <br /> HOVER OVER A SKILL FOR CURRENT <span>PROFESSIENCY</span></motion.h2>
      <div className='app__skills app__flex'>
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.85}}
          class="app__skills--container">
            {skills.map((skill,index)=>{
            return <motion.div 
            initial={{x:(index<8)?-200:200}}
            whileInView={{x:0}}
            transition={{duration:([0,1,2,3,8,9,10,11].includes(index))?0.85:1.5}}
            className="app__flex app__skills-icon "
            >
            <img className='app__skills-icon-item' src={urlFor(skill.icon)} />
            <h3 className='app__skills-icon--professiency'>{skill.professiency+"%"}</h3>
            </motion.div>
    
            })}
          </motion.div >
        
      </div>

    </>
  )
}

export default Skills
