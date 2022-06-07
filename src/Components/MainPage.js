import React from 'react'

export default function MainPage() {
  return (
    <>
    <div className='bg-light container mt-5 px-4 pt-4'>
        <h1 className='py-4 fs-1'>Pizza Delivery</h1>
        <p className='pb-3 fs-4'>Welcome to Pizza Delivery Service. This is the place when you may choose the
             most delicious pizza you like from wide variety of options !</p>
        <div className='container'>
            <hr />
        </div>
        <p className='pt-3 fs-4'>We're performing delivery free of charge in case if your order is higher than 20$</p>
        <button className='mb-3 btn btn-dark fs-4 container-lg'>Sign In and Order</button>
    </div>
    </>
  )
}
