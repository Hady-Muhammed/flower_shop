import React, { useState, useRef } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MainBtn from "./MainBtn";
// MUI
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
///
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const Header = ({
  selectedProducts,
  favProducts,
  setSelectedProducts,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  // MUI Modal State
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Menu State
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [fav, setFav] = useState(false);
  const [total, setTotal] = useState(0);

  //Profile Menu states
  const [prof, setProf] = useState(false);
  // Refs
  const user = useRef(null);
  const password = useRef(null);
  const usernameValid = useRef(null);
  const passwordValid = useRef(null);

  // Success Login
  const [successLog, setSuccessLog] = useState(false);

  const handleDelete = (e) => {
    // The id of the deleted product
    let id = e.target.id;
    console.log(id);

    // Remove the product from the UI
    e.target.parentElement.parentElement.remove();

    // Loop over the array to remove the deleted product
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== id)
    );
    console.log(selectedProducts);
  };

  // Handle Sign In

  const handleSignIn = () => {
    if (user.current.value && password.current.value) {
      setOpen(false);
      setIsLoggedIn(true);
      setSuccessLog(true);
    } else {
      user.current.classList.remove("border", "border-red-700");
      password.current.classList.remove("border", "border-red-700");
      usernameValid.current.classList.add("hidden");
      passwordValid.current.classList.add("hidden");

      if (user.current.value === "") {
        user.current.classList.add("border", "border-red-700");
        usernameValid.current.classList.remove("hidden");
      }
      if (password.current.value === "") {
        password.current.classList.add("border", "border-red-700");
        passwordValid.current.classList.remove("hidden");
      }
      console.log("enter valid data");
    }
  };
  // Close Successful snackbar
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessLog(false);
  };
  return (
    <>
      <header className="flex justify-around p-5 items-center sticky top-0 z-20 bg-white  shadow-md"> 
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1000"
          className="logo font-bold text-4xl"
        >
          <Link className="cursor-pointer" to="/flower_shop">
            Flower<span className="font-bold text-pink-400">.</span>
          </Link>
        </div>
        <ul
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1000"
          className="space-x-5 text-xl xs:hidden lg:flex"
        >
          <Link
            className="hover:text-pink-400 duration-150 cursor-pointer"
            to="/flower_shop"
          >
            Home
          </Link>
          <a
            href="#about"
            className="hover:text-pink-400 duration-150 cursor-pointer"
          >
            About
          </a>
          <a
            href="#products"
            className="hover:text-pink-400 duration-150 cursor-pointer"
          >
            Products
          </a>
          <a
            href="#review"
            className="hover:text-pink-400 duration-150 cursor-pointer"
          >
            Review
          </a>
          <a
            href="#contact"
            className="hover:text-pink-400 duration-150 cursor-pointer"
          >
            Contact
          </a>
        </ul>
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1000"
          className="xs:hidden lg:flex items-center space-x-5 text-2xl relative"
        >
          {isLoggedIn ? (
            <>
              <div className="relative" onClick={() => setFav((prev) => !prev)}>
                <BsSuitHeartFill
                  size={30}
                  className="hover:text-pink-400 duration-500 cursor-pointer"
                />

                <span
                  className={`${
                    favProducts.length
                      ? "opacity-1 visible"
                      : "opacity-0 invisible"
                  } duration-300 absolute top-[10px] right-[-5px] w-[20px] h-[20px] grid place-items-center text-sm rounded-full bg-red-600 text-white`}
                >
                  {favProducts.length}
                </span>
              </div>
              <div
                className="relative"
                onClick={() => setCart((prev) => !prev)}
              >
                <FaShoppingCart
                  size={30}
                  className="hover:text-pink-400 duration-500 cursor-pointer"
                />

                <span
                  className={`${
                    selectedProducts.length
                      ? "opacity-1 visible"
                      : "opacity-0 invisible"
                  } duration-300 absolute top-[10px] right-[-5px] w-[20px] h-[20px] grid place-items-center text-sm rounded-full bg-red-600 text-white`}
                >
                  {selectedProducts.length}
                </span>
              </div>{" "}
            </>
          ) : (
            <div></div>
          )}
          {isLoggedIn ? (
            <>
              <div id="fade-menu">
                <FaUser
                  size={30}
                  className="hover:text-pink-400 duration-500 cursor-pointer"
                  onClick={() => setProf((prev) => !prev)}
                />
              </div>

              {/* Profile Menu Settings  */}
              <ul
                className={`${
                  prof
                    ? "opacity-1 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                } absolute w-[130%] duration-500 text-white p-5 bg-black rounded-md right-0 top-[150%] text-sm space-y-4`}
              >
                <Link to="/flower_shop/profile">
                  <li className="cursor-pointer hover:bg-pink-100 duration-300 hover:text-black p-2">
                    My Account
                  </li>
                </Link>
                <Link to="/flower_shop">
                  <li
                    className="cursor-pointer hover:bg-pink-100 duration-300 hover:text-black p-2"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Log out
                  </li>
                </Link>
              </ul>
            </>
          ) : (
            <div onClick={handleOpen}>
              <MainBtn content="Sign In" />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
          onClick={() => setMenu((prev) => !prev)}
          className="xs:block lg:hidden cursor-pointer"
        >
          <BiMenuAltRight size={40} />
        </div>
        <ul
          className={`${
            menu
              ? "xs:w-[300px] sm:w-[500px] p-8  translate-x-0 space-y-5"
              : "w-[0px] p-0 space-y-0"
          } text-center translate-x-5 overflow-hidden duration-500 flex text-xl flex-col absolute xs:right-[5%] sm:right-[8%] bg-white top-[145%] shadow-2xl rounded-md`}
        >
          <Link
            className="block hover:text-pink-400 duration-500 cursor-pointer hover:pl-3"
            to="/flower_shop"
            onClick={() => setMenu((prev) => !prev)}
          >
            Home
          </Link>
          <a
            onClick={() => setMenu((prev) => !prev)}
            href="#products"
            className="block hover:text-pink-400 duration-500 cursor-pointer hover:pl-3"
          >
            Products
          </a>
          <a
            onClick={() => setMenu((prev) => !prev)}
            href="#review"
            className="block hover:text-pink-400 duration-500 cursor-pointer hover:pl-3"
          >
            Review
          </a>
          <a
            onClick={() => setMenu((prev) => !prev)}
            href="#contact"
            className="block hover:text-pink-400 duration-500 cursor-pointer hover:pl-3"
          >
            Contact
          </a>

          <div className="flex items-center space-x-5 text-2xl justify-center">
            <div
              className="relative p-2 border rounded-full"
              onClick={() => setFav((prev) => !prev)}
            >
              <BsSuitHeartFill className="hover:text-pink-400 duration-300 cursor-pointer" />
              <span
                className={`${
                  favProducts.length
                    ? "opacity-1 visible"
                    : "opacity-0 invisible"
                } duration-300 absolute top-[10px] right-[-5px] w-[20px] h-[20px] grid place-items-center text-sm rounded-full bg-red-600 text-white`}
              >
                {favProducts.length}
              </span>
            </div>
            <div
              className="relative p-2 border rounded-full"
              onClick={() => setCart((prev) => !prev)}
            >
              <FaShoppingCart className="hover:text-pink-400 duration-300 cursor-pointer" />
              <span
                className={`${
                  selectedProducts.length
                    ? "opacity-1 visible"
                    : "opacity-0 invisible"
                } duration-300 absolute top-[10px] right-[-5px] w-[20px] h-[20px] grid place-items-center text-sm rounded-full bg-red-600 text-white`}
              >
                {selectedProducts.length}
              </span>
            </div>

            {isLoggedIn ? (
              <div className="relative p-2 border rounded-full">
                <div id="fade-menu">
                  <FaUser
                    size={30}
                    className="hover:text-pink-400 duration-500 cursor-pointer"
                    onClick={() => setProf((prev) => !prev)}
                  />
                </div>

                {/* Profile Menu Settings  */}
                <ul
                  className={`${
                    prof
                      ? "opacity-1 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  } absolute w-[350%] duration-500 text-white p-5 bg-black rounded-md left-0 top-[-250%] text-sm space-y-4`}
                >
                  <Link to="/flower_shop/profile">
                    <li className="cursor-pointer hover:bg-pink-100 duration-300 hover:text-black p-2">
                      My Account
                    </li>
                  </Link>
                  <Link to="/flower_shop">
                    <li
                      className="cursor-pointer hover:bg-pink-100 duration-300 hover:text-black p-2"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Log out
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              <div onClick={handleOpen}>
                <MainBtn content="Sign In" />
              </div>
            )}
          </div>
        </ul>
      </header>

      {/* Mini Cart Menu */}
      <ul
        className={`fixed top-0 ${
          cart ? "right-0" : "right-[-35%]"
        } overflow-auto duration-500 bg-white shadow-2xl rounded-md z-[999] w-1/3 h-full space-y-5`}
      >
        <button
          className="p-5 text-xl"
          onClick={() => setCart((prev) => !prev)}
        >
          <GrClose />
        </button>
        <h2 className="text-2xl font-semibold text-center">
          Your Shopping Cart
        </h2>
        {selectedProducts.map((product) => {
          let $price = (
            product.price -
            (product.discount / 100) * product.price
          ).toFixed(2);

          return (
            <li
              key={product.id}
              className="flex space-x-3 shadow-md items-center"
            >
              <img className="w-1/2 object-cover" src={product.image} alt="x" />
              <div className="space-y-3">
                <h4 className="font-bold text-xl">${$price}</h4>
                <p>{product.description}</p>
                <button
                  id={product.id}
                  className="font-semibold rounded-full bg-pink-300 p-2"
                  onClick={handleDelete}
                >
                  REMOVE FROM CART{" "}
                </button>
              </div>
            </li>
          );
        })}
        <div className="total text-center font-bold text-4xl">
          TOTAL: <br /> ${total}
        </div>
      </ul>

      {/*Fav Menu */}
      <ul
        className={`text-center fixed top-0 ${
          fav ? "h-full" : "h-0"
        } left-0 overflow-auto duration-1000 bg-white shadow-2xl rounded-md z-[999] w-1/4 h-full space-y-5`}
      >
        <button className="p-5 text-xl" onClick={() => setFav((prev) => !prev)}>
          <GrClose />
        </button>
        <h2 className="text-2xl font-semibold text-center">Your Favorites</h2>
        {favProducts.map((product) => {
          let $price = (
            product.price -
            (product.discount / 100) * product.price
          ).toFixed(2);

          return (
            <li
              key={product.id}
              className="flex flex-col space-x-3 shadow-md items-center"
            >
              <img className="w-1/2 object-cover" src={product.image} alt="x" />
              <div className="space-y-3">
                <h4 className="font-bold text-xl">${$price}</h4>
                <p>{product.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Sign In Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              className="space-y-4"
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <input
                type="text"
                className="font-bold rounded-md p-3 w-full bg-pink-100 outline-none focus:"
                placeholder="Username"
                ref={user}
              />
              <p
                className="text-red-800 font-semibold hidden"
                ref={usernameValid}
              >
                Please enter a valid username!
              </p>
              <input
                type="password"
                className="font-bold rounded-md p-3 w-full bg-pink-100 outline-none focus:"
                placeholder="Password"
                ref={password}
              />
              <p
                className="text-red-800 font-semibold hidden"
                ref={passwordValid}
              >
                Please enter a valid password!
              </p>
              <button
                className="rounded-full text-white bg-gray-900 px-12 hover:bg-gray-700 duration-150 shadow-md shadow-black py-3"
                onClick={handleSignIn}
              >
                Submit
              </button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {/* Success SignIn Snackbar */}
      <Snackbar
        open={successLog}
        autoHideDuration={4000}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully Logged in! <br />
          Welcome back <span className="font-bold">John</span>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Header;
