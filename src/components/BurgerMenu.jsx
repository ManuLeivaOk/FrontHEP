import React from 'react'
import { Link } from "react-router-dom";


const BurgerMenu = () => {

  return (
    <div className='grid grid-rows-3 text-center items-center menuHamburguesa md:hidden'>
        <Link to='/' className='p-4'>Inicio</Link>
        <Link to='/tienda' className='p-4'>Tienda</Link>
        <Link to='/blog' className='p-4'>Artículos</Link>
    </div>
  )
}

export default BurgerMenu