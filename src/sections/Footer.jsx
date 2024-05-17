import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full  bg-black">
      <div className=" py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="  p-4 text-white">
            <h5 className="font-bold text-2xl mb-4">About Us</h5>
            <p>
              Printersolutiononline is a online Printer Store & solutions. We
              are an online convenience printer store dedicated to YOU! Our aim
              is to give you access to quality products printers and solutions
              without wasting any time or energy.
            </p>
          </div>
          <div className="  p-4 text-white">
            <h5 className="font-bold text-2xl mb-4">Policies</h5>
            <ul className="leading-10">
              <Link to="/disclaimer" className="underline hover:text-blue-500">
                Disclaimer
              </Link>{' '}
              <br />
              <Link to="/faqs" className="underline hover:text-blue-500">
                Faq's
              </Link>
              <br />
              <Link to="/privacy" className="underline hover:text-blue-500">
                Privacy Policy
              </Link>
              <br />
              <Link to="/t&c" className="underline hover:text-blue-500">
                Terms & Conditions
              </Link>
              <br />
              <Link
                to="/refundAndreturn"
                className="underline hover:text-blue-500"
              >
                Return & Refund Policy
              </Link>
            </ul>
          </div>
          <div className="  p-4 text-white line">
            <h5 className="font-bold text-2xl mb-4">Quick links</h5>
            <ul className="leading-10">
              <a href="#" className="underline hover:text-blue-500">
                Home
              </a>{' '}
              <br />
              <Link
                to="/about"
                className="underline hover:text-blue-500"
                href=""
              >
                About
              </Link>{' '}
              <br />
              <Link
                to="/contact"
                className="underline hover:text-blue-500"
                href=""
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="p-4 text-white  leading-10">
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
