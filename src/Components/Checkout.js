import React from 'react'

export default function Checkout() {
  return (
    <>
      <div className='container pt-4'>
        <h2 className='fs-3 pb-2'>Checkout</h2>
        <h4 className='fs-5 pb-2'>Credit Card</h4>
        <form action="">
            <input type="number" className='container-sm'/>
            <p className='py-2'>Order Total <span className='order-total fw-bold'>${}</span></p>
        </form>
      </div>
    </>
  )
}
