import React, { useState, Fragment, useRef } from "react";
import { useEffect } from "react";
// import { BsCalendarCheck } from "react-icons/bs";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import {
  celerioColors,
  celerioMileage,
  celerioSliders,
  celerioVariants,
} from "../../constants/celerioData";

import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";

import { CarEnquiryDown } from "../Forms/CarEnquiryDown";
import { Link } from "react-router-dom";

function Celerio() {
  const carEnquiryRef = useRef(null);
  const scrollToCarEnquiry = () => {
    if (carEnquiryRef.current) {
      carEnquiryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <Helmet>
        <title>
        Maruti Celerio 2025 Summer Offers – On-Road Price, Images, Colors & Reviews in Hyderabad at Saboo Maruti! Exclusive April Discounts on Maruti Celerio – Limited-Time Summer Deals!
        </title>
        <meta
          name="title"
          content=" Maruti Celerio 2025 Summer Offers – On-Road Price, Images, Colors & Reviews in Hyderabad at Saboo Maruti! Exclusive April Discounts on Maruti Celerio – Limited-Time Summer Deals!"
        />
        <meta
          name="description"
          content="Get the Maruti Suzuki Celerio at an unbeatable price this April! 🌞 Enjoy a stylish design, advanced features, and a smart driving experience with the 2025 Maruti Suzuki Celerio. Take advantage of exclusive April summer offers and limited-time discounts. Don't miss these incredible savings—book now and drive home your dream car this season!"
        />
        <meta
          name="keywords"
          content="Maruti Celerio 2025 Offer, April Summer Offers on Maruti Celerio, Maruti Suzuki Celerio Deals, Celerio Smart Hatchback Summer Discounts, 2025 Year Sale Celerio, Maruti Celerio Summer Specials, Celerio 2025 Special Offers, Maruti Celerio April Deals, Celerio Limited-Time Summer Discounts, Maruti Celerio 2025 Summer Savings, Celerio On Road Price April 2025, Exclusive April 2025 Celerio Offers, Maruti Suzuki Celerio Best Summer Deals, Celerio April 2025 Price and Offers, 2025 Celerio Summer Savings."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/the-all-new-celerio"
        />
        <meta
          property="og:title"
          content=" Maruti Celerio 2025 Summer Offers – On-Road Price, Images, Colors & Reviews in Hyderabad at Saboo Maruti! Exclusive April Discounts on Maruti Celerio – Limited-Time Summer Deals!"
        />
        <meta
          property="og:description"
          content="Get the Maruti Suzuki Celerio at an unbeatable price this April! 🌞 Enjoy a stylish design, advanced features, and a smart driving experience with the 2025 Maruti Suzuki Celerio. Take advantage of exclusive April summer offers and limited-time discounts. Don't miss these incredible savings—book now and drive home your dream car this season!"
        />
        <meta property="og:image" content="img/og-tags/celerio.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content=" Maruti Celerio 2025 Summer Offers – On-Road Price, Images, Colors & Reviews in Hyderabad at Saboo Maruti! Exclusive April Discounts on Maruti Celerio – Limited-Time Summer Deals | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Get the Maruti Suzuki Celerio at an unbeatable price this April! 🌞 Enjoy a stylish design, advanced features, and a smart driving experience with the 2025 Maruti Suzuki Celerio. Take advantage of exclusive April summer offers and limited-time discounts. Don't miss these incredible savings—book now and drive home your dream car this season!"
        />
        <meta property="twitter:image" content="img/og-tags/celerio.webp" />
      </Helmet>
      <img
        src={require("../../assets/banners/Website_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp")}
        className="w-full max-w-full lg:mt-16"
        alt="Buy Maruti Suzuki Celerio 2025 in Hyderabad"
      />
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />
      <div className="container mx-auto ">
        <div className="mx-5 ">
          <div className="flex flex-col lg:flex-row lg:space-x-4 rounded-3xl">
            <div className="mb-4 lg:w-1/2 lg:mb-0" ref={carEnquiryRef}>
              <CarEnquiryDown title="CELERIO" carName="CELERIO" />
            </div>
            <div className="lg:w-1/2">
              <Colors />
            </div>
          </div>
          {/* Table and PriceTable */}
          <div className="mt-8">
            <PriceTable />
            {/* <Table /> */}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-new-celerio/New_Celerio_Product_Brand_Brochure.webp"
          alt="brochure"
          className="w-full"
        />
      </div>
    </>
  );
}

const CarsSlider = ({ scrollToCarEnquiry }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("Celerio");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const cancelButtonRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const checkFormValidity = () => {
    return (
      name.trim() !== "" &&
      phone.length === 10 &&
      model.trim() !== "" &&
      !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios
        .post("https://saboogroups.com/admin/api/arena-onRoadPrice", {
          name: name,
          phone: phone,

          model: model,
        })
        .then((res) => {
          toast.success("Enquiry sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    try {
      await axios
        .post(
          "https://arena-backend-git-main-arenas-projects.vercel.app/onRoadPrice",
          {
            name: name,
            phone: phone,
            // email: email,
            model: model,
            // outlet: outlet,
          }
        )
        .then((res) => {
          toast.success("Enquiry sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    // Second API call
    await axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
   Our Sales consultant will contact you shortly.
   
   Regards
   RKS Motor Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        setSubmitted(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submitted) {
      document.getElementById("celerioPopup").submit();
    }
  }, [submitted]);

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <>
      <div className="container grid grid-cols-1 gap-5 px-5 mx-auto my-8 sm:grid-cols-2 sm:px-0">
        <div>
          <ImageGallery
            lazyLoad={true}
            autoPlay={true}
            thumbnailPosition="left"
            showPlayButton={false}
            items={celerioSliders}
          />
        </div>

        <div className="my-auto">
          <div className="flex flex-col items-center sm:flex-row sm:items-start">
            <p
              className="mb-2 text-3xl font-light text-blue-800 sm:mb-0 sm:mr-4"
              x-intersect="$el.classList.add('focus-in-expand')"
            >
              Maruti Suzuki <span className="font-semibold">Celerio</span>
            </p>
            <img
              className="mr-2 shadow-2xl w-14 h-7"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/AGS.webp"
              alt=""
            />
            <img
              className="mr-2 shadow-2xl w-14 h-7"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/S-CNG_mimimum+black.webp"
              alt=""
            />
            <img
              className="mr-2 shadow-2xl w-14 h-7"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/icons/K-SERIES.webp"
              alt=""
            />
          </div>
          <p className="text-lg font-light text-blue-800">
            Ex-Showroom Price
            <span className="ml-3 text-xl text-red-600">
              ₹&nbsp;5.36 - 7.04 Lakh*
            </span>
          </p>
          <div className="flex flex-wrap items-center mt-5 mb-2 text-blue-800">
            <div className="flex items-center space-x-3 mr-7 ">
              <img
                src={require("../../assets/icons/speedometer.png")}
                className="w-5 h-5"
                alt="speedometer"
              />
              <p className="text-sm">
                Engine <br />
                <span className="font-semibold">998 CC</span>
              </p>
            </div>

            <div className="flex items-center mx-3 space-x-3">
              <img
                src={require("../../assets/icons/gas-station.png")}
                className="w-5 h-5"
                alt="gas-station"
              />
              <p className="text-sm">
                Mileage <br />
                <span className="font-semibold">34.43 km/kg*</span>
              </p>
            </div>

            <div className="flex items-center space-x-3 mr-7">
              <img
                src={require("../../assets/icons/car.png")}
                className="w-5 h-5"
                alt="car-icon"
              />
              <p className="text-sm">
                Power (kW) <br />
                <span className="font-semibold">49</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 md:mt-5 md:mb-1 ">
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_All_New_Celerio.pdf"
              //https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_All_New_Celerio.pdf
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 block w-full px-4 py-2 text-sm text-center text-white bg-blue-800 border border-blue-800 rounded-full shadow-sm hover:bg-red-600 hover:border-none hover:text-white md:mb-0"
            >
              View Brochure
            </a>
            <Link
              to="/compare-cars"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 block w-full px-4 py-2 text-sm bg-white hover:bg-red-600 border border-blue-800 text-blue-800 rounded-full shadow-sm hover:border-none hover:text-white text-center "
            >
              Compare
            </Link>
            <Link
              to="/maruti-celerio-cng-on-road-price-in-hyderabad"
              className="flex-1 block w-full px-4 py-2 text-sm text-center text-blue-800 bg-white border border-blue-800 rounded-full shadow-sm hover:bg-green-600 hover:border-none hover:text-white"
            >
              Get CNG
            </Link>
            {/* <button
              className="px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm"
              onClick={() => setOpen(true)}
            >
              Book a Test Drive
            </button> */}
          </div>
          <p className="w-full h-px my-6 bg-gray-300"></p>
          {/* <p className="flex items-center">
          <BsCalendarCheck className="mr-1" />
          Delivery from Saboo RKS, 7-30 days
        </p> */}
          <p
            className="mt-2 mb-5 text-xl text-blue-800"
            x-intersect="$el.classList.add('fade-in-left')"
          >
            Our professional and well-trained staff is ready to assist you
          </p>
        </div>
      </div>
    </>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="mt-8 bg-gray-100 border rounded-3xl">
      {" "}
      <div className="container flex flex-col items-center py-12 mx-auto mt-12">
        {celerioColors.map((item) => (
          <img
            key={item.id}
            src={item.img}
            className={item.id === current ? "mx-auto sm:h-80" : "hidden"}
            alt={item.id}
          />
        ))}
        <div className="flex items-center justify-center space-x-3 space-y-1 sm:space-y-0">
          <p
            className={`${
              current === 1 ? "animate-bounce" : ""
            } h-5 rounded-full bg-[#6A717B] w-5`}
            onClick={() => setCurrent(1)}
          ></p>
          <p
            className={
              current === 2
                ? "h-5 rounded-full w-5 bg-[#b3b5b0] animate-bounce"
                : "h-5 rounded-full w-5 bg-[#b3b5b0]"
            }
            onClick={() => setCurrent(2)}
          ></p>
          <p
            className={
              current === 3
                ? "h-5 rounded-full w-5 bg-[#FFFFFF] animate-bounce"
                : "h-5 rounded-full w-5 bg-[#FFFFFF]"
            }
            onClick={() => setCurrent(3)}
          ></p>
          <p
            className={
              current === 4
                ? "h-5 rounded-full w-5 bg-[#2a2967] animate-bounce"
                : "h-5 rounded-full w-5 bg-[#2a2967]"
            }
            onClick={() => setCurrent(4)}
          ></p>
          <p
            className={
              current === 5
                ? "h-5 rounded-full w-5 bg-[#d21314] animate-bounce"
                : "h-5 rounded-full w-5 bg-[#d21314]"
            }
            onClick={() => setCurrent(5)}
          ></p>
          <p
            className={
              current === 6
                ? "h-5 rounded-full w-5 bg-[#0F0F11] animate-bounce"
                : "h-5 rounded-full w-5 bg-[#0F0F11]"
            }
            onClick={() => setCurrent(6)}
          ></p>
        </div>
      </div>
    </div>
  );
};

const PriceTable = () => {
  return (
    <div className="overflow-scroll shadow-sm md:overflow-hidden rounded-2xl">
      <table className="w-full bg-white border border-collapse rounded-lg shadow-md table-auto min-w-max">
        <thead className="text-white bg-blue-800">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Variants
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Transmission
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {celerioVariants?.map((item) => (
            <tr
              key={item.id}
              className="uppercase border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="px-4 py-3">{item.title}</td>
              <td className="px-4 py-3">{item.transmission}</td>
              <td className="px-4 py-3">&nbsp;{item.price}</td>
            </tr>
          ))}
        </tbody>
        <thead className="text-white bg-blue-800">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              FUEL TYPE
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Transmission
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {celerioMileage?.map((item) => (
            <tr
              key={item.id}
              className="uppercase border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="px-4 py-3">{item.fueltype}</td>
              <td className="px-4 py-3">{item.transmission}</td>
              <td className="px-4 py-3">
                {item.mileage} <sup>*</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="overflow-scroll md:overflow-hidden">
        <p className="container w-full pb-6 mx-auto my-auto mt-2 text-sm italic text-left text-red-500 font-extralight">
          <span className="font-semibold">Disclaimer:</span> The prices and
          mileage information provided in the table above are indicative and
          subject to change. The actual prices and mileage of Maruti Suzuki
          vehicles may vary based on factors such as location, dealer, variant,
          and other applicable conditions. For the most accurate and up-to-date
          information, please contact your nearest Saboo RKS Motor Maruti Suzuki
          dealership.
        </p>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="overflow-scroll md:overflow-hidden">
      <table className="container w-full mx-auto my-8 text-sm text-left uppercase border border-collapse table-auto border-slate-400">
        <thead className="text-white bg-blue-800">
          <tr>
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Fuel Type
            </th>
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Variant
            </th>
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Mileage
            </th>
          </tr>
        </thead>
        <tbody>
          {celerioMileage?.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300 px-3 py-1.5">
                {item.fueltype}
              </td>
              <td className="border border-slate-300 px-3 py-1.5">
                {item.transmission}
              </td>
              <td className="border border-slate-300 px-3 py-1.5">
                {item.mileage} <sup>*</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="container w-full mx-auto my-auto text-sm italic text-left text-red-500 font-extralight">
        <span className="font-semibold">Disclaimer:</span> The prices and
        mileage information provided in the table above are indicative and
        subject to change. The actual prices and mileage of Maruti Suzuki
        vehicles may vary based on factors such as location, dealer, variant,
        and other applicable conditions. For the most accurate and up-to-date
        information, please contact your nearest Saboo RKS Motor Maruti Suzuki
        dealership.
      </p>
    </div>
  );
};
export default Celerio;
