import { useRouter } from 'next/router'
import { useState } from 'react'
import Product from '../../models/Product';
import connectToDB from '../../middleware/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ addToCart, product, variants }) => {
   console.log(product.img)
    console.log(variants)
    const router = useRouter()
    const { slug } = router.query
    const [pin, setPin] = useState()
    const [availability, setAvailability] = useState()
    const checkAvailability = async () => {
        const pincode = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        const checkPin = await pincode.json();
        console.log(typeof pin)
        if (checkPin.includes(parseInt(pin))) {
            setAvailability(true)
            toast.success('Your, Pincode is serviceable', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }
        else {
            setAvailability(false)
            toast.error('Sorry, Pincode is not serviceable', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    const onChange = (e) => {
        setPin(e.target.value);
    }

    const [color, setColor] = useState(product.color);
    const [size, setSize] = useState(product.size);

    return <>
        <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-16 h-56 object-top object-center rounded" src={`../${product.img}`} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{product.desc}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size) && <button className={`border-2 rounded-full w-6 h-6 ${color === 'white' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <button className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 ${color === 'Red' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(size) && <button className={`border-2 ml-1 bg-green-500 rounded-full w-6 h-6 ${color === 'green' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <button className={`border-2 ml-1 bg-blue-500 rounded-full w-6 h-6 ${color === 'blue' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('purple') && Object.keys(variants['purple']).includes(size) && <button className={`border-2 ml-1 bg-purple-500 rounded-full w-6 h-6 ${color === 'purple' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(size) && <button className={`border-2 ml-1 bg-yellow-500 rounded-full w-6 h-6 ${color === 'yellow' ? 'border-black' : 'border-grey-300'}`}></button>}
                                {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) && <button className={`border-2 ml-1 bg-black rounded-full w-6 h-6 ${color === 'black' ? 'border-black' : 'border-grey-300'}`}></button>}
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                                        {Object.keys(variants[color]).includes('S') && <option value={"S"}>S</option>}
                                        {Object.keys(variants[color]).includes('M') && <option value={"M"}>M</option>}
                                        {Object.keys(variants[color]).includes('L') && <option value={"L"}>L</option>}
                                        {Object.keys(variants[color]).includes('XL') && <option value={"XL"}>XL</option>}
                                        {Object.keys(variants[color]).includes('XXL') && <option value={"XXL"}>XXL</option>}

                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="title-font font-medium md:text-2xl text-gray-900">₹ {product.price}</span>
                            <button onClick={() => { addToCart(slug, 1, product.price, product.title, size, color,product.img) }} className="flex ml-4 text-white bg-pink-500 border-0 py-1 px-2 md:py-2 md:px-4 focus:outline-none hover:bg-pink-600 rounded">Add To Cart</button>
                            <button className="flex ml-4 text-white bg-pink-500 border-0 py-1 px-2 md:py-2 md:px-4 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="pin flex my-4 mx-6">
                            <input onChange={onChange} type="number" className='border border-gray-400 rounded-lg font-semibold px-4 w-48' />
                            <button onClick={checkAvailability} className="flex ml-4 text-white bg-pink-500 border-0 py-1 px-2 md:py-2 md:px-4 focus:outline-none hover:bg-pink-600 rounded">Check</button>
                        </div>
                        {(availability && availability != null) && <div className="msg mx-6 text-xs text-green-600"> Yay! This pincode is serviceable.</div>}

                        {(!availability && availability != null) && <div div className="msg mx-6 text-xs text-red-600"> Sorry, We do not delivered at your location yet.</div>}


                    </div>
                </div>
            </div>
        </section>
    </>
}
export async function getServerSideProps(context) {
    connectToDB();
    const product = await Product.findOne({ slug: context.query.slug });
    let variants = await Product.find({ title: product.title , category:product.category})
    let colorSizeSlug = {}
    for (let item of variants) {
        if (Object.keys(colorSizeSlug).includes(item.color)) {
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
        else {
            colorSizeSlug[item.color] = {}
            colorSizeSlug[item.color][item.size] = { slug: item.slug }
        }
    }

    return {
        props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
    }
}
export default Post