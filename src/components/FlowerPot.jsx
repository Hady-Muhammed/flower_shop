import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
import {FaShare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlowerPot = ({product , selectedProducts , setSelectedProducts , favProducts , setFavProducts , isLoggedIn}) => {

  // Add Product To Cart 
const handleAdd = () => {
    if(isLoggedIn) {
      setSelectedProducts([...selectedProducts,product])
    } else {
      toast.error('Please Sign In!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
  // Add Product To Favorites
  const handleFav = () => {
    if(isLoggedIn) {
      setFavProducts([...favProducts,product])
    } else {
      toast.error('Please Sign In!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <div data-aos='fade' data-aos-duration='1000' className='p-5 border border-black shadow-xl group'>
        <div>
            <span className='p-2 text-pink-400 bg-pink-100'>
                -{product.discount}%
            </span>
        </div>
        <img className='mx-auto' src={product.image} alt="pot" />

        {/* Adding to Cart */}
        <div className='h-[50px] flex text-white bg-pink-500 rounded-md relative translate-y-[50px] group-hover:translate-y-0 duration-500'>


          <button className='w-[90%] duration-150 rounded-md hover:bg-black' onClick={handleFav}>
            <BsSuitHeartFill className='mx-auto'/>
          </button>

          <button className='w-full duration-150 rounded-md hover:bg-black px-2' onClick={handleAdd}>
          Add To Cart
          </button>

              <Link className='w-[90%]  grid place-items-center' to={"/flower_shop/product/" + product.id }>
                <button className='w-full h-full duration-150 rounded-md hover:bg-black' title='details' >
                      <FaShare className='mx-auto'/>
                </button>
              </Link>
        </div>

        <div className='relative z-10 bg-white'>
          <h2 className='text-center text-3xl font-bold text-gray-600'>{product.name}</h2>
          <p className='text-pink-400 text-center text-2xl font-semibold'>${(product.price - ((product.discount / 100) * product.price)).toFixed(2) }<sub className='text-gray-300 ml-2 line-through'>${product.price.toFixed(2)}</sub></p>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  )
}

export default FlowerPot