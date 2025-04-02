import React, { useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import Header from "../../components/header/Header";
import TourSLogo from "../../assets/banners/tour-s.png";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { Helmet } from "react-helmet";
import { CarEnquiryDown } from "../Forms/CarEnquiryDown";

function TourS() {
  const [price, setPrice] = useState("6,56,000");

  return (
    <>
      <Helmet>
        <title>
        Maruti Suzuki Dzire Tour S Commercial 2025 Offers – Starting at ₹6.56 Lakh at RKS Motor!
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Dzire Tour S Commercial 2025 Offers – Starting at ₹6.56 Lakh at RKS Motor!"
        />
        <meta
          name="description"
          content="Explore the Maruti Suzuki Dzire Tour S Commercial, available in both CNG and petrol engine options. Discover the exceptional mileage, features, specifications, performance, and both interior and exterior details of the Tour S Commercial at Saboo Maruti Suzuki. Visit your nearest Saboo Maruti Suzuki showroom for exclusive offers and best deals on the Dzire Tour S Commercial today!"
        />
        <meta
          name="keywords"
          content="Dzire  Tour S  on road price, dzire offers, dzire price, dzire service center, maruti dzire on road price, maruti dzire offers, maruti dzire price, maruti dzire service center, maruti dzire service center near me, maruti suzuki dzire price, maruti suzuki dzire on road price, maruti suzuki dzire offers,maruti suzuki dzire, dzire on road price, dzire 2025 offers, dzire 2025 price, dzire on road price in hyderabad, breza offers in hyderabad, dzire price in hyderabad, maruti dzire 2025 price, maruti dzire 2025 on road price, maruti dzire 2025 offers, maruti dzire 2025 price in hyderabad, maruti dzire 2025 on road price in hyderabad, Maruti Suzuki dzire 2025 price, Maruti Suzuki dzire 2025 on road price, maruti suzuki dzire 2025 offers,  vitara dzire offers, Vitara dzire price, vitara dzire on road price, vitara dzire 2025 offers, vitara dzire 2025 price, vitara dzire 2025 on road price, vitara dzire 2025 offers."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/tour/maruti-dzire-tour-s-on-road-price-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Dzire Tour S Commercial 2025 Offers – Starting at ₹6.56 Lakh at RKS Motor!"
        />
        <meta
          property="og:description"
          content="Explore the Maruti Suzuki Dzire Tour S Commercial, available in both CNG and petrol engine options. Discover the exceptional mileage, features, specifications, performance, and both interior and exterior details of the Tour S Commercial at Saboo Maruti Suzuki. Visit your nearest Saboo Maruti Suzuki showroom for exclusive offers and best deals on the Dzire Tour S Commercial today!"
        />
        <meta property="og:image" content="../img/og-tags/alto.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Dzire Tour S Commercial 2025 Offers – Starting at ₹6.56 Lakh at RKS Motor!"
        />
        <meta
          property="twitter:description"
          content="Dzire  Tour S  on road price, dzire offers, dzire price, dzire service center, maruti dzire on road price, maruti dzire offers, maruti dzire price, maruti dzire service center, maruti dzire service center near me, maruti suzuki dzire price, maruti suzuki dzire on road price, maruti suzuki dzire offers,maruti suzuki dzire, dzire on road price, dzire 2025 offers, dzire 2025 price, dzire on road price in hyderabad, breza offers in hyderabad, dzire price in hyderabad, maruti dzire 2025 price, maruti dzire 2025 on road price, maruti dzire 2025 offers, maruti dzire 2025 price in hyderabad, maruti dzire 2025 on road price in hyderabad, Maruti Suzuki dzire 2025 price, Maruti Suzuki dzire 2025 on road price, maruti suzuki dzire 2025 offers,  vitara dzire offers, Vitara dzire price, vitara dzire on road price, vitara dzire 2025 offers, vitara dzire 2025 price, vitara dzire 2025 on road price, vitara dzire 2025 offers."
        />
        <meta property="twitter:image" content="../img/og-tags/alto.webp" />
      </Helmet>
      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/dzire-banner.jpg"
        className="w-full max-w-full lg:mt-16"
        alt="1"
        id="overview"
      />

      <div className="container flex flex-wrap items-center justify-between p-5 mx-auto lg:px-0">
        <img
          className="flex flex-wrap items-center object-left"
          src={TourSLogo}
          alt="vehicle_banner"
        />{" "}
        <div>
          <div className="flex justify-start space-x-5">
            <div>
              <p>Petrol</p>
              <p>
                22.61 &nbsp; <span className="text-red-600">km/l*</span>
              </p>
            </div>
            <div>
              <p>CNG</p>
              <p>
                31.12 &nbsp; <span className="text-red-600">km/kg*</span>
              </p>
            </div>
          </div>
          <p className="text-xs">
            *As certified by Test Agency Under Rule 115 (G) of CMVR 1989
          </p>
        </div>
        <div className="p-5">
          <p className="font-bold">
            ₹ {price} <span className="text-red-600">*</span>
          </p>
          <p>Select Car Variant</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="6,56,000">TOUR S STD (O) Petrol</option>
            <option value="7,51,000">TOUR S STD (O) CNG</option>
          </select>
        </div>
      </div>
      <div className="container p-5 mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="col-span-2">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Celerio_performance_txt.png"
              className="object-scale-down"
              alt="1"
            />
            <p className="p-2">
              Tour S is driven by performance. Every time you get behind the
              wheel, you drive into a completely new world where elegance meets
              efficiency in a seamless partnership.
            </p>
            <br></br>

            <h4>
              <strong>K-Series Petrol Engine VVT</strong>
            </h4>
            <p>
              The smooth acceleration, low emission and superb fuel efficiency
              makes it truly special.
            </p>
            <p>
              {" "}
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/safety-txt.png"
                className="object-scale-down p-5"
                alt="1"
              />
            </p>
            <p className="p-2">
              Safety is of paramount importance. That’s why the Driver Airbag
              you can be assured about the well-being of you and your loved
              ones.
            </p>
            <ul className="p-2 list-disc">
              <li>ABD with EBD</li>
              <li>Driver Airbag</li>
            </ul>
          </div>
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Dzire_car.png"
            className="w-full max-w-full"
            alt="1"
          />
        </div>
      </div>
      {/* <TourSCarEnquiry /> */}
      <CarEnquiryDown title="TOUR-S" carName="TOUR-S" id="enquiry" />
      <div className="container mx-auto" id="specs">
        <Accordian />
      </div>
    </>
  );
}

const Accordian = () => {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-start">
          <Tab.List className="p-5 space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-blue-800 text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-blue-800 text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className="flex items-center justify-between bg-gray-100">
                <p className="flex-1 px-5 py-3 border">Features</p>
                <p className="flex-1 px-5 py-3 text-center border">PETROL</p>
                <p className="flex-1 px-5 py-3 text-center border">CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front Grill</p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Black
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Black
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Front Fog Lamp Bezel Ornament
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Black
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Black
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Body Coloured Bumper
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Standard
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Standard
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Internally Adjustable ORVMs
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Front Door Trim Pocket
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Glove Box</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Folding Assist Grips (Co-Driver & Rear Seat Both
                          Sides)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Sunvisor (Driver & Co - Driver)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Ticket Holder (Driver Side)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Remote Fuel Lid Opener
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        STEERING & SEAT
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Power Steering (EPS)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Tiltable Steering Wheel column
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Dual Horn</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          AC & Heater (Manual)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Front Seat Head Restraint (Adjustable Type)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear Seat</p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Integrated
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Integrated
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        SAFETY AND SECURITY
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Luggage Lamps
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Driver Airbag
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Passenger Airbag
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Optional
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          Optional
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Rear 3 Point Seat Belts + Center 2 Point
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Anti-lock Braking System
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Reverse Parking Sensors
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Security Alarm System (Door + Hood Sensing + Trunk)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Speed Sensitive Automatic Door Lock
                        </p>
                        <p className="flex-1 px-5 text-center border py-">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Immobilizer</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Seat Belt Reminder (Driver + Co. Driver)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Light-on Reminder, Buzzer
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Key-on Reminder, Buzzer
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Door Close Warning Lamp
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Fuel Consumption (Instantaneous)/(Average)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Trip/Odometer
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Low Fuel Warning Lamp
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Front Accessory Socket
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Cup Holder in fron console (i-Cup Holder)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Speed Limiting Function
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          80 km/hr
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">
                          80 km/hr
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        AUDIO, HVAC, DOOR
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Antenna</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Manual AC</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Front (Driver, Co Driver) Electric Power Window
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Power Window Lock (Driver)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Fabric Accent Door Trim (Front and Reat Door)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Driver Seat Power Window Auto Switch (Auto Down Only)
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Central Locking
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Remote Keyless Entry
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Remote Back Door Opener
                        </p>
                        <p className="flex-1 px-5 py-3 text-center border">✔</p>
                        <p className="flex-1 px-5 py-3 text-center border ">
                          ✔
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className="flex items-center justify-between bg-gray-100">
                <p className="flex-1 px-5 py-3 border">Specifications</p>
                <p className="flex-1 px-5 py-3 border">PETROL</p>
                <p className="flex-1 px-5 py-3 border">CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Length
                        </p>
                        <p className="flex-1 px-5 py-3 border">3995 mm</p>
                        <p className="flex-1 px-5 py-3 border">3995 mm</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Width
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          1695 mm (Without side molding)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          1695 mm (Without side molding)
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Height
                        </p>
                        <p className="flex-1 px-5 py-3 border">1555 mm</p>
                        <p className="flex-1 px-5 py-3 border">1675 mm</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Wheelbase</p>
                        <p className="flex-1 px-5 py-3 border">2430 mm</p>
                        <p className="flex-1 px-5 py-3 border">2430 mm</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Track Front (mm)
                        </p>
                        <p className="flex-1 px-5 py-3 border">1485 mm</p>
                        <p className="flex-1 px-5 py-3 border">1484 mm</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Track Rear (mm)
                        </p>
                        <p className="flex-1 px-5 py-3 border">1495 mm</p>
                        <p className="flex-1 px-5 py-3 border">1495 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Kerb Weight</p>
                        <p className="flex-1 px-5 py-3 border">945 kg</p>
                        <p className="flex-1 px-5 py-3 border">1045 kg</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Gross Vehicle Weight
                        </p>
                        <p className="flex-1 px-5 py-3 border">1415 kg</p>
                        <p className="flex-1 px-5 py-3 border">1480 kg</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Engine Type</p>
                        <p className="flex-1 px-5 py-3 border">F8D</p>
                        <p className="flex-1 px-5 py-3 border">F8D</p>
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Number of Cylinders
                        </p>
                        <p className="flex-1 px-5 py-3 border">3</p>
                        <p className="flex-1 px-5 py-3 border">3</p>
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          No. of Valves
                        </p>
                        <p className="flex-1 px-5 py-3 border">16</p>
                        <p className="flex-1 px-5 py-3 border">16</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Bore X Stroke
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          73 mm x 71.5 mm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          73 mm x 71.5 mm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Compression Ratio
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          (11.0 ± 0.4):1
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          (11.0 ± 0.4):1
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Emission</p>
                        <p className="flex-1 px-5 py-3 border">BS6</p>
                        <p className="flex-1 px-5 py-3 border">BS6</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Maximum Power
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          61 kW @ 6000 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          52.5 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Maximum Torque (Petrol)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Maximum Torque (CNG)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Air Charging System
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          113 Nm @4200 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Fuel Distribution
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          Multi Point Injection
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          Multi Point Injection
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        Suspension System
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front</p>
                        <p className="flex-1 px-5 py-3 border">
                          MacPherson strut
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          MacPherson strut
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear</p>
                        <p className="flex-1 px-5 py-3 border">Torison Beam</p>
                        <p className="flex-1 px-5 py-3 border">Torison Beam</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Seating Capacity
                        </p>
                        <p className="flex-1 px-5 py-3 border">5</p>
                        <p className="flex-1 px-5 py-3 border">5</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Fuel Tank Capacity
                        </p>
                        <p className="flex-1 px-5 py-3 border ">42 L</p>
                        <p className="flex-1 px-5 py-3 border">55 L</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Body Type</p>
                        <p className="flex-1 px-5 py-3 border">Notch Back</p>
                        <p className="flex-1 px-5 py-3 border">Notch Back</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        Brakes/Tyre Size
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Tyre Size</p>
                        <p className="flex-1 px-5 py-3 border">165/80 R14</p>
                        <p className="flex-1 px-5 py-3 border">145/80 R14</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className="px-5 text-xs">
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <br></br>
    </>
  );
};

export default TourS;
