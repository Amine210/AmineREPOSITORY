import React from 'react'

import {About , Footer , Header , Skills , Testemonial , Work } from './containers/index.js'
import {NavBar} from './components/index.js'
import HOC from './HOC'


import './App.scss'

const App = () => {
  return (
    <div className='app'>
    
     <NavBar/>
     <HOC wrappedComponent={Header} isActive="header"/> 
     <HOC wrappedComponent={About} isActive="about"/> 
     <HOC wrappedComponent={Skills} isActive="skills"/>
     <HOC wrappedComponent={Work} isActive="work"/>
     <Footer/>
    </div>
   

  )
}

export default App