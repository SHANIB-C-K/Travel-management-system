import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDocs, collection } from "firebase/firestore";
import { database } from "./../../config/firebase";

function AdminLogin({ setPanels }) {
  const [user, setUser] = useState({ username: "", pass: "" });
  const [admindata, setAdmin] = useState([]);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      setPanels(true);
    }
  });

  //handle changes
  const HandleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //firebase validate
  const DatRef = collection(database, "admin");
  const getDataList = async () => {
    try {
      const data = await getDocs(DatRef);
      const filterdata = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAdmin(filterdata);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getDataList();
  }, []);
  const adminpass = admindata.map((value) => {
    var adminpass = value.password;
    return adminpass;
  });
  const adminuser = admindata.map((value) => {
    var adminuser = value.username;
    return adminuser;
  });

  const HandleValidate = () => {
    const { username, pass } = user;

    if (username == "") {
      toast.error("Please enter username", toastOptions);
      return false;
    } else if (pass == "") {
      toast.error("please enter your password", toastOptions);
      return false;
    } else if (username != adminuser && pass != adminpass) {
      toast.error("username or password incorrect", toastOptions);
      return false;
    } else if (username == adminuser && pass == adminpass) {
      return true;
    }
  };

  const HandleSubmit = (event) => {
    // console.log(user.username);

    event.preventDefault();

    if (HandleValidate() === true) {
      localStorage.setItem("admin", JSON.stringify(user));
      setPanels(true);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
        <form
          onSubmit={(event) => HandleSubmit(event)}
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <div className="sm:h-[450px] sm:w-[450px] h-[450px] w-[350px] dark:bg-gray-800 dark:bg-opacity-50 bg-white bg-opacity-50 rounded-3xl shadow-xl flex flex-col justify-center items-center">
            <div className="flex sm:h[500px] sm:w-[500px] h-[450px] w-[350px] items-start justify-center pt-10">
              {/* <img src={Logo} alt="logo" /> */}
              <h1 className="text-black dark:text-white font-semibold text-2xl">
                LOGIN
              </h1>
            </div>
            <div className="pb-24">
              <div className="flex flex-col items-center justify-center">
                <input
                  className="bg-gray-100 dark:bg-gray-700 bg-opacity-10 dark:bg-opacity-10 p-4 border border-[#4e0eff] dark:text-white text-black focus:outline-none focus:border-black w-72 rounded-lg"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  onChange={(event) => HandleChange(event)}
                  min="3"
                  required
                />
                <br />
                <input
                  className="bg-gray-100 dark:bg-gray-700 bg-opacity-10 dark:bg-opacity-10 p-4 border border-[#4e0eff] dark:text-white text-black focus:outline-none focus:border-black w-72 rounded-lg"
                  type="password"
                  placeholder="Password"
                  name="pass"
                  onChange={(event) => HandleChange(event)}
                  min="3"
                  required
                />
                <br />
                <button
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                  //   onClick={(event) => HandleAdmissionSubmit(event)}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
