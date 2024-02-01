// importing section
import React from "react";
import NatureVid from "../assets/video/main.mp4";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Place from "../components/Places/Place";
import BannerImg from "../components/BannerImg/BannerImg";
import BannerPic from "../assets/cover-women.jpg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/travel-cover2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

// PlacesData json create section
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

const HomeScreen = () => {
  // usestate section
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(PlacesData);

  return (
    <>
      {/* html section */}
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          {/* HomeSearch component  */}
          <HomeSearch />
        </div>
        {/* place component section */}
        <Place />
        {/* Banner image component section */}
        <BannerImg img={BannerPic} />
        {/* Blogs xomponent section */}
        <Blogs />
        {/* Banner component section */}
        <Banner />
        {/* Banner image 2 component section */}
        <BannerImg img={Banner2} />
        {/* Testimonial component section */}
        <Testimonial />
      </div>
    </>
  );
};

export default HomeScreen;
