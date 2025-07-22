import useLenis from "./hook/useLenis";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";


const App = () => {
  useLenis();

  return (
    <>
      <Navbar />
      <MainRoutes />

    </>
  );
};

export default App;
