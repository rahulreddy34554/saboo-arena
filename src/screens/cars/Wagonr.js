import React, { useState, Fragment, useRef } from "react";
// import { BsCalendarCheck } from "react-icons/bs";
import { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Dialog, Transition } from "@headlessui/react";
import {
  wagonrColors,
  wagonrMileage,
  wagonrSliders,
  wagonrVariants,
} from "../../constants/wagonrData";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { CarEnquiryDown } from "../Forms/CarEnquiryDown";
import { Link } from "react-router-dom";

function Wagonr() {
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
        Maruti Suzuki WagonR 2025 Summer Discounts – Spacious and Efficient at RKS Motor!  Exclusive April 2025 Offers on Maruti Suzuki WagonR – Limited-Time Summer Deals!
        </title>
        <meta
          name="title"
          content=" Maruti Suzuki WagonR 2025 Summer Discounts – Spacious and Efficient at RKS Motor!  Exclusive April 2025 Offers on Maruti Suzuki WagonR – Limited-Time Summer Deals!"
        />
        <meta
          name="description"
          content=" Enjoy Exclusive April 2025 Summer Discounts on the Maruti Suzuki WagonR at Saboo RKS! Known for its spacious design and efficient performance, the Maruti Suzuki WagonR is now available with special April summer offers and limited-time discounts. Grab the offer before it's gone and drive home the WagonR with amazing savings this season!"
        />

        <meta
          name="keywords"
          content="Maruti WagonR Offer, April 2025 Summer Discounts on Maruti WagonR, WagonR 2025 Summer Offers, Maruti Suzuki WagonR April Deals, WagonR Summer Special Discounts, Maruti Arena WagonR April Offers, 2025 Summer Car Sale WagonR, Maruti WagonR 2025 Limited-Time Summer Offers, WagonR 2025 April Special Discounts, Maruti WagonR Summer Savings, WagonR 2025 Summer Festive Deals, Maruti Suzuki WagonR April Promotions, WagonR April 2025 Savings, Maruti WagonR 2025 Car Offers."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/maruti-wagon-r-on-road-price-in-hyderabad"
        />
        <meta
          property="og:title"
          content=" Maruti Suzuki WagonR 2025 Summer Discounts – Spacious and Efficient at RKS Motor!  Exclusive April 2025 Offers on Maruti Suzuki WagonR – Limited-Time Summer Deals!"
        />
        <meta
          property="og:description"
          content="Enjoy Exclusive April 2025 Summer Discounts on the Maruti Suzuki WagonR at Saboo RKS! Known for its spacious design and efficient performance, the Maruti Suzuki WagonR is now available with special April summer offers and limited-time discounts. Grab the offer before it's gone and drive home the WagonR with amazing savings this season!"
        />
        <meta property="og:image" content="img/og-tags/wagonr.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content=" Maruti Suzuki WagonR 2025 Summer Discounts – Spacious and Efficient at RKS Motor!  Exclusive April 2025 Offers on Maruti Suzuki WagonR – Limited-Time Summer Deals!"
        />
        <meta
          property="twitter:description"
          content="Enjoy Exclusive April 2025 Summer Discounts on the Maruti Suzuki WagonR at Saboo RKS! Known for its spacious design and efficient performance, the Maruti Suzuki WagonR is now available with special April summer offers and limited-time discounts. Grab the offer before it's gone and drive home the WagonR with amazing savings this season!"
        />
        <meta property="twitter:image" content="img/og-tags/wagonr.webp" />
      </Helmet>
      <img
        src={require("../../assets/banners/vehicles/banners-2024/Wesbite_Maruti_Suzuki_Arena_WagonR_Waltz_Edition_Saboo_RKS_Motor.webp")}
        alt=" Maruti Suzuki Arena WagonR Waltz Edition Saboo RKS Motor"
        className="hidden w-full mt-14 sm:block"
      />
      <img
        src={require("../../assets/banners/vehicles/banners-2024/Wesbite_Mobile_Maruti_Suzuki_Arena_WagonR_Waltz_Edition_Saboo_RKS_Motor.webp")}
        alt="Mobile Maruti Suzuki Arena WagonR Waltz Edition Saboo RKS Motor"
        className="w-full sm:hidden"
      />

      {/* <img
        src={WagonR}
        className="w-full max-w-full lg:mt-16"
        alt="Buy Maruti Suzuki Wagon r 2024 in Hyderabad"
      /> */}
      <CarsSlider scrollToCarEnquiry={scrollToCarEnquiry} />

      <div className="container mx-auto">
        <div className="mx-5">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="mb-4 lg:w-1/2 lg:mb-0" ref={carEnquiryRef}>
              <CarEnquiryDown title="WAGON-R" carName="WAGON-R" />
            </div>
            <div className="lg:w-1/2">
              <Colors />
            </div>
          </div>
          <div className="mt-8">
            <PriceTable />
            {/* <Table /> */}
          </div>
        </div>
      </div>

      <div>
        {" "}
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-wagon-r/new_WagonR_Brochure.webp"
          alt="brochure"
          className="w-full"
        />
      </div>
    </>
  );
}

