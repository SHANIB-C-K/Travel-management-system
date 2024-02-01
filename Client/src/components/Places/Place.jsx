// importing section
import React from "react";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import PlaceCard from "./PlaceCard";

// json create section
const PlacesData = [
  {
    id: 1,
    image: Img1,
    title: "Boat",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit molestias veritatis illo quae tempora, vero et culpa id ex doloremque error. Fugiat, laborum temporibus. Quisquam dicta obcaecati animi explicabo!",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    id: 2,
    image: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laboriosam dolorum et incidunt quibusdam assumenda sed temporibus quidem, deserunt vitae, nisi at delectus vel officiis magnam ratione reprehenderit, quam cumque!",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    id: 3,
    image: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur ab reiciendis esse error voluptate animi sequi perspiciatis aliquam libero.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    id: 4,
    image: Img4,
    title: "Sydney",
    location: "USA",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolore iste, officiis accusamus dolor neque asperiores sapiente quisquam iure non illum repudiandae officia voluptate ab quam tempore nesciunt facilis commodi?",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    id: 5,
    image: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a dignissimos impedit? Natus inventore eaque iusto libero, consectetur cum numquam.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    id: 6,
    image: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo sapiente deleniti saepe velit ipsum eum at, in itaque laudantium, illo vitae aperiam maiores, rem quidem sunt distinctio hic! Sint!",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ filteredData }) => {
  return (
    <>
      {/* html section */}
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10" id="services">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          {/* maping section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredData.map((item, id) => (
              <PlaceCard
                // handleOrderPopup={handleOrderPopup}
                key={id}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
