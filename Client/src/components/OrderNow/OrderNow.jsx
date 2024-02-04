// importing section
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { database } from "./../../config/firebase";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const OrderNow = ({ orderPopup, setOrderPopup }) => {
  // usestate section
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

  // email verify section
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // toast design create section
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  // collection create section
  const value = collection(database, "Booking");

  // HandleBooking function create section
  const HandleBooking = async () => {
    // check values is null or not and data add  in the firebase or show error massage
    if (name == "") {
      toast.error("Please enter your name", toastOptions);
    } else if (email == "") {
      toast.error("Please enter your email", toastOptions);
    } else if (!re.test(email)) {
      toast.warning("Please enter a valid email", toastOptions);
    } else if (address == "") {
      toast.error("Please enter your address", toastOptions);
    } else {
      await addDoc(value, { name: name, email: email, address: address }).catch(
        (err) => toast.error(`${err.message}`, toastOptions)
      );
      toast.success("Booked successfully", toastOptions);
      setTimeout(() => {
        setOrderPopup(false);
        // all field is empty set after 2 second
        setName("");
        setEmail("");
        setAddress("");
      }, 2000);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                  onClick={HandleBooking}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default OrderNow;
