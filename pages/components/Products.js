import React, { useState } from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import Currency from 'react-currency-formatter'

const MAX_RATING=5;
const MIN_RATING=1;

function Products({id,title,price,description,category,image}) {
  const [rating] = useState(
    Math.floor(Math.random() *(MAX_RATING-MIN_RATING+1))
  );
    return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-5'>
        <p className='absolute top-2 right-2 text-xs italic my-3'>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain" className='self-center m-auto'/>
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_, i) =>(<StarIcon className="text-yellow-600"/>))}
        </div>
        
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='text-xl font-semibold'>
            <Currency quantity={price} />
        </div>
        <button className='bg-ridamen p-2 text-white items-center rounded-lg font-semibold mt-2 w-4/5 self-center'>Add to basket</button>
        
        
    </div>
  )
}


export default Products
