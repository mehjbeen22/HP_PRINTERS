import Footer from '../sections/Footer';
import TestimonialPage from '../sections/Testimonial';

export default function AboutUs() {
  return (
    <>
      <div className=" flex justify-center items-center  px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex  w-full shadow-md  mt-3 rounded-sm bg-white">
          <section className="w-full p-5 md:text-center">
            <h2 className="text-4xl font-bold text-center">ABOUT US </h2>
            <p className="mt-3 text-center">
              HP printer is a online Printer Store & solutions. We are an online
              convenience printer store dedicated to YOU! Our aim is to give you
              access to quality products printers and solutions without wasting
              any time or energy. At ijstartprinter, we promise to provide
              unique, affordable, and easy printing solutions.
              <br />
              <br />
              ijprintersolutionLive is one of a kind website designed while
              keeping in mind your daily printing needs. We cater to the
              printing needs of everyone who has a printing job at hand!
            </p>
          </section>

          <section className="w-full p-5 hidden md:block lg:block">
            <img
              src="https://printexpress123.com/wp-content/uploads/2024/05/about2.jpg"
              alt=""
              className="w-full hover:scale-105 transition-transform duration-1000 rounded-md"
            />
          </section>
        </div>
      </div>
      <TestimonialPage />
    </>
  );
}
