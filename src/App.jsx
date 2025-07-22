import useLenis from "./hook/useLenis";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  useLenis();

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
