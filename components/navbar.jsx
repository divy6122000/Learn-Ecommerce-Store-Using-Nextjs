/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import { BsTrash, BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';
import Image from 'next/image';
import { useRef } from 'react';

const Navbar = ({ logout,user, addToCart, cart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart)
  const [dropdown, setDropdown] = useState(false)
  const handleToggle = () => {
    setDropdown(true)
  }
  const handleOut = () => {
    setDropdown(false)
  }
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }
  }
  const ref = useRef(0)
  return (
    <>
      <header className="text-gray-600 body-font shadow-md sticky top-0 bg-white z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-2xl text-pink-500 font-bold">FASHION</span>
          </a></Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/tshirt'}><a className="mr-5 uppercase font-bold hover:text-pink-600">Tshirts</a></Link>
            <Link href={'/hoodies'}><a className="mr-5 uppercase font-bold hover:text-pink-600">Hoodies</a></Link>
            <Link href={'/stickers'}><a className="mr-5 uppercase font-bold hover:text-pink-600">Stickers</a></Link>
            <Link href={'/mugs'}><a className="mr-5 uppercase font-bold hover:text-pink-600">Shirts</a></Link>
          </nav>
          <a onMouseOver={handleToggle} onMouseLeave={handleOut} >
            {user.value != null && <CgProfile onMouseOver={handleToggle} className='text-2xl mx-2 cursor-pointer font-bold hover:text-gray-900' />}
            {dropdown == true && <div onMouseLeave={handleOut} className='bg-white absolute top-12 right-16 py-2 px-6 text-sm text-dark rounded-md mx-5'>
              <ul>
                <Link href={'/myaccount'}><a ><li className='py-1 hover:text-pink-500 font-bold'>My Account</li></a></Link>
                <Link href={'/orders'}><a><li className='py-1 hover:text-pink-500 font-bold'>Orders</li></a></Link>
                <li onClick={logout} className='py-1 hover:text-pink-500 cursor-pointer font-bold'>Logout</li>
              </ul>
            </div>}
          </a>
          {user.value == null && <Link href={'/login'}><a><button className='bg-pink-600 py-1 px-2 mx-2 text-sm text-white rounded-md'>Login</button></a></Link>}
          <AiOutlineShoppingCart onClick={toggleCart} className='text-2xl cursor-pointer font-bold hover:text-gray-900' />
        </div>

      </header>
      <div ref={ref} className="sidebar h-[100vh] absolute top-0 right-0 bg-pink-200 px-3 py-4 w-auto z-10 transform transition-transform translate-x-full ">
        {/* Shopping Cart Title  */}
        <div className="flex items-center place-content-between">
          <div className='cursor-pointer'>
            <GrClose onClick={toggleCart} className=' hover:text-white transition delay-100' />
          </div>
          <div>
            <h2 className='font-semibold uppercase'>Shopping Cart</h2>
          </div>
          <div>

          </div>
        </div>
        {/* Item Content */}
        {Object.keys(cart).length == 0 && <div className='text-center my-4 '>Your Cart Is Empty!</div>}
        {Object.keys(cart).map((k) => {
          return <div className="items flex my-3 border-2 px-2 py-1  place-content-around bg-gray-200 rounded-md" key={k}>
            <div className="logo ">
              <img src={cart[k].img} width={75} height={90} className="object-top rounded" />
            </div>
            <div className="item-name ml-2 cursor-pointer hover:text-black transition delay-100">
              <div className="item-name break-all">
                {cart[k].name}
              </div>
              <div className="flex items-center place-content-around h-14">
                <div className="qty flex items-center space-x-2">
                  <FiPlusSquare onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='text-2xl  hover:text-pink-300 transition delay-100' />
                  <input type="number" name="" value={cart[k].qty} id="" className='w-8 border-2 text-center border-gray-400 rounded' disabled={true} />
                  <FiMinusSquare onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].img) }} className='text-2xl  hover:text-pink-300 transition delay-100' />
                </div>
                <div className="price hover:text-pink-300 font-semibold transition delay-100">
                  {/* ₹ {cart[k].price} */}
                  ₹{subTotal}
                </div>
              </div>
            </div>
            <div className="remove my-1 cursor-pointer">
              <BsTrash className='text-2xl text-red-700 hover:text-red-500 transition delay-100' />
            </div>
          </div>
        })}
        {/* Checkout & clear cart buttons  */}
        <div className='flex place-content-evenly'>
          <Link href={'/checkout'}>
            <button className="flex mt-2 text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded "> <BsFillBagCheckFill className='mt-1 mx-1' /> Checkout</button>
          </Link>
          <p className='invisible'>Ld</p>
          <button onClick={clearCart} className="flex mt-2 text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded "> <BsFillCartXFill className='mt-1 mx-1' />
            Clear Cart</button>
        </div>
      </div>

    </>
  )
}

export default Navbar