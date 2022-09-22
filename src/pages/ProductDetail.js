import React from "react";
import { ProductsData } from "../data";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter";
import { HiStar } from "react-icons/hi";
import MainBtn from "../components/MainBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({selectedProducts , setSelectedProducts, isLoggedIn}) => {
  const { id } = useParams();

  // Notify When Buying
  const notify = () => {
    if(isLoggedIn) {
      toast.success("Purchased Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
  // Add Product To Cart 
    const handleAdd = () => {
      if(isLoggedIn) {
        setSelectedProducts([...selectedProducts,ProductsData[id - 1]])
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
    <div className="flex xs:flex-col xs:p-[2em] md:p-0 md:flex-row justify-evenly items-center mt-10">
      <img src={ProductsData[id - 1].image} alt="x" />
      <div className="space-y-4">
        <h4 className="font-bold text-3xl">Flower Pot</h4>
        <span className="flex items-center">
          <HiStar size={20} className="text-yellow-600 inline-block" /> 8/10 -
          15 Reviews
        </span>
        <p className="text-gray-500">{ProductsData[id - 1].description}</p>
        <div className="flex px-4 py-1 border w-fit space-x-4 text-center">
          <div className="border-r pr-5">
            <span className="text-gray-500">HEIGHT</span>
            <p>
              <span className="text-lg font-semibold">52</span>
              <sub className="text-gray-500 ml-1">cm</sub>
            </p>
          </div>
          <div>
            <span className="text-gray-500">WIDTH</span>
            <p>
              <span className="text-lg font-semibold">43</span>
              <sub className="text-gray-500 ml-1">cm</sub>
            </p>
          </div>
        </div>
        <span className="font-bold block text-3xl">
          {" "}
          $
          {(
            ProductsData[id - 1].price -
            (ProductsData[id - 1].discount / 100) * ProductsData[id - 1].price
          ).toFixed(2)}
        </span>
        
        <Counter />
        <div className="inline-block mr-5 font-semibold" onClick={handleAdd}>
          <MainBtn content="ADD TO CART" />
        </div>
        <button
          onClick={notify}
          data-aos="fade-in"
          data-aos-delay="700"
          data-aos-duration="1000"
          className="font-semibold rounded-full text-white bg-pink-300 px-12 hover:bg-pink-400 duration-150 shadow-md shadow-black py-3"
        >
          Buy Now
        </button>
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
    </div>
  );
};

export default ProductDetail;