//   const [phone, setPhone] = useState('');
//   const [model, setModel] = useState('WagonR');
//   const [loading, setLoading] = useState(false);
//   const [outlet, setOutlet] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const checkFormValidity = () => {
//     return name.trim() !== '' && phone.length === 10 && !loading;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!name || !phone) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios
//         .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     try {
//       await axios
//         .post('https://arena-backend-git-main-arenas-projects.vercel.app/onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     // Second API call
//     await axios
//       .get(
//         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
//    Our Sales consultant will contact you shortly.

//    Regards
//    RKS Motor Pvt. Ltd.
//    98488 98488
//    www.saboomaruti.in
//    www.saboonexa.in&type=1&template_id=1407168967467983613`
//       )
//       .then((res) => {
//         console.log('SMS API Response:', res.data);
//         setSubmitted(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error sending SMS:', err);
//         setSubmitted(true);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (submitted) {
//       document.getElementById('arenaCarEnq2').submit();
//     }
//   }, [submitted]);

//   const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
//   if (phone !== '' && phone.length === 10) {
//     if (!pattern.test(phone)) {
//       toast.error('Enter valid phone number', {
//         theme: 'colored',
//       });
//     }
//   }

//   return (
//     <div className='py-12 mt-12 bg-blue-800'>
//       <div className='container px-5 mx-auto space-y-5 lg:px-0'>
//         <h3 className='text-xl font-normal text-white normal-case'>
//           Get WagonR On-Road price in Hyderabad
//         </h3>
//         <form
//           id='arenaCarEnq2'
//           action={
//             pattern.test(phone) && phone.length === 10
//               ? 'https://crm.zoho.in/crm/WebToLeadForm'
//               : '#'
//           }
//           name='WebToLeads54158000083979838'
//           method={'POST'}
//           acceptCharset='UTF-8'
//         >
//           <input
//             type='text'
//             className='hidden'
//             name='xnQsjsdp'
//             value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
//           />
//           <input type='hidden' name='zc_gad' id='zc_gad' value='' />
//           <input
//             type='text'
//             className='hidden'
//             name='xmIwtLD'
//             value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='actionType'
//             value='TGVhZHM='
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='returnURL'
//             value='https://www.saboomaruti.in/thank-you-for-contact-us'
//           />
//           <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Name'
//                 id='Last_Name'
//                 name='Last Name'
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Enter your phone number'
//                 minlength='10'
//                 maxlength='10'
//                 id='Phone'
//                 name='Phone'
//                 value={phone}
//                 required
//                 minLength='10'
//                 maxLength='10'
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value.replace(/[^1-9 ]/g, '') &&
//                       e.target.value.replace(/ /g, '')
//                   )
//                 }
//               />
//               {phone.length > 7 && phone.length < 10 ? (
//                 <small className='text-red-500'>
//                   Phone number must be 10 digits
//                 </small>
//               ) : !pattern.test(phone) && phone.length === 10 ? (
//                 <small className='text-red-500'>Phone number is invalid</small>
//               ) : (
//                 ''
//               )}
//             </div>
//             <div>
//               <select
//                 id='LEADCF6'
//                 name='LEADCF6'
//                 onChange={(e) => setModel(e.target.value)}
//                 className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//                 defaultValue='WagonR'
//               >
//                 <option disabled>Select Model</option>

//                 <option value='WagonR'>WagonR</option>
//               </select>
//             </div>
//             <div>
//               <select
//                 id='LEADCF23'
//                 name='LEADCF23'
//                 onChange={(e) => {
//                   const selectedValue = e.target.value;

