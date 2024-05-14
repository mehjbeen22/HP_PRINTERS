import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto bg-[#38bdf8] py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" shadow-lg p-4 bg-gray-100">
            <h5 className="font-bold text-2xl mb-4">About Us</h5>
            <p>
              Printersolutiononline is a online Printer Store & solutions. We
              are an online convenience printer store dedicated to YOU! Our aim
              is to give you access to quality products printers and solutions
              without wasting any time or energy.
            </p>
          </div>
          <div className=" shadow-lg p-4 bg-gray-100">
            <h5 className="font-bold text-2xl mb-4">Policies</h5>
            <ul className="leading-10">
              <li>Faq's</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return & Refund Policy</li>
            </ul>
          </div>
          <div className=" shadow-lg p-4 bg-gray-100 line">
            <h5 className="font-bold text-2xl mb-4">Quick links</h5>
            <ul className="leading-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>Blogs</li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" shadow-xl p-4 bg-gray-100  leading-10">
            <h5 className="font-bold mb-4 text-2xl">Contact Us</h5>
            <p>Email: support@printexpress123.com</p>
            <p>New York, 96th Street, NY 10121</p>
          </div>
        </div>
      </div>
      <div className="container  p-10  bg-black">
        <div className="text-center ">
          <p className="text-gray-300">
            Copyright © 2024 - printexpress123.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
