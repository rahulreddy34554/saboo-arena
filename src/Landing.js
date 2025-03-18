import EnquiryForm from "./components/EnquiryForm";
import { TiTick } from "react-icons/ti";

// Define car data with optional className for image
const cars = [
  {
    img: "https://www.marutisuzuki.com/images/dzire_brand/images/threesixty/blue/suzuki_swift_ext_360_oragne_v-1_6.webp",
    name: "DZIRE",
    link: "https://saboomaruti.in/", // Replace with the actual URL of the car model page
    imgClass: "rounded-t-lg shadow-lg scale-t-200 scale-150 ",
    nameClass: "text-white font-bold ", // Fixing name styling to white text
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp",
    name: "SWIFT",
    link: "https://saboomaruti.in/", // Replace with the actual URL of the car model page
    imgClass: "rounded-t-xl scale-t-200 ", // Keeping the image styling same
    nameClass: "text-white font-bold", // Fixing name styling to white text
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/cng/baleno-cng-thubnail.webp",
    name: "BALENO",
    link: "https://saboonexa.in/", // Replace with the actual URL of the car model page
    imgClass:
      "rounded-xl shadow-lg  transition-all duration-300", // Hover effect example
    nameClass: "text-white font-bold", // Keeping name styling consistent
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/thumbnails/gt-thumbnail-cng.webp",
    name: "GRAND VITARA",
    link: "https://saboonexa.in/", // Replace with the actual URL of the car model page
    imgClass: "rounded-t-xl ", // Custom class
    nameClass: "text-white font-bold", // Keeping name styling consistent
  },
];

export default function Landing() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 mx-auto border-b-4 border-black">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src={require("./assets/black-logo.png")}
              className="h-5 ml-4 sm:h-14 md:h-10 lg:h-10 xl:h-15 sm:ml-8 md:ml-12 2xl:h-16 xs:h-30"
              alt="logo"
            />
          </a>
        </div>

        {/* Call Us */}
        <div>
          <p className="mr-4 text-xs font-bold sm:text-sm md:text-lg lg:text-xl sm:mr-6 md:mr-8 ">
            Call Us: 98488 98488
          </p>
        </div>
      </div>
    
      {/* Main Banner Image */}
      <div className="relative bg-center bg-cover bg-banner-image ">
        <div className="container px-5 mx-auto py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="col-span-1">
              <h1 className="text-6xl font-black">
                GRAB THE
                <br />
                YEAR END DEALS
              </h1>
              <div className="mt-4 font-bold">
                <p className="flex items-center space-x-1">
                  <span className="mr-1 bg-green-600 rounded-full">
                    <TiTick className="text-white" />
                  </span>
                  Total benefits upto: 1,89,000
                </p>
                <p className="flex items-center space-x-1">
                  <span className="mr-1 bg-green-600 rounded-full">
                    <TiTick className="text-white" />
                  </span>
                  Great Price for your old car
                </p>
                <p className="flex items-center space-x-1">
                  <span className="mr-1 bg-green-600 rounded-full">
                    <TiTick className="text-white" />
                  </span>
                  High Scrappage bonus
                </p>
                <p className="flex items-center space-x-1">
                  <span className="mr-1 bg-green-600 rounded-full">
                    <TiTick className="text-white" />
                  </span>
                  Attractive Finance Options
                </p>
                <p className="flex items-center space-x-1">
                  <span className="mr-1 bg-green-600 rounded-full">
                    <TiTick className="text-white" />
                  </span>
                  Price Hike by upto 4% in Jan'25
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Test Drive Booking Section */}
        <EnquiryForm />
      </div>

      {/* Description Section */}
      <div className="text-center mt-[420px] 2xl:mt-[120px] xl:mt-[200px]  sm:mt-[200px]] lg:mt-[350px] md:mt-[340px] ">
        <div className="text-3xl w-full md:w-[450px] font-bold mx-auto">
          <h2>DISCOVER YOUR DREAM CAR AT SABOO RKS</h2>
        </div>
        <div className="w-full md:w-[530px] mx-auto mt-4">
          <p>
            At Saboo RKS we're dedicated to providing you with the finest
            vehicles that match your style and needs. Browse our collection
            today and experience automotive excellence like never before.
          </p>
        </div>
      </div>

      {/* Car Models Section */}
      <div className="container grid grid-cols-1 gap-8 px-5 mx-auto mt-10 mb-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-[100px] lg:mt-[50px] lg:mb-[50px] md:mb-[50px] xs:mb-[150px]">
        {cars &&
          cars.map((car, index) => (
            <div
              className="flex flex-col overflow-hidden border-2 border-black rounded-2xl"
              key={index}
            >
              <a href={car.link} className="flex flex-col">
                <img
                  src={car.img}
                  alt={car.name}
                  className={`flex-1 object-cover aspect-video ${car.imgClass}`} // Apply imgClass dynamically
                />
                <div className="z-10 w-full text-center rounded-b-lg bg-primary">
                  <h1
                    className={`text-2xl py-1.5 font-semibold text-white  ${car.nameClass}`}
                  >
                    {car.name}
                  </h1>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
