import useLenis from "./hook/useLenis";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  useLenis();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <MainRoutes />

    </>
  );
};

export default App;
