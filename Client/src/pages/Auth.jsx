import React from "react";
import { database } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  // usestate section
  const [login, setLogin] = React.useState(false);

  // navigate create section
  const navigate = useNavigate();

  //HandleSubmit function defnition section
  const HandleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(passlen);
          console.log(data, "authData");
          setLogin(true);
        })
        .catch((err) => {
          if (email == "") {
            toast.error("please enter your email", toastOptions);
            return false;
          } else if (password == "") {
            toast.error("Please enter your password", toastOptions);
            return false;
          } else if (password.length < 6) {
            toast.error("Password must be 6 charector", toastOptions);
            return false;
          } else {
            toast.error(`${err.code}`, toastOptions);
            setLogin(true);
          }
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          toast.success("You are logged in", toastOptions);
          console.log(data, "authData");
          window.localStorage.setItem("loggedIn", true);
          setTimeout(() => {
            navigate("/");
            location.reload();
          }, 1500);
        })
        .catch((err) => {
          if (email == "") {
            toast.error("please enter your email", toastOptions);
            return false;
          } else if (password == "") {
            toast.error("Please enter your password", toastOptions);
            return false;
          } else {
            toast.error(`${err.code}`, toastOptions);
            return false;
          }
        });
    }
  };

  // login registrater function create section
  const LoginRegister = () => {
    if (!login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  // toast design create section
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  return (
    <>
      {/* html section */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {login ? "Sign in to your account" : "Sign up to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => HandleSubmit(e, login ? "signin" : "signup")}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {login ? "Not a member?  " : "You already a member?  "}
            <a
              onClick={LoginRegister}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              {login ? "SignUp" : "SignIn"}
            </a>
          </p>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Auth;
