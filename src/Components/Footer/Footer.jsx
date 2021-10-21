import React from 'react'
import './Footer.scss'
import { Icon } from '@iconify/react';

const SidebarRight = () => {
   return (
      <footer className="footer">
         <button>  <Icon icon="bi:arrow-left" color="white" width="35" height="35" />
         </button>
         <p><button>ADICIONAR AO CARRINHO <Icon icon="clarity:shopping-bag-solid" color="#fff" width="25" height="25" />
         </button></p>
      </footer>
   )
}

export default SidebarRight
