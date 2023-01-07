import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className='app__socialMedia'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
    </div>
  )
}

export default SocialMedia