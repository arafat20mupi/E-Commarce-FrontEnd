import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
  
