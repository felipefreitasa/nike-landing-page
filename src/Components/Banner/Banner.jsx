import React from 'react'
import './Banner.scss'

const Banner = ({ children }) => {
   return (
      <section className="banner">
         <p>AIRFORCE1</p>
         {children}
      </section>
   )
}

export default Banner
