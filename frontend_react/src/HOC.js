import React from 'react'

import {NavigationDots} from './components/index.js'
import {SocialMedia} from './components/index.js'
import './Hoc.scss'

const HOC = (props) => {
  return (
    <section className='app__Hoc'>
       <props.wrappedComponent/>
      </section>
  
  )
}

export default HOC