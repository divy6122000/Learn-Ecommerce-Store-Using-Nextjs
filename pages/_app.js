import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footar from '../components/footer'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  // const [cart, setCart] = useState({})
  // const [total, setTotal] = useState(0)
  // const saveCart = (myCart)=>{
  //   localStorage.setItem('cart',myCart);
  // }
  // const addToCart = (itemCode, qty, price, name, size, variant) => {
  //   let newCart = cart;
  //   if(itemCode in cart){
  //     newCart[itemCode].qty = cart[itemCode] + qty;
  //   }
  //   else{
  //     newCart[itemCode] = {qty:1,price,name,size,variant}
  //   }
  //   setCart(newCart)
  //   saveCart(newCart)

  // }
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footar />
  </>
}

export default MyApp
