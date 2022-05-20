import React from 'react'
import CardDelBlog from './CardDelBlog'

const Blog = ( { arrayArticulos } ) => {
  return (
    <div className='container mx-auto my-20'>
        {arrayArticulos.map( articulo => (
        <CardDelBlog
          key={articulo._id}
          articulo={articulo}
        />
      ))}
    </div>
  )
}

export default Blog