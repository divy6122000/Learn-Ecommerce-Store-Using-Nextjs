import React from 'react'
import Link from 'next/dist/client/link'
import Product from '../models/Product';
import connectToDB from '../middleware/config';

const Sticker = ({ products }) => {
    // console.log(products)
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {Object.keys(products).length === 0 && <p>Sorry, Stickers is currently out of stocks. New stocks will coming soon!</p> }
                        {Object.keys(products).map((item) => {
                            return <Link passHref={true} href={`/product/${products[item].slug}`} key={products[item]._id}>
                                <div className="lg:w-1/4 md:w-1/2 w-full cursor-pointer shadow-sm">
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="h-[45vh] md:h-[45vh] m-auto block" src={products[item].img} />
                                    </a>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                                        <p className="mt-1">₹{products[item].price}</p>
                                        <div className="mt-1">
                                            {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                                            {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                                            {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                                            {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                                            {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                                        </div>
                                        <div className="mt-1">
                                            {products[item].color.includes('Red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('Green') && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('Blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                            {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )

}
export async function getServerSideProps() {
    connectToDB();
    const products = await Product.find({ category: 'stickers' });
    let Stickers = {}
    for (let item of products) {
        if (item.title in Stickers) {
            if (!Stickers[item.title].color.includes(item.color) && item.availableQty > 0) {
                Stickers[item.title].color.push(item.color)
            }
            if (!Stickers[item.title].size.includes(item.size) && item.availableQty > 0) {
                Stickers[item.title].size.push(item.size)
            }
        }
        else {
            Stickers[item.title] = JSON.parse(JSON.stringify(item));
            if (item.availableQty > 0) {
                Stickers[item.title].color = [item.color]
                Stickers[item.title].size = [item.size]
            }
        }
    }
    // console.log(products)
    return {
        props: { products: JSON.parse(JSON.stringify(Stickers)) }, // will be passed to the page component as props
    }
}
export default Sticker
