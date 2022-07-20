import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footar from '../components/footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  // const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    })
    try {
      // console.log("useEffect run from _app.js");
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token })
      // setKey(Math.random());
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null })
    router.push('/')
  }


  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let subT = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setTotal(subT);
  }
  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    // console.log("Add to cart start")
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, img }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    // console.log("The cart has been cleared")
    setCart({})
    saveCart({})
  }
  return <>
    <LoadingBar
      color='#DB2777'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      waitingTime={400}
    />
    <Navbar logout={logout} user={user} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={total} />
    <Component addToCart={addToCart} cart={cart} {...pageProps} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={total} />
    <Footar />
  </>
}

export default MyApp
