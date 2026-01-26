import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className="p-4 lg:px-24 lg:py-10">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