//                   // Check if the selected option is not "Select Outlet"
//                   if (selectedValue !== 'Select Outlet') {
//                     // Perform the backend call or set the model state here
//                     setOutlet(selectedValue);
//                   }
//                 }}
//                 defaultValue='Select Outlet'
//                 className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               >
//                 <option disabled>Select Outlet</option>
//                 <option value='Somajiguda'>Somajiguda</option>
//                 <option value='Malakpet'>Malakpet</option>
//                 <option value='Secunderabad'>Secunderabad</option>
//                 <option value='Kushaiguda'>Kushaiguda</option>
//                 <option value='Kompally'>Kompally</option>
//                 <option value='Shamirpet'>Shamirpet</option>
//                 <option value='Narsingi'>Narsingi</option>
//                 <option value='Kodangal'>Kodangal</option>
//               </select>
//             </div>
//           </div>
//           {/* <div className='flex items-center my-3 space-x-1'>
//           <input id='comments' name='comments' type='checkbox' required />
//           <label htmlFor='comments' className='font-medium text-gray-200'>
//             I Agree
//           </label>
//         </div>
//         <p className='mb-2 text-gray-200'>
//           <span className='font-semibold'>Disclaimer :</span> I agree that
//           by clicking the ‘Submit’ button below, I am explicitly soliciting
//           a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
//           Representatives on my ‘Mobile’
//         </p> */}
//           <button
//             type='submit'
//             disabled={!checkFormValidity()}
//             onClick={handleSubmit}
//             className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
//               !checkFormValidity()
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
//             }`}
//           >
//             {loading ? (
//               <div className='flex items-center justify-center'>
//                 <CgSpinner className='h-5 mr-2 text-white animate-spin' />
//                 Loading
//               </div>
//             ) : (
//               'SUBMIT'
//             )}
//           </button>
//           <div className='flex items-start py-1 '>
//             <div className='ml-2 text-sm'>
//               <label
//                 htmlFor='disclaimer'
//                 className='italic font-medium text-gray-700'
//               >
//                 <span className='font-bold text-white'>Disclaimer</span>
//                 <span className='text-white font-extralight'>
//                   : By clicking 'SUBMIT', you agree to our
//                 </span>
//                 <a
//                   href='/maruti-car-terms-and-conditions'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-2 text-sm font-bold text-red-700 '
//                 >
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

