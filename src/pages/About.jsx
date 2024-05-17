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
              We specialize in offering top-quality printer models from leading
              brands like HP, ensuring cutting-edge technology for exceptional
              performance and reliability. Our printers undergo rigorous testing
              by industry experts, guaranteeing robust and efficient solutions.
              With unparalleled customer support, our knowledgeable team is
              available around the clock to assist you.
              <br /> <br />
              By choosing us, you're not just buying a printer; you're investing
              in a solution supported by superior engineering and comprehensive
              service. Trust us to be your reliable partner for all your
              printing needs.
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
