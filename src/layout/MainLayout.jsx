import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "@/utils/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
