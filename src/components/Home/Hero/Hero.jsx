import CartItem from "../../CartItem/CartItem";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-100">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <p className="text-gray-600 mb-4 border-l border-orange-500">
            <span className="mx-2">Empower Your Dream</span>
          </p>
          <h1 className="text-5xl font-bold mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 mb-4">
            Explore the latest trends in fashion, electronics, and home
            essentials. Your favorites are just a click away.
          </p>
          <button className="px-6 py-2 bg-orange-400 text-orange-50 font-bold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Shop Now
          </button>
          <div className="flex justify-center md:justify-start mt-12 m-4 shadow-gray-600">
            <div className="mr-6 ml-2">
              <p>
                <span className="text-2xl font-extrabold">200+</span>
              </p>
              <p className="text-gray-600 mb-4">International Brands</p>
            </div>
            <div className="mr-6">
              <p>
                <span className="text-2xl font-extrabold">2,000+</span>
              </p>
              <p className="text-gray-600 mb-4">International Brands</p>
            </div>
            <div className="mr-6">
              <p>
                <span className="text-2xl font-extrabold">30,000+</span>
              </p>
              <p className="text-gray-600 mb-4">International Brands</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/Rectangle 2.png"
            alt="Product Branding"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section>
        <Marquee  className="bg-black text-white p-8 ">
          <ul className="flex gap-12 text-2xl font-extrabold text-white">
            <li>StyleSphere</li>
            <li>Urban Vogue</li>
            <li>ChicVibe</li>
            <li>Modish Haven</li>
            <li>TrendThreads</li>
            <li>TrendThreads</li>
          </ul>
        </Marquee>
      </section>

      <section>
        <>
          <div className=" mx-auto p-2 md:p-2 bg-rose-50">
            <h1 className="text-xl font-bold mb-4 items-center ">
              Cloth Branding
            </h1>

            <CartItem />
          </div>
        </>
      </section>
    </>
  );
};

export default Hero;
