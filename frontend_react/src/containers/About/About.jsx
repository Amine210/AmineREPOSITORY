
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image from '../../constatnts/image'
import { urlFor, client } from '../../client';



import './About.scss';


const About = () => {
    const Abouts=[
    {title:'web developer ' , description : 'Im a good web developer ' , imgUrl:image.about01 },
    {title:'web developer ' , description : 'Im a good web developer ' , imgUrl:image.about02},
    {title:'web developer ' , description : 'Im a good web developer ' , imgUrl:image.about03},
    {title:'web developer ' , description : 'Im a good web developer ' , imgUrl:image.about04}
  ] 

  const [abouts,setAbouts] = useState([])
  useEffect(()=>{
    const query="*[_type == 'abouts']"
    client.fetch(query)
    .then((data)=>{
      setAbouts(data)
      
    },(data)=>{
      console.log(data)
    })
  },[])


 
 

  return (
    <section className='app__about '>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

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
      </div>
    </section>
  );
};

export default About