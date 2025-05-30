import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/outline";
// import Metaverse from '../../screens/services/Metaverse';
// import { NavLink } from 'react-router-dom';

const navigation = {
  pages: [
    // { name: 'Home', to: '/' },
    { name: "About us", to: "/about-maruti-suzuki-dealers" },
    {
      name: "Driving School",
      to: "/maruti-suzuki-driving-school",
    },
  ],
  vehicles: [
    // { name: "Alto", to: "/maruti-alto-800-on-road-price-in-hyderabad" },
    {
      name: "ALTO-K10",
      to: "/all-new-maruti-alto-k10-on-road-price-in-hyderabad",
    },
    { name: "WAGON-R", to: "/maruti-wagon-r-on-road-price-in-hyderabad" },
    { name: "CELERIO", to: "/the-all-new-celerio" },
    { name: "SWIFT 2024", to: "/maruti-swift-car-on-road-price-in-hyderabad" },
    { name: "DZIRE", to: "/maruti-swift-dzire-on-road-price-in-hyderabad" },
    { name: "S-PRESSO", to: "/maruti-s-presso-on-road-price-in-hyderabad" },
    { name: "ERTIGA", to: "/maruti-ertiga-on-road-price-in-hyderabad" },
    {
      name: "BREZZA",
      to: "/maruti-new-brezza-on-road-price-in-hyderabad",
    },
    { name: "EECO", to: "/maruti-eeco-on-road-price-in-hyderabad" },
  ],
  cng: [
    // { name: "Alto CNG", to: "/maruti-alto-800-cng-on-road-price-in-hyderabad" },
    {
      name: "ALTO-K10 CNG",
      to: "/alto-k10-cng",
    },
    { name: "SWIFT CNG", to: "/maruti-new-swift-cng" },

    {
      name: "WAGON-R CNG",
      to: "/maruti-wagonr-cng-on-road-price-in-hyderabad",
    },
    {
      name: "CELERIO CNG",
      to: "/maruti-celerio-cng-on-road-price-in-hyderabad",
    },
    {
      name: "DZIRE CNG",
      to: "/maruti-swift-dzire-cng-on-road-price-in-hyderabad",
    },
    { name: "ERTIGA CNG", to: "/maruti-ertiga-cng-on-road-price-in-hyderabad" },
    {
      name: "S-PRESSO CNG",
      to: "/maruti-s-presso-cng-on-road-price-in-hyderabad",
    },
    {
      name: "BREZZA CNG",
      to: "/maruti-brezza-cng-on-road-price",
    },

    { name: "EECO CNG", to: "/maruti-eeco-cng-on-road-price-in-hyderabad" },
  ],
  tour: [
    { name: "TOUR H1", to: "/maruti-alto-tour-h1-on-road-price-in-hyderabad" },
    {
      name: "TOUR H3",
      to: "/maruti-wagnor-tour-h3-on-road-price-in-hyderabad",
    },
    { name: "TOUR S", to: "/maruti-dzire-tour-s-on-road-price-in-hyderabad" },
    { name: "TOUR V", to: "/maruti-eeco-tour-v-on-road-price-in-hyderabad" },
    { name: "TOUR M", to: "/maruti-ertiga-tour-m-on-road-price-in-hyderabad" },
  ],
  servicepages: [
    {
      name: "Reward Points",
      to: "/marutirewards",
    },
    {
      name: "Payments",
      to: "/payment",
    },
    {
      name: "Insurance",
      to: "/maruti-suzuki-car-insurance-renewal",
    },
    {
      name: "Finance",
      to: "/maruti-suzuki-car-finance-services",
    },
    {
      name: "Corporate",
      to: "/corporate",
    },
    {
      name: "Subscribe",
      to: "/subscribe",
    },
  ],

  outlets: [
    {
      name: "Arena",
      to: "/showrooms",
    },
    {
      name: "Truevalue",
      to: "/true-value",
    },
    {
      name: "Workshop",
      to: "/maruti-suzuki-car-service-center",
    },
    {
      name: "Driving School",
      to: "/maruti-driving-school-locations",
    },
  ],
  more: [
    {
      name: "Contact Us",
      to: "/contact-maruti-suzuki-showroom",
    },
    // {
    //   name: "Offers",
    //   to: "/maruti-suzuki-car-offers-page",
    // },
    {
      name: "CNG Cars",
      to: "/maruti-suzuki-cng-cars",
    },
    {
      name: "Tour Cars",
      to: "/maruti-suzuki-tour-cars",
    },
    {
      name: "Compare",
      to: "/compare-cars",
    },
    {
      name: "Accessories",
      to: "/maruti-genuine-accessories",
    },

    {
      name: "Gallery",
      to: "/gallery",
    },

    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Awards",
      to: "/awards",
    },

    {
      name: "Careers",
      to: "/careers",
    },
  ],
};

