// importing section
import React, { useEffect } from "react";
import { database } from "./../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Panel = () => {
  // usestete section
  const [datas, setDatas] = React.useState([]);

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
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Panel;
