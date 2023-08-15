import React from 'react'
import "./ProductCard.css"
const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''/>
      </div>
      
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.country}</p>
          <p >{product.address}</p>
        </div>
        <div >
          <p className='font-semibold'>{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
