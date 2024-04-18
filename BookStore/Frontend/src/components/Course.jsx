import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import list from '../../public/list.json'


function Course() {
  const filterData = list.filter((data)=> data.category === "Free")
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-3xl md:text-4xl'> We're delighted to have you <span className='text-pink-500'> here ! </span> </h1>

          <p className='mt-12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta, perferendis vero deserunt consequuntur sunt in nemo earum nobis natus necessitatibus dolorum assumenda ex, mollitia eos? Voluptatum accusamus nisi dolores.</p>

          <Link to="/">
            <button className="btn mt-6 btn-secondary hover:bg-pink-600 hover:text-white duration-300"> Back </button>
          </Link>

        </div>

        <div>
          {
            filterData.map((item)=> (
              <Cards item={item} key={item.id}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course
