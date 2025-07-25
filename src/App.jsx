import useLenis from "./hook/useLenis";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <MainRoutes />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
