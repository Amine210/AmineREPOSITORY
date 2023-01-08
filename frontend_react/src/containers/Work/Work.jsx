import React , {useEffect}from 'react'

import { useState } from 'react'
import './Work.scss'
import { motion } from 'framer-motion';
import image from '../../constatnts/image'
import { urlFor, client } from '../../client'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';



const Work = () => {
  const [works,setData]=useState([])
  const [filtredWorks,setfiltredWorks]=useState([])


  useEffect(()=>{
    const cards=document.querySelectorAll('.app__profile-item')
    cards.forEach(card=>{
      card.addEventListener('mousemove',(e)=>{
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;

        const coef=10
        const rotateX = (coef / 2 - horizontal * coef).toFixed(2);
        const rotateY = (vertical * coef - coef / 2).toFixed(2);

        const x =e.offsetX
        const y =e.offsetY
        const {width,height}=card.getBoundingClientRect()
        const halfWidth=width/2
        const halfHeight=height/2
        console.log(rotateX)
       
        
        card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        
      })

    card.addEventListener('mouseleave',()=>{
      card.style.transform=`rotateX(${0}deg) rotateY(${0}deg)`
    })
    })


    const query="*[_type == 'works']"
    client.fetch(query)
    .then((works)=>{
      setData(works)
      setfiltredWorks(works)
      
    })
  },[])

  function filterHandler(item){
    if(item=="All"){
      setfiltredWorks(works)
    }else{
      setfiltredWorks(works.filter((work)=>{
        return work.tags.includes(item) 
      }))
    }
   
  }

 
  return (
    <section className='app__work'>
      <div className='app__work-filter'>
        {
          
          /* ["react Js","Vanilla Javascript","PHP","Node Js","All"].map(item=>(
              <motion.div 
              initial={{opacity:0,y:-100}}
              whileInView={{opacity:1,y:0}}
              transition={{ duration: 0.8, type: 'tween' }}
              className='app__flex'
              onClick={()=>{
                filterHandler(item)
              }}
              >
                {item}
                
              </motion.div>
           ))*/
        }
       
      <motion.h1 className='head-text'
        initial={{opacity:0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, type: 'tween' }}
      >My Projects</motion.h1>
      </div>
      <div className='app__work--data'>
          {filtredWorks.map((work, index) => (
            <motion.div
              initial={{opacity:0}}
              whileInView={{ opacity: 1 }}
              whileHover={{ cursor: 'pointer'}}
              transition={{ duration: 0.4, type: 'tween' }}
              className="app__profile-item"
              key={work.title + index}
            >
              <div className='app__profile-item--icon'>
              <AiFillEye/>
               <AiFillGithub/>
              </div>
              {/*<img src={urlFor(work.imgUrl)} alt={work.title} /> */}
              <h2 className="work--title" style={{ marginTop: 20 }}>{work.title}</h2>
              {/*<p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>*/}
            </motion.div>
          ))}
      </div>
    </section>
  )

}

export default Work