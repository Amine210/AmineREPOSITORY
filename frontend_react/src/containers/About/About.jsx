
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../../constatnts/image'
import { urlFor, client } from '../../client';



import './About.scss';



const About = () => {
    
  const index={
    'Biographie':0 ,
    'Education':1 ,
    'About Me3':2 ,
    'About Me4':3 ,

  }
  const [abouts,setAbouts] = useState([{description:"....."}])
  const [displayedP,setdisplayedP]=useState(abouts[0].description)

  
 
  useEffect(()=>{
    const query="*[_type == 'abouts']"
    client.fetch(query)
    .then((data)=>{
      setAbouts(data)
      
    }
    )
   
  },[])

  useEffect(()=>{
    setdisplayedP(abouts[0].description)
  },[abouts])


  const [state,setState]=useState('Biographie')



  const sentence ="My Biography"
  const letter={
    hidden:{opacity:0,y:50},
    visibile:{
      opacity:1,
      y:0
    }
  }

  function textReveal(text){
    text.split("").map((char,index)=>{
      return <motion.span initial={letter.hidden} 
       whileInView={letter.visibile}
       transition={{delay:index*0.1}}
       >{char}</motion.span>
    })
  }
 
 

  return (
    
    <section className='app__about'>
    
    <div>
        <div className='app__about-left'>
            <div className="app__about-left--numeration"><span>0</span><motion.span 
              key={state}
              initial={{y:-50,opacity:0}} 
              animate={{y:5,opacity:1}} 
              transition={{duration:1.75}}
            >{(index[`${state}`]+1)}</motion.span></div>
            <ul className='ul-text'>
              {['Biographie','Education'].map(((element,index)=>{
                  return  <li key={element}  onClick={()=>{
                    setState(element)
                    setdisplayedP(abouts[index].description)
                  }} className='li-text'
                  style={element==state?{color:`#6b7688`}:{}}>
                    {element}
                  </li>
                }))}
            </ul>
        </div>
        <div className='app__about-right'>
         
          <div className='head-text--container'>
            <motion.h1 key={state} className='head-text'>
            {state.split("").map((char,index)=>{
              return <motion.span  
              initial={{opacity:0 ,margin:50}}
              animate={{opacity:1,margin:5}}
              transition={{delay:index*0.2}}
              style={{color:"#6b7688" }} className='head-text'>{char}</motion.span>
            })}
            </motion.h1>
          </div>
          
          <p key={state} className='p-text'>
           {
              
           displayedP.split("").map((char,index)=>{
              return <motion.span
              initial={letter.hidden} 
              viewport={{ once: true }}
              whileInView={letter.visibile}
              transition={{delay:index*0.005}}
              >{char}</motion.span>
           })
            }
            
          </p>

        </div>
    </div>

   
    
    </section>
  );
};

export default About