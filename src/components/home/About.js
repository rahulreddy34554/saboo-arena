import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarOn } from 'react-icons/fa6';
import { GiAutoRepair } from 'react-icons/gi';
import { IoShieldCheckmark } from 'react-icons/io5';
import { IoMdTrophy } from 'react-icons/io';

function About() {
  return (
    <>
      <div className='container py-12 mx-auto bg-white'>
        <div className='px-4 mx-auto max-w-12xl sm:px-6 lg:px-8'>
          <p className='text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91] text-center'>
            Why Choose Us?
          </p>

          <div className='grid grid-cols-1 mt-10 md:grid-cols-2'>
            <div className='overflow-hidden rounded shadow-xl'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
                className='w-full h-full mx-auto product_image'
                alt='about-banner'
              />
            </div>

            <div className='px-8 py-2 my-auto space-y-5'>
              <p className='text-left text-base text-[#293e91] leading-8 '>
                Our widespread presence throughout the city includes four sales
                outlets, seven workshops, one commercial outlet, and two
                exclusive NEXA showrooms for premium cars.
              </p>
              <div className='h-px w-full bg-gray-300 max-w-[500px] rounded'></div>
              <p className='text-base leading-8 text-left text-black'>
                With a rich history in the automobile industry dating back to
                1973, we began as a 2-wheeler dealership and made the leap to
                4-wheelers in 1997 by earning the prestigious Maruti Suzuki
                dealership.
              </p>
              <div>
                <Link
                  to='/about-maruti-suzuki-dealers'
                  className='px-6 py-2 text-white duration-300 ease-in bg-blue-800 rounded-full hover:bg-rose-700 hover:border-red'
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function About2() {
  return (
    <>
      <div class='container my-24 mx-auto md:px-6'>
        <section class='mb-32'>
          <div class='flex flex-wrap'>
            <div class='mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12'>
              <div class='flex lg:py-12'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/about.webp'
                  class='z-[10] w-full rounded-lg shadow-lg  lg:ml-[50px]'
                  alt='about us'
                />
              </div>
            </div>

            <div class='w-full shrink-0 grow-0 basis-auto lg:w-7/12'>
              <div class='flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left'>
                <div class='lg:pl-12'>
                  <h2 class='mb-8 text-3xl font-bold'>Let it surprise you</h2>
                  <p class='mb-8 pb-2 lg:pb-0'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Maxime, sint, repellat vel quo quisquam accusamus in qui at
                    ipsa enim quibusdam illo laboriosam omnis. Labore itaque
                    illum distinctio eum neque!
                  </p>

                  <div class='mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start'>
                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best team
                    </p>

                    <p class='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best quality
                    </p>

                    <p class='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='mr-2 h-5 w-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Best experience
                    </p>
                  </div>

                  <p>
                    Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                    porta dui, sit amet rutrum enim massa in ante. Curabitur in
                    justo at lorem laoreet ultricies. Nunc ligula felis,
                    sagittis eget nisi vitae, sodales vestibulum purus.
                    Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat
                    vel justo. Duis faucibus sapien eget tortor finibus, a
                    eleifend lectus dictum. Cras tempor convallis magna id
                    rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet.
                    Proin tempor lorem at neque tempus aliquet. Phasellus at ex
                    volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                    felis quis ex pharetra luctus. Etiam luctus sagittis massa,
                    sed iaculis est vehicula ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


   //                                WY TO CHOOSE US SECTION

const carData = [
  {
    Icon: FaCarOn,
    title: 'Effortless Car Buying',
    description: 'Enjoy a seamless car-buying experience with us. Simply choose your dream car, and we will handle the rest.',
  },
  {
    Icon: GiAutoRepair,
    title: 'Extensive Service Network',
    description: 'Operating at around 22 touchpoints, we are one of the largest automobile dealerships in the state.',
  },
  {
    Icon: IoShieldCheckmark,
    title: 'Unwavering Reliability',
    description: 'Backed by years of unwavering commitment and expertise, Saboo RKS Motor is a brand with synonymous trust and dependability.',
  },
  {
    Icon: IoMdTrophy,
    title: 'Market Leader',
    description: 'We are Telangana\'s No. 1 Maruti Suzuki Dealer, an automobile dealer of choice.',
  }
];

export const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-24 md:px-6">
      <section className="mb-32">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#293e91]" x-intersect="$el.classList.add('tracking-in-expand')">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-lg font-light text-gray-600" x-intersect="$el.classList.add('fade-in-bottom')">
            Your trusted source for top-notch vehicles and unparalleled service. Find your dream car hassle-free with us!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {carData.map((card, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden text-center duration-300 bg-white border border-blue-100 shadow-md rounded-3xl hover:shadow-xl hover:scale-95 ">
              <div className="flex flex-col items-center p-6 mt-4">
                <card.Icon className="w-10 h-10 mb-4 text-blue-800" />
                <h3 className="mb-2 text-xl font-semibold text-blue-800 lg:text-2xl">{card.title}</h3>
                <p className="max-w-2xl mx-auto mb-12 font-light text-gray-600 text-md" x-intersect="$el.classList.add('fade-in-left')">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
