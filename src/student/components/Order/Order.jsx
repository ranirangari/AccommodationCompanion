import React from 'react'
import { Grid } from '@mui/material'
import OrderCart from './OrderCart'

const orderStatus=[
    {label:"Request received",value:"request_received"},
    {label:"Confirmed", value:"confirmed"},
    {label:"Cancelled", value:"cancelled"},
]

const Order = () => {
   
  return (
    <div className='px:5 lg:px-20'>
      <Grid container sx = {{justifyContent:"space-between"}}>
        <Grid item xs = {2.5}>
            <div className='h-auto shadow-md shadow-indigo-400 bg-white p-3 sticky top-3'>
                <h1 className='font-bold text-lg'>Filter</h1>
                <div className='space-y-4 mt-2'>
                    <h1 className='font-semibold'>BOOKING STATUS</h1>
                   
                   {orderStatus.map((option)=> <div className='flex items-center'>
                        <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'/>

                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                            {option.label}
                        </label>
                    </div>)}
                </div>
            </div>
        </Grid>

        <Grid item xs={9}>
            <div className='space-y-5'>
            {[1,1].map((item)=>  <OrderCart/>)}
            </div>
       


        </Grid>
      </Grid>
    </div>
  )
}

export default Order