function MainHeader() {
  const [fixHeader, setFixHeader] = useState(false);

  function setFixedHeader() {
    if (window.scrollY >= 10) {
      setFixHeader(true);
    }
    if (window.scrollY < 10) {
      setFixHeader(false);
    }
  }

  window.addEventListener("scroll", setFixedHeader);

  return (
    <>
      {" "}
      <header className={fixHeader ? "is-sticky" : "main_header_01"}>
        <Link to="/" className="logo">
          <img
            className="w-auto h-12"
            src={require("../../assets/whitelogo.webp")}
            alt="logo"
          />
        </Link>

        <div className="navigation">
          <ul className="menu">
            {navigation.pages.map((page, index) => (
              <li className="font-normal menu-item " key={index}>
                <Link to={page.to}>{page.name}</Link>
              </li>
            ))}
            <li className="menu-item">
              <a href="/#" className="flex items-center font-normal sub-btn">
                Vehicles <ChevronDownIcon className="w-6 h-4" />
              </a>
              <ul className="sub-menu">
                {navigation.vehicles.map((vehicle, index) => (
                  <li className="sub-item" key={index}>
                    <Link to={vehicle.to}>{vehicle.name}</Link>
                  </li>
                ))}
                {/* <li className='sub-item more arena'>
                  <a href='javascript:void(0)' className='more-btn'>
                    ARENA
                  </a>
                  <ul className='more-menu'>
                    {navigation.vehicles.map((vehicle, index) => (
                      <li className='more-item' key={index}>
                        <Link to={vehicle.to}>{vehicle.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li> */}

                {/* <li className='sub-item more cng'>
                  <a href='javascript:void(0)' className='more-btn'>
                    S-CNG
                  </a>
                  <ul className='more-menu'>
                    {navigation.cng.map((page, index) => (
                      <li className='more-item' key={index}>
                        <Link to={page.to}>{page.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className='sub-item more'>
                  <a href='javascript:void(0)' className='more-btn'>
                    TOUR
                  </a>
                  <ul className='more-menu'>
                    {navigation.tour.map((page, index) => (
                      <li className='more-item' key={index}>
                        <Link to={page.to}>{page.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li> */}
              </ul>
            </li>
            <li className="menu-item">
              <a
                href="/#"
                // href='javascript:void(0)'
                className="flex items-center font-normal sub-btn"
              >
                Services <ChevronDownIcon className="w-6 h-4" />
              </a>
              <ul className="sub-menu" style={{ width: "27%" }}>
                {navigation.servicepages.map((item, index) => (
                  <li className="sub-item" key={index}>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item">
              <a href="/#" className="flex items-center font-normal sub-btn">
                Outlets <ChevronDownIcon className="w-6 h-4" />
              </a>
              <ul className="sub-menu" style={{ width: "27%" }}>
                {navigation.outlets.map((item, index) => (
                  <li className="sub-item" key={index}>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item">
              <a href="/#" className="flex items-center font-normal sub-btn">
                More <ChevronDownIcon className="w-6 h-4" />
              </a>
              <ul className="sub-menu">
                {navigation.more.map((item, index) => (
                  <li className="sub-item" key={index}>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
                <li className="sub-item">
                  <a
                    href="https://www.spatial.io/s/Saboo-Arena-Showroom-62f498277e22f400016f8be8?share=2230171934612064401"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-yellow-300 hover:text-red-600">
                      Metaverse
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to={"/maruti-suzuki-car-offers-page"}>Offers </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
