import {
  FaApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaGooglePay,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="shadow-md mx-4 md:mx-12 mt-16">
          <div className="bg-black mx-auto rounded-lg flex flex-col lg:flex-row justify-between items-center py-8 px-6">
            <p className="text-white text-center lg:text-left text-2xl md:text-3xl font-bold mb-6 lg:mb-0">
              STAY UP TO DATE ABOUT
              <br /> OUR LATEST OFFERS
            </p>
            <div className="w-full lg:w-auto">
              <p className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </p>
              <p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="m-4 md:m-8">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full sm:w-auto">
              <p className="text-3xl font-bold mb-3">KaporLagbe.com</p>
              <p className="text-gray-600">
                We have clothes that suit your style and
                <br /> which you’re proud to wear. From women to men.
              </p>
              <div className="flex gap-4 mt-4">
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
                <FaInstagram />
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-xl mb-4">COMPANY</p>
              <div className="space-y-4 text-gray-600">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-xl mb-4">HELP</p>
              <div className="space-y-4 text-gray-600">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-xl mb-4">FAQ</p>
              <div className="space-y-4 text-gray-600">
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-xl mb-4">RESOURCE</p>
              <div className="space-y-4 text-gray-600">
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>YouTube Playlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-10 py-6 bg-gray-50">
        <div className="border-b border-gray-500 w-full mx-auto my-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pb-8">
          <p className="text-gray-700 text-center sm:text-left">
            Copyright © 2025 Kaporlagbe
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <FaCcVisa />
            <FaCcPaypal />
            <FaApplePay />
            <FaGooglePay />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
