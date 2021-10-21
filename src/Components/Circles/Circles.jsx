import React from 'react'
import Circle from './Circle/Circle'
import './Circles.scss'

const Circles = () => {
   return (
      <div className="circles">
         <Circle backgroundColor={'#8d2af2'}/>
         <Circle backgroundColor={'#221d1b'}/>
         <Circle backgroundColor={'#f4c407'}/>
      </div>
   )
}

export default Circles
