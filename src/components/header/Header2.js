// import React from 'react';
// import { LuBedSingle } from 'react-icons/lu';
// import { LuBedDouble } from 'react-icons/lu';
// import { IoBed } from 'react-icons/io5';
// import { IoBedSharp } from 'react-icons/io5';
// import { MdPrivacyTip } from 'react-icons/md';
// import { PiPhoneBold } from 'react-icons/pi';
// import { MdSecurity } from 'react-icons/md';
// import { TbCarSuv } from 'react-icons/tb';
// import { FaCarSide } from 'react-icons/fa';
// import { PiCarProfileFill } from 'react-icons/pi';
// import { FaCarAlt } from 'react-icons/fa';
// import { FaCar } from 'react-icons/fa';
// import { LiaCarAltSolid } from 'react-icons/lia';
// import { LiaCarSolid } from 'react-icons/lia';
// import { PiCarFill } from 'react-icons/pi';
// import { RiCarFill } from 'react-icons/ri';

// const Header2 = () => {
//   const [open, setOpen] = React.useState(false);
//   const [flyer, setFlyer] = React.useState(false);
//   const [flyerTwo, setFlyerTwo] = React.useState(false);
//   // const [flyerThree, setFlyerThree] = React.useState(false);

//   return (
//     <>
//       {/* This example requires Tailwind CSS v2.0+ */}

//       <div className='sticky top-0 bg-white shadow-md z-10'>
//         <div className='max-w-7xl mx-auto px-4 sm:px-6'>
//           <div className='flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10'>
//             <div className='flex justify-start lg:w-0 lg:flex-1'>
//               <a href='/'>
//                 <span className='sr-only'>Workflow</span>
//                 <img
//                   className='h-10 w-auto sm:h-16'
//                   src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/logo/RKS+Logo+13+version.png'
//                   alt=''
//                 />
//               </a>
//             </div>
//             <div className='-mr-2 -my-2 md:hidden'>
//               <button
//                 type='button'
//                 className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#293e91]'
//                 onClick={() => setOpen(!open)}
//               >
//                 <span className='sr-only'>Open menu</span>
//                 {/* Heroicon name: outline/menu */}
//                 <svg
//                   className='h-6 w-6'
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   stroke='currentColor'
//                   aria-hidden='true'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth={2}
//                     d='M4 6h16M4 12h16M4 18h16'
//                   />
//                 </svg>
//               </button>
//             </div>
//             <nav className='hidden md:flex space-x-5'>
//               <div className='relative'>
//                 {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
//                 <button
//                   type='button'
//                   className="
//                    group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium  hover:text-[#293e91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#293e91] pb-8'
//                   "
//                   onClick={() => {
//                     setFlyer(!flyer);
//                     setFlyerTwo(false);
//                   }}
//                 >
//                   <span>Cars</span>
//                   {/*
//               Heroicon name: solid/chevron-down

//               Item active: "text-gray-600", Item inactive: "text-gray-400"
//             */}
//                   <svg
//                     className={
//                       flyer === true
//                         ? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
//                         : 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
//                     }
//                     xmlns='http://www.w3.org/2000/svg'
//                     viewBox='0 0 20 20'
//                     fill='currentColor'
//                     aria-hidden='true'
//                   >
//                     <path
//                       fillRule='evenodd'
//                       d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                 </button>
//                 {/*
//             'Solutions' flyout menu, show/hide based on flyout menu state.

//             Entering: "transition ease-out duration-200"
//               From: "opacity-0 translate-y-1"
//               To: "opacity-100 translate-y-0"
//             Leaving: "transition ease-in duration-150"
//               From: "opacity-100 translate-y-0"
//               To: "opacity-0 translate-y-1"
//           */}

//                 <div
//                   onMouseLeave={() => setFlyer(false)}
//                   className={
//                     flyer
//                       ? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
//                       : ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
//                   }
//                 >
//                   <div className='max-w-3xl mx-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                     {/* layout */}
//                     <div className='relative gap-1 bg-white px-4 py-5 sm:gap-8 sm:p-8 flex border'>
//                       {/* column 1 */}
//                       <div className='border'>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                         >
//                           {/* Heroicon name: outline/chart-bar */}
//                           <FaCarAlt class='h-6 w-6 text-[#293e91]' />
//                           <div className='ml-4'>
//                             <p className='text-base font-medium text-gray-900'>
//                               Arena Cars
//                             </p>
//                             <p className='mt-1 text-xs text-gray-500'>
//                               Get a better understanding of where your traffic
//                               is coming from.
//                             </p>
//                           </div>
//                         </a>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                         >
//                           <FaCar class='h-6 w-6 text-[#293e91]' />
//                           <div className='ml-4'>
//                             <p className='text-base font-medium text-gray-900'>
//                               Alto K10
//                             </p>
//                             <p className='mt-1 text-xs text-gray-500'>
//                               Speak directly to your customers in a more
//                               meaningful way.
//                             </p>
//                           </div>
//                         </a>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                         >
//                           <FaCarSide class='h-6 w-6 text-[#293e91]' />
//                           <div className='ml-4'>
//                             <p className='text-base font-medium text-gray-900'>
//                               Wagon R
//                             </p>
//                             <p className='mt-1 text-xs text-gray-500'>
//                               Your customers' data will be safe and secure.
//                             </p>
//                           </div>
//                         </a>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                         >
//                           <FaCarSide class='h-6 w-6 text-[#293e91]' />

//                           <div className='ml-4'>
//                             <p className='text-base font-medium text-gray-900'>
//                               Swift
//                             </p>
//                             <p className='mt-1 text-xs text-gray-500'>
//                               Connect with third-party tools that you're already
//                               using.
//                             </p>
//                           </div>
//                         </a>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                         >
//                           <FaCarSide class='h-6 w-6 text-[#293e91]' />
//                           <div className='ml-4'>
//                             <p className='text-base font-medium text-gray-900'>
//                               Celerio
//                             </p>
//                             <p className='mt-1 text-xs text-gray-500'>
//                               Build strategic funnels that will drive your
//                               customers to convert
//                             </p>
//                           </div>
//                         </a>
//                       </div>
//                       {/* column 1 */}
//                     </div>

//                     <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
//                       <div className='flow-root'>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
//                         >
//                           {/* Heroicon name: outline/play */}
//                           <svg
//                             className='flex-shrink-0 h-6 w-6 text-gray-400'
//                             xmlns='http://www.w3.org/2000/svg'
//                             fill='none'
//                             viewBox='0 0 24 24'
//                             stroke='currentColor'
//                             aria-hidden='true'
//                           >
//                             <path
//                               strokeLinecap='round'
//                               strokeLinejoin='round'
//                               strokeWidth={2}
//                               d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
//                             />
//                             <path
//                               strokeLinecap='round'
//                               strokeLinejoin='round'
//                               strokeWidth={2}
//                               d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                             />
//                           </svg>
//                           <span className='ml-3'>Book a Demo</span>
//                         </a>
//                       </div>
//                       <div className='flow-root'>
//                         <a
//                           href='/'
//                           className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
//                         >
//                           {/* Heroicon name: outline/phone */}
//                           <svg
//                             className='flex-shrink-0 h-6 w-6 text-gray-400'
//                             xmlns='http://www.w3.org/2000/svg'
//                             fill='none'
//                             viewBox='0 0 24 24'
//                             stroke='currentColor'
//                             aria-hidden='true'
//                           >
//                             <path
//                               strokeLinecap='round'
//                               strokeLinejoin='round'
//                               strokeWidth={2}
//                               d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
//                             />
//                           </svg>
//                           <span className='ml-3'>Contact Us</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a
//                 href='/'
//                 className='text-base font-medium text-gray-500 hover:text-[#293e91]'
//               >
//                 Driving School
//               </a>
//               <a
//                 href='/'
//                 className='text-base font-medium text-gray-500 hover:text-[#293e91]'
//               >
//                 Gallery
//               </a>
//               <div className='relative'>
//                 {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
//                 <button
//                   type='button'
//                   className='group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-[#293e91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#293e91]'
//                   onClick={() => {
//                     setFlyerTwo(!flyerTwo);
//                     setFlyer(false);
//                   }}
//                 >
//                   <span>More</span>
//                   {/*
//               Heroicon name: solid/chevron-down