const CarsSlider = ({ scrollToCarEnquiry }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("Wagon R");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  // const [outlet, setOutlet] = useState('');
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
          // outlet: outlet,
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
      document.getElementById("swiftPopup").submit();
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
            items={wagonrSliders}
          />
        </div>

        <div className="my-auto">
          <div className="flex flex-col items-center sm:flex-row sm:items-start">
            <p
              className="mb-2 text-3xl font-light text-blue-800 sm:mb-0 sm:mr-4"
              x-intersect="$el.classList.add('focus-in-expand')"
            >
              Maruti Suzuki <span className="font-semibold">Wagon R</span>
            </p>
            <img
              className="w-12 mr-2 h-7"
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
              ₹&nbsp;5.54 - 7.32 Lakh*
            </span>
          </p>
          <div className="flex flex-wrap items-center mt-5 mb-2 text-blue-800">
            <div className="flex items-center space-x-3 mr-7">
              <img
                src={require("../../assets/icons/speedometer.png")}
                className="w-5 h-5"
                alt="speedometer"
              />
              <p className="text-sm">
                Engine <br />
                <span className="font-semibold">1197 CC</span>
              </p>
            </div>

            <div className="flex items-center mx-3 mb-1 space-x-3">
              <img
                src={require("../../assets/icons/gas-station.png")}
                className="w-5 h-5"
                alt="gas station"
              />
              <p className="text-sm">
                Mileage <br />
                <span className="font-semibold">34.05 km/kg*</span>
              </p>
            </div>

            <div className="flex items-center mb-1 space-x-3 mr-7">
              <img
                src={require("../../assets/icons/car.png")}
                className="w-5 h-5"
                alt="car"
              />
              <p className="text-sm">
                Power (kW) <br />
                <span className="font-semibold">66</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 md:mt-5 md:mb-1">
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_WagonR_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 block w-full px-4 py-2 text-sm text-center text-white bg-blue-800 border border-blue-800 rounded-full shadow-sm hover:bg-red-600 hover:border-none hover:text-white md:mb-0"
            >
              View Brochure
            </a>
            <a
              href="/compare-cars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 block w-full px-4 py-2 text-sm text-center text-blue-800 bg-white border border-blue-800 rounded-full shadow-sm hover:bg-red-600 hover:border-none hover:text-white "
            >
              Compare
            </a>
            <Link
              to="/maruti-wagonr-cng-on-road-price-in-hyderabad"
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <form
                  id="swiftPopup"
                  action={
                    pattern.test(phone) && phone.length === 10
                      ? "https://crm.zoho.in/crm/WebToLeadForm"
                      : "#"
                  }
                  name="WebToLeads54158000083979838"
                  method={"POST"}
                  acceptCharset="UTF-8"
                >
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xnQsjsdp"
                    value="c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529"
                  />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xmIwtLD"
                    value="adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="actionType"
                    value="TGVhZHM="
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="returnURL"
                    value="https://www.saboomaruti.in/thank-you-for-contact-us"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    id="ldeskuid"
                    name="ldeskuid"
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    id="LDTuvid"
                    name="LDTuvid"
                  />
                  <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                      <div className="mt-3">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-center text-gray-900"
                        >
                          Book A Test Drive / Get Offers
                        </Dialog.Title>
                        <div className="mt-2 space-y-3">
                          <div className="py-8 mt-2 space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Name
                              </label>
                              <input
                                type="text"
                                id="Last_Name"
                                name="Last Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              />
                            </div>

                            {/* <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Email
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='block w-full h-10 mt-1 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              />
                            </div> */}

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Phone
                              </label>
                              <input
                                type="text"
                                id="Phone"
                                name="Phone"
                                minLength="10"
                                maxLength="10"
                                value={phone}
                                onChange={(e) =>
                                  setPhone(
                                    e.target.value.replace(/[^1-9 ]/g, "") &&
                                      e.target.value.replace(/ /g, "")
                                  )
                                }
                                className="block w-full h-10 px-2 mt-1 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              />
                              {phone.length > 0 && phone.length < 10 ? (
                                <small className="text-red-500">
                                  Phone number must be 10 digits
                                </small>
                              ) : !pattern.test(phone) &&
                                phone.length === 10 ? (
                                <small className="text-red-500">
                                  Phone number is invalid
                                </small>
                              ) : (
                                ""
                              )}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Model
                              </label>
                              <select
                                id="LEADCF6"
                                name="LEADCF6"
                                onChange={(e) => setModel(e.target.value)}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                defaultValue="WagonR"
                              >
                                <option disabled>Select Model</option>

                                <option value="WagonR">WagonR</option>
                              </select>
                            </div>
                          </div>

                          {/* <div className='flex items-center mb-5 space-x-2'>
                            <input
                              id='comments'
                              type='checkbox'
                              className='w-4 h-4 border-gray-300 rounded '
                              required
                            />
                            <label
                              htmlFor='comments'
                              className='text-sm text-gray-700'
                            >
                              I agree to the Privacy Policy and Terms of
                              Service.
                            </label>
                          </div> */}
                          <div className="flex items-start ">
                            <div className="ml-2 text-sm">
                              <label
                                htmlFor="disclaimer"
                                className="font-medium text-gray-700"
                              >
                                <span className="font-bold text-black">
                                  Disclaimer
                                </span>
                                <span className="text-black">
                                  : By clicking 'SUBMIT', you have agreed to our
                                </span>
                                <a
                                  href="/maruti-car-terms-and-conditions"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2 text-sm text-red-600 "
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        disabled={!checkFormValidity()}
                        onClick={handleSubmit}
                        className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                          !checkFormValidity()
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        }`}
                      >
                        {loading ? (
                          <div className="flex items-center justify-center">
                            <CgSpinner className="h-5 mr-2 text-white animate-spin" />
                            Loading
                          </div>
                        ) : (
                          "SUBMIT"
                        )}
                      </button>
                      <button
                        type="button"
                        className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black  hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-500`}
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="container flex flex-col items-center py-8 mx-auto mt-16 bg-gray-100 rounded-3xl">
      {wagonrColors.map((item) => (
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
          } h-5 rounded-full w-5`}
          style={{
            background:
              "linear-gradient(61deg, rgba(228,41,34,1) 50%, rgba(15,15,15,1) 50%)",
          }}
          onClick={() => setCurrent(1)}
        ></p>
        <p
          className={`${
            current === 2 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 bg-[#7c6f5f]`}
          onClick={() => setCurrent(2)}
        ></p>
        <p
          className={`${
            current === 3 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 bg-[#b3b5b0]`}
          onClick={() => setCurrent(3)}
        ></p>
        <p
          className={`${
            current === 4 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 bg-[#656563]`}
          onClick={() => setCurrent(4)}
        ></p>
        <p
          className={`${
            current === 5 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 bg-[#68afe4]`}
          onClick={() => setCurrent(5)}
        ></p>
        <p
          className={`${
            current === 6 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 bg-[#bd0a10]`}
          onClick={() => setCurrent(6)}
        ></p>
        <p
          className={`${
            current === 7 ? "animate-bounce" : ""
          } h-5 rounded-full w-5`}
          style={{
            background: "linear-gradient(228deg, #212529 50%, #6c757d 50%)",
          }}
          onClick={() => setCurrent(7)}
        ></p>

        <p
          className={`${
            current === 8 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 border border-gray-300 bg-[#FFF]`}
          onClick={() => setCurrent(8)}
        ></p>
        <p
          className={`${
            current === 9 ? "animate-bounce" : ""
          } h-5 rounded-full w-5 border border-black bg-[#080808]`}
          onClick={() => setCurrent(9)}
        ></p>
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
          {wagonrVariants?.map((item) => (
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
          {wagonrMileage?.map((item) => (
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

export default Wagonr;
