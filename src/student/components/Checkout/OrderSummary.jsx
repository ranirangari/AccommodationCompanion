import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
    <AddressCard/>
      </div>

      <div >
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
        {[1,1,1].map((item)=><CartItem/>)}
      </div>
      
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border">
         <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
         <hr/>
         <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3  ml-2 mr-2 text-black">
              <span>Price</span>
              <span>₹5000</span>

            </div>
            
            <div className="flex justify-between pt-1 pb-3 ml-2 mr-2 text-black">
              <span>Total Amount</span>
              <span className="text-green-600">₹5000</span>

            </div>

            <Button variant="contained" className="w-full mt-5" sx={{px:"2.5rem", py:".7rem", bgcolor:"#9155fd"}}>Book Room</Button>
         </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default OrderSummary
