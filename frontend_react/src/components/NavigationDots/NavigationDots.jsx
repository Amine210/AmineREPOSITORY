import React from 'react'
import './NavigationDots.scss'

const NavigationDots = (props) => {
  return (
    <div className='app__NavigationDots'>
        {
          ['header','about','skills','work','contact'].map(element=><div href={`#${element}`}
        style={props.isActive==element?{backgroundColor:'#313BAC'}:{}}
        ></div>)
        }

    </div> )

  }
export default NavigationDots