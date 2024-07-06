import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
