import React from 'react'
import Circles from '../Circles/Circles'
import './SidebarRight.scss'
import { Icon } from '@iconify/react';

const SidebarRight = () => {
   return (
      <aside className="sidebar-right">
         <div className="colors">
            <Circles />
            <h3>CORES</h3>
         </div>
         <div className="social">
            <Icon icon="bx:bxl-facebook" color="white" width="25" height="25" />
            <Icon icon="ant-design:twitter-outlined" color="white" width="25" height="25" />
            <Icon icon="ant-design:instagram-outlined" color="white" width="25" height="25" />
         </div>
      </aside>
   )
}

export default SidebarRight
