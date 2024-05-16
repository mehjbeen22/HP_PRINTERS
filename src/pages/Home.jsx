import InstantSupport from '../sections/InstantSupport';
import NewArrivals from '../sections/NewArrivals';
import ProductAvailableSection from '../sections/ProductAvailableSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';

const Home = () => {
  return (
    <>
      <div className=" flex justify-center items-center mt-10 px-8 py-10 bg-[#38bdf8] h-[90vh]">
        <div className="aboutCase flex  w-full shadow-md rounded-sm bg-white">
          <section className="w-full p-5 leading-8 border ">
            <h2 className="text-4xl font-bold ">Brand New Collection </h2>
            <p>We Have The</p> <p>Treasure of Refurbished</p>
            <p>Printers & Scanners</p>{' '}
            <p>
              {' '}
              In The World Of Endless Possibilities,Our Printers And Scanners
              Are Your Companions In Turning Dreams Into Reality.{' '}
            </p>{' '}
            <button className="bg-black text-white p-1 rounded mt-3 ">
              Explore Now
            </button>
          </section>

          <section className="w-full p-5 hidden md:block lg:block">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-hp-printer-with-photos-and-paper-near-it-image_2973486.jpg"
              alt=""
              className="w-full hover:scale-105 transition-transform duration-1000 rounded-md"
            />
          </section>
        </div>
      </div>

      {/* OTHER SECTIONS COMPONENT CALL  */}
      <InstantSupport />
      <NewArrivals />
      <ProductAvailableSection />
      <WhyChooseUsSection />
    </>
  );
};

export default Home;
