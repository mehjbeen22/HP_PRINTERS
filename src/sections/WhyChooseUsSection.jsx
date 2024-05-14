import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 border-2 border-[#38bdf8] w-[90%] shadow-lg ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              src="https://superblog.supercdn.cloud/site_cuid_cl7iow9nd601611lli3usqx7oz/images/file-2-1663587649175-compressed.png"
              alt=""
              className="w-[100%] h-auto"
            />
          </div>
          <div className="lg:w-1/2 bg-black text-white  p-10">
            <h2 className="text-3xl font-bold mb-4">Why Choose us?</h2>
            <p className="text-lg mb-6">
              Printexpress123 is your go-to solution for all things tech
              support. Why? Because we’re not your average support team- we’re
              the A team. Our tech wizards are the real deal, certified by
              CompTia A+ to tackle any tech challenge comes their way.
            </p>
            <div className="flex items-center">
              <img
                src="https://printexpress123.com/wp-content/uploads/2021/12/Alice-W-signature.svg"
                alt=""
                className="w-10 h-10 mr-4"
              />
              <p className="text-lg">Alice Autumn, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