//               Item active: "text-gray-600", Item inactive: "text-gray-400"
//             */}
//                   <svg
//                     className={
//                       flyerTwo === true
//                         ? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
//                         : 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
//                     }
//                     xmlns='http://www.w3.org/2000/svg'
//                     viewBox='0 0 20 20'
//                     fill='currentColor'
//                     aria-hidden='true'
//                   >
//                     <path
//                       fillRule='evenodd'
//                       d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                 </button>
//                 {/*
//             'More' flyout menu, show/hide based on flyout menu state.

//             Entering: "transition ease-out duration-200"
//               From: "opacity-0 translate-y-1"
//               To: "opacity-100 translate-y-0"
//             Leaving: "transition ease-in duration-150"
//               From: "opacity-100 translate-y-0"
//               To: "opacity-0 translate-y-1"
//           */}{' '}
//                 <div
//                   onMouseLeave={() => setFlyerTwo(false)}
//                   className={
//                     flyerTwo
//                       ? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
//                       : ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
//                   }
//                 >
//                   <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                     <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
//                       <a
//                         href='/'
//                         className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                       >
//                         <PiPhoneBold class='h-8 w-8 text-[#293e91]' />
//                         <div className='ml-4'>
//                           <p className='text-base font-medium text-gray-900'>
//                             Contact Us
//                           </p>
//                           <p className='mt-1 text-sm text-gray-500'>
//                             Get all of your questions answered in our forums or
//                             contact support.
//                           </p>
//                         </div>
//                       </a>

//                       <a
//                         href='/'
//                         className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                       >
//                         {/* Heroicon name: outline/calendar */}
//                         <svg
//                           className='flex-shrink-0 h-6 w-6 text-[#293e91]'
//                           xmlns='http://www.w3.org/2000/svg'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                           aria-hidden='true'
//                         >
//                           <path
//                             strokeLinecap='round'
//                             strokeLinejoin='round'
//                             strokeWidth={2}
//                             d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
//                           />
//                         </svg>
//                         <div className='ml-4'>
//                           <p className='text-base font-medium text-gray-900'>
//                             Outlets
//                           </p>
//                           <p className='mt-1 text-sm text-gray-500'>
//                             See what meet-ups and other events we might be
//                             planning near you.
//                           </p>
//                         </div>
//                       </a>
//                       <a
//                         href='/'
//                         className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
//                       >
//                         <MdSecurity class='h-8 w-8 text-[#293e91]' />
//                         <div className='ml-4'>
//                           <p className='text-base font-medium text-gray-900'>
//                             FAQs
//                           </p>
//                           <p className='mt-1 text-sm text-gray-500'>
//                             Our Commitment to Your Privacy and Security.
//                           </p>
//                         </div>
//                       </a>
//                     </div>
//                     <div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
//                       <div>
//                         <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase'>
//                           Recent Posts
//                         </h3>
//                         <ul className='mt-4 space-y-4'>
//                           <li className='text-base truncate'>
//                             <a
//                               href='/'
//                               className='font-medium text-gray-900 hover:text-gray-700'
//                             >
//                               Boost your conversion rate
//                             </a>
//                           </li>
//                           <li className='text-base truncate'>
//                             <a
//                               href='/'
//                               className='font-medium text-gray-900 hover:text-gray-700'
//                             >
//                               How to use search engine optimization to drive
//                               traffic to your site
//                             </a>
//                           </li>
//                           <li className='text-base truncate'>
//                             <a
//                               href='/'
//                               className='font-medium text-gray-900 hover:text-gray-700'
//                             >
//                               Improve your customer experience
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className='mt-5 text-sm'>
//                         <a
//                           href='/'
//                           className='font-medium text-[#293e91] hover:text-[#293e91]'
//                         >
//                           {' '}
//                           View all posts <span aria-hidden='true'>→</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//             <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
//               <a
//                 href='https://hotelinnercircle.bookingjini.com/'
//                 className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-black rounded-3xl shadow-sm text-base font-medium text-black bg-white hover:bg-[#293e91] hover:border-[#293e91] hover:text-white'
//               >
//                 BOOK NOW
//               </a>
//             </div>
//           </div>
//         </div>
//         {/*
//     Mobile menu, show/hide based on mobile menu state.

//     Entering: "duration-200 ease-out"
//       From: ""
//       To: ""
//     Leaving: "duration-100 ease-in"
//       From: "opacity-100 scale-100"
//       To: "opacity-0 scale-95"
//   */}

//         <div
//           className={
//             open
//               ? 'opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
//               : 'opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
//           }
//         >
//           <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
//             <div className='pt-5 pb-6 px-5'>
//               <div className='flex items-center justify-between'>
//                 <div>
//                   <img
//                     className='h-8 w-auto'
//                     src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                     alt='Workflow'
//                   />
//                 </div>
//                 <div className='-mr-2'>
//                   <button
//                     type='button'
//                     className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#293e91]'
//                     onClick={() => setOpen(!open)}
//                   >
//                     <span className='sr-only'>Close menu</span>
//                     {/* Heroicon name: outline/x */}
//                     <svg
//                       className='h-6 w-6'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M6 18L18 6M6 6l12 12'
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <div className='mt-6'>
//                 <nav className='grid gap-y-8'>
//                   <a
//                     href='/'
//                     className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                   >
//                     {/* Heroicon name: outline/chart-bar */}
//                     <svg
//                       className='flex-shrink-0 h-6 w-6 text-[#293e91]'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
//                       />
//                     </svg>
//                     <span className='ml-3 text-base font-medium text-gray-900'>
//                       Standard Room
//                     </span>
//                   </a>
//                   <a
//                     href='/'
//                     className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                   >
//                     {/* Heroicon name: outline/cursor-click */}
//                     <svg
//                       className='flex-shrink-0 h-6 w-6 text-[#293e91]'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
//                       />
//                     </svg>
//                     <span className='ml-3 text-base font-medium text-gray-900'>
//                       Executive Room
//                     </span>
//                   </a>
//                   <a
//                     href='/'
//                     className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                   >
//                     {/* Heroicon name: outline/shield-check */}
//                     <svg
//                       className='flex-shrink-0 h-6 w-6 text-[#293e91]'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
//                       />
//                     </svg>
//                     <span className='ml-3 text-base font-medium text-gray-900'>
//                       Delux Room
//                     </span>
//                   </a>
//                   <a
//                     href='/'
//                     className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                   >
//                     {/* Heroicon name: outline/view-grid */}
//                     <svg
//                       className='flex-shrink-0 h-6 w-6 text-[#293e91]'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
//                       />
//                     </svg>
//                     <span className='ml-3 text-base font-medium text-gray-900'>
//                       Delux Suite
//                     </span>
//                   </a>
//                   <a
//                     href='/'
//                     className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
//                   >
//                     {/* Heroicon name: outline/refresh */}
//                     <svg
//                       className='flex-shrink-0 h-6 w-6 text-[#ea580c]'
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       stroke='currentColor'
//                       aria-hidden='true'
//                     >
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
//                       />
//                     </svg>
//                     <span className='ml-3 text-base font-medium text-gray-900'>
//                       Automations
//                     </span>
//                   </a>
//                 </nav>
//               </div>
//             </div>
//             <div className='py-6 px-5 space-y-6'>
//               <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
//                 <a
//                   href='/'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Pricing
//                 </a>
//                 <a
//                   href='/'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Docs
//                 </a>
//                 <a
//                   href='/'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Enterprise
//                 </a>
//                 <a
//                   href='/'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Blog
//                 </a>
//                 <a
//                   href='/contact'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Contact Us
//                 </a>

//                 <a
//                   href='/'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   FAQs
//                 </a>
//                 <a
//                   href='/events'
//                   className='text-base font-medium text-gray-900 hover:text-gray-700'
//                 >
//                   Events
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href='/'
//                   className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ea580c] hover:bg-[#ea580c]'
//                 >
//                   Sign up
//                 </a>
//                 <p className='mt-6 text-center text-base font-medium text-gray-500'>
//                   Existing customer?
//                   <a href='/' className='text-[#293e91] hover:text-[#293e91]'>
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header2;
