import React from 'react'

const CardNoticias = () => {
  return (
    <div className=' my-6'>
        <div className='flex justify-between items-center mx-3 gap-3 bg-white rounded-md p-4 shadow-lg'>
            <div className='mx-2  fechaNoticias text-center'>27/02/2022</div>
            <div className='8/12'>
                <h5 className='font-bold text-xl text-gray-700'>Titulo de la noticia</h5>
                <p className='text-gray-400 my-3 leading-relaxed tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default CardNoticias