import React from 'react'

const Order = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">FASHION.COM</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #784585</h1>
              <p className='my-3'>Your order has been successfully placed</p>
              <div className="flex mb-4">
                <a className="flex-grow text-center  border-b-2 py-2 text-lg px-1">Item Description</a>
                <a className="flex-grow text-center border-b-2  py-2 text-lg px-1">Quantity</a>
                <a className="flex-grow text-center border-b-2  py-2 text-lg px-1">Item Total</a>
              </div>

              <div className="flex mb-4">
                <a className="flex-grow py-2 text-lg px-1">Wear the code (XL/Black)</a>
                <a className="flex-grow py-2 text-lg px-1">1</a>
                <a className="flex-grow py-2 text-lg px-1">₹499</a>
              </div>
              <div className="flex mb-4">
                <a className="flex-grow  py-2 text-lg px-1">Wear the code (XL/Black)</a>
                <a className="flex-grow  py-2 text-lg px-1">1</a>
                <a className="flex-grow  py-2 text-lg px-1">₹499</a>
              </div>
              <div className="flex mb-4">
                <a className="flex-grow  py-2 text-lg px-1">Wear the code (XL/Black)</a>
                <a className="flex-grow  py-2 text-lg px-1">1</a>
                <a className="flex-grow  py-2 text-lg px-1">₹499</a>
              </div>
             
              <div className="flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹1497.00</span>
                <button className="flex text-white bg-pink-500 border-0 py-1 my-5 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
               
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Order