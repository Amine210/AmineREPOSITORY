
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../../constatnts/image'
import { urlFor, client } from '../../client';



import './About.scss';



const About = () => {
    
  const index={
    'About Me1':0 ,
    'About Me2':1 ,
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


  const [state,setState]=useState('About Me1')



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
      {console.log('render')}
     {/* <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
      
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            initial={{opacity:0}}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 , cursor: 'pointer'}}
            transition={{ duration: 0.4, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
        </div>*/}
        <div className='app__about-left'>
            <h1 className="app__about-left--numeration"><span>0</span><motion.span style={{position:"absolute"}}
              key={state}
              initial={{y:-50,opacity:0}} 
              animate={{y:5,opacity:1}} 
              transition={{duration:0.75}}
            >{(index[`${state}`]+1)}</motion.span></h1>
            <ul className='ul-text'>
              {['About Me1','About Me2','About Me3','About Me4'].map(((element,index)=>{
                  return  <li key={element}  onClick={()=>{
                    setState(element)
                    setdisplayedP(abouts[index].description)
                  }} className='li-text'
                  style={element==state?{color:'red'}:{}}>
                    {element}
                  </li>
                }))}
            </ul>
        </div>
        <div className='app__about-right'>
          <h3 className='p-text'>{state}</h3>
          <div className='head-text--container'>
            <motion.h1  className='head-text'>
            {sentence}
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
    </section>
  );
};

export default About