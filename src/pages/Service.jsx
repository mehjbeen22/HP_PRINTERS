import React from 'react';
import NewArrivals from '../sections/NewArrivals';

const IconBox = () => {
  return (
    <>
      <main className="flex  flex-col justify-center   items-center  bg-[#38bdf8] px-8 py-10">
        <h1 className="text-6xl text-white border-b-4 border-black mb-8">
          OUR SERVICES{' '}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%]">
          <div
            className="bg-white p-6 rounded-full text-black shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Printers & Accessories</h3>
              <p className="mt-2">
                We sell new and refurbished, products, tested and verified by
                our experts. Our team of skilled technicians rigorously tested
                these products to ensure they meet our high standards.
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 rounded-full text-black shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Tech Support</h3>
              <p className="mt-2">
                Our Shop is your go-to solution for all things tech support.
                Why? . Our tech wizards are the real deal, certified by <br />
                CompTia A+ to tackle any tech challenge comes their way.
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 rounded-full text-black  shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Expert Advice</h3>
              <p className="mt-2">
                If you are not able to select which product is best for you,
                then you can get advice form our experts, they will guide you to
                find a best solution according to your need and requirements.
              </p>
            </div>
          </div>
          <div
            className="bg-white p-6 rounded-full text-black  shadow-2xl hover:scale-105 transition-transform duration-1000"
            style={{ borderBottom: '12px solid black' }}
          >
            <div className="flex items-center justify-center">
              <svg
                className="h-12 w-12"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">24*7 Support</h3>
              <p className="mt-2">
                Facing issues while buying? Our representatives are available
                24*7 to help you throughout the day and night.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* ---------------------------------------------------------------------------- */}
      <div className="flex justify-center items-center px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex flex-col md:flex-row w-full shadow-md rounded-sm bg-white">
          <section className="w-full md:w-1/2 p-5">
            <img
              src="https://www.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-600nw-1712082700.jpg"
              alt=""
              className="w-[90%] h-[100%] md:w-full md:h-full   hover:scale-105 transition-transform duration-1000"
            />
          </section>

          <section className="w-full md:w-1/2 flex flex-col justify-center px-8 py-6">
            <h2 className="text-3xl font-semibold mb-4">
              We offer on Site Assistance <br />
              for your Products
            </h2>
            <p className="text-lg mb-4">
              We offer on site assistance for the products that you purchased
              from us and also for your old products you buy from other
              resources, we help you the tech problems faced while installing or
              troubleshooting of a printer or other devices.
            </p>

            <div>
              <a
                href="#"
                className="border-2 border-gray-500 p-2 text-gray-600 hover:bg-black hover:text-white hover:border-none"
              >
                MORE DETAILS
              </a>
            </div>
          </section>
        </div>
      </div>
      <NewArrivals />
    </>
  );
};

export default IconBox;
