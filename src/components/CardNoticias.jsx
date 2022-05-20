import React from 'react'

const CardNoticias = () => {
  return (
    <div className='container mx-auto my-6'>
        <div className='flex'>
            <div className='2/12 mx-2 md:w-4/12 fechaNoticias text-center'>27/02/2022</div>
            <div className='8/12'>
                <h5 className='font-bold text-xl text-gray-700'>Titulo de la noticia</h5>
                <p className='text-gray-400 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default CardNoticias