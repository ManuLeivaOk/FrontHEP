import React from 'react'
import CardNoticias from './CardNoticias'

const Noticias = () => {
  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
      <CardNoticias/>
      <CardNoticias/>
      <CardNoticias/>
    </div>




  )
}

export default Noticias