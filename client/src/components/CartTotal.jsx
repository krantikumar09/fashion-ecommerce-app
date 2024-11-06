import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount }= useContext(ShopContext)

  return (
    <div className='w-full mt-16'>
        <div className="">
            <Title title={"Cart Total"}/>

            <div className="flex flex-col gap-2 mt-12 text-sm">
                <div className="flex justify-between">
                    <p className='text-sm text-navbar-text font-normal'>Subtotal</p>
                    <p className='text-sm text-black font-medium'>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p className='text-sm text-navbar-text font-normal'>Shipping Fee</p>
                    <p className='text-sm text-black font-medium'>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p className='text-sm text-black font-bold'><b>Total</b></p>
                    <p className='text-sm text-black font-bold'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default CartTotal