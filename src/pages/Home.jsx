import InstantSupport from '../sections/InstantSupport';
import NewArrivals from '../sections/NewArrivals';
import ProductAvailableSection from '../sections/ProductAvailableSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
const Home = () => {
  return (
    <>
      <div className="bg-red-400 flex justify-center items-center">
        <div className=" border-2 border-black flex justify-center items-center w-[90%]">
          <div className="border-2 border-black  w-[50%] py-10">
            <p>We Have The</p>
            <p>Treasure of Refurbished</p>
            <p>Printers & Scanners</p>
            <p>
              In The World Of Endless Possibilities,Our Printers And Scanners
              Are Your Companions In Turning Dreams Into Reality.
            </p>
            <button>Explore Now</button>
          </div>
          <div>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-hp-printer-with-photos-and-paper-near-it-image_2973486.jpg"
              alt=""
              style={{ width: '100%', height: '25rem', objectFit: 'contain' }}
            />
          </div>
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
