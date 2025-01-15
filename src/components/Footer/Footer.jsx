import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <section className="">
        <div className=" shadow-md rounded-lg m-12">
          <div className="bg-black mx-auto flex justify-between items-center py-8">
            <p className="text-white ml-12 text-3xl font-bold mb-4">
              STAY UP TO DATE ABOUT
              <br /> OUR LATEST OFFERS
            </p>
            <div className="mr-12">
              <p className="mb-4 ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </p>

              <p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-between gap-12 m-4">
            <div>
              <p className="text-3xl font-bold mb-3">Shop.com</p>
              <p className="space-y-4 mt-3">
                We have clothes that suits your style and
                <br /> which you’re proud to wear. From
                <br /> women to men.
              </p>
              <div className="flex gap-4 mt-4">
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaFacebook />
                </p>
                <p>
                  <FaInstagram />
                </p>
                <p>
                  <FaInstagram />
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl mb-4">COMPANY</p>
              <div className="space-y-4">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Carrer</p>
              </div>
            </div>

            <div>
              <p className="text-xl mb-4">HELP</p>
              <div className="space-y-4">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Carrer</p>
              </div>
            </div>
            <div>
              <p className="text-xl mb-4">FAQ</p>
              <div className="space-y-4">
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div>
              <p className="text-xl mb-4">RESOURCE</p>
              <div className="space-y-4">
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
