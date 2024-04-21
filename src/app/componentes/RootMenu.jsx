import React from 'react'
import Link from 'next/link'   

const RootMenu = () => {
  return (
    <div className="layout-menu" >
          <h1 className="menu-titulo" >Cooperadora ISP N20 </h1>
          <ul className='mt-3'>
            <li className='item-menu' ><Link href="/" >Inicio </Link></li>
            <li className='item-menu' ><Link href="/alumnos" >Alumnos</Link></li>
            <li className='item-menu' ><Link href="/" >Cobros</Link></li>
            <li className='item-menu' ><Link href="/" >Reportes</Link></li>
          </ul>
        </div>
  )
}

export default RootMenu
