// importing section
import React, { useEffect } from "react";
import { database } from "./../config/firebase";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import EditData from "../components/EditComponent/EditData";
import { toast } from "react-toastify";

const Panel = () => {
  // usestete section
  const [datas, setDatas] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [id, setId] = React.useState("");
  const [orderPopup, setOrderPopup] = React.useState(false);

  // email or not check
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // collection create section
  const collections = collection(database, "Booking");

  // getting data from the db
  useEffect(() => {
    // getData function create section
    const getData = async () => {
      const dbData = await getDocs(collections);
      setDatas(dbData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  // HandleDelete function create section
  const HandleDelete = async (id) => {
    const deleteData = doc(database, "Booking", id);
    deleteDoc(deleteData);
  };

  // update function create section
  const HandleUpdate = async () => {};

  // order popup open function create section
  const EditPopupOpen = (name, email, address, id) => {
    setOrderPopup(!orderPopup);
    setName(name);
    setEmail(email);
    setAddress(address);
    setId(id);
  };

  // HandleUpdateBooking function create section
  const HandleUpdateBooking = async () => {
    // check field is empty or not
    if (name == "") {
      toast.error("Please Enter your name", toastOptions);
      return false;
    } else if (email == "") {
      toast.error("Please enter your email", toastOptions);
    } else if (!re.test(email)) {
      toast.warning("Please enter a valid email", toastOptions);
    } else if (address == "") {
      toast.error("Please enter your address", toastOptions);
    } else {
      const updateData = doc(database, "Booking", id);
      await updateDoc(updateData, {
        name: name,
        email: email,
        address: address,
      });
      toast.success("Updated successfully", toastOptions);
      setTimeout(() => {
        setOrderPopup(false);
      }, 1000);
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
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  SI NO
                </th>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  ADDRESS
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, id) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {id + 1}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.name}
                  </th>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.address}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() =>
                        EditPopupOpen(
                          data.name,
                          data.email,
                          data.address,
                          data.id
                        )
                      }
                    >
                      Edit
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => HandleDelete(data.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <EditData
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        name={name}
        email={email}
        address={address}
        HandleUpdateBooking={HandleUpdateBooking}
        setName={setName}
        setEmail={setEmail}
        setAddress={setAddress}
      />
    </>
  );
};

export default Panel;
