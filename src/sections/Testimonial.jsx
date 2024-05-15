export default function TestimonialPage() {
  return (
    <>
      <div className="flex justify-center items-center px-8 py-6 bg-[#38bdf8]">
        <div className="aboutCase flex flex-col md:flex-row w-full shadow-md rounded-sm bg-white">
          <section className="w-full md:w-1/2 p-5">
            <img
              src="https://img.freepik.com/premium-photo/businesswoman-woman-happy-pretty-attractive-professional-adult-female-portrait-business-lady-person-young-success-beauty-office-successful-corporate-confident-caucasian-cheerful_163305-237346.jpg"
              alt=""
              className="w-[90%] h-[100%] md:w-full md:h-full   hover:scale-105 transition-transform duration-1000"
            />
          </section>

          <section className="w-full md:w-1/2 flex flex-col justify-center px-8 py-6">
            <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
            <p className="text-lg font-semibold mb-4">
              I have purchased a printer from PrintExpress. The quality and
              delivery time were awesome. Their executive helped me to install
              and solve my printing problems. Highly recommended for future
              purchases.
            </p>
            <div className="flex items-center">
              <img
                decoding="async"
                src="https://printexpress123.com/wp-content/uploads/2021/12/testimonial-avatar_optimized.webp"
                className="w-16 h-16 rounded-full mr-4"
                alt=""
              />
              <p className="text-xl font-semibold">Jane Blayck</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
