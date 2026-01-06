import { Outlet } from "react-router-dom";
import NavBar from "./src/components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
