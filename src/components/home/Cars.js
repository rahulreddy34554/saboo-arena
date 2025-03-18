import React, { Fragment } from "react";
import HomePageTab from "../../screens/home/HomePageTab";
function Cars() {
  return (
    <>
      <div className="container px-5 mx-auto mt-5 lg:px-0 md:px-3 ">
        <div className="grid grid-cols-1 gap-2">
          {/* <div className='flex items-center justify-center my-3'>
            <Link
              to='/maruti-suzuki-car-offers-page'
              className='px-4 py-2 text-sm font-light tracking-wide text-white duration-300 ease-in bg-blue-800 rounded md:px-6 md:py-2 md:text-base hover:bg-rose-700 hover:border-red'
            >
              View Offers
            </Link>
          </div> */}
          <div className="space-y-1 text-center">
            <section class="h-auto bg-white">
              <div class="max-w-4xl mx-auto py-5 px-2 sm:py-10 sm:px-6 lg:px-8 sm:text-center">
                <p
                  class="mt-1 text-3xl font-extrabold text-[#293e91] sm:text-4xl sm:tracking-tight lg:text-5xl"
                  x-intersect="$el.classList.add('focus-in-expand')"
                >
                  Discover Your Dream Car at <br />
                  <span className="text-blue-800">Saboo</span>{" "}
                  <span className="text-red-600">RKS</span>
                </p>
                <p
                  class="max-w-9xl mt-5 mx-auto text-lg font-light text-gray-600  tracking-wide"
                  x-intersect="$el.classList.add('fade-in-bottom')"
                >
                  At Saboo RKS, we're dedicated to providing you with the finest
                  vehicles that match your style and needs. Browse our
                  collection today and experience automotive excellence like
                  never before.
                </p>
              </div>
            </section>

            {/* <p className='max-w-5xl mx-auto text-base md:max-w-3xl md:pb-8 '>
              Saboo RKS is the leading Maruti Suzuki dealer in Hyderabad. Built
              with innovations that stand out with a whole new world of enhanced
              driving experience. Any Questions? Our professional and
              well-trained staff are always ready to assist!
            </p> */}
          </div>
        </div>
        <VehicleProducts />
        {/* <div className="flex-auto overflow-hidden">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Brezza2022_June30_banner.webp"
          className="w-full h-full mx-auto product_image"
          alt="banner"
        />
      </div> */}
      </div>
    </>
  );
}

const VehicleProducts = () => {
  return (
    <>
      <HomePageTab />
    </>
  );
};

export default Cars;
