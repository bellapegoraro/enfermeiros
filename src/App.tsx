import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Unities from "./components/Unities/Unities";
import Unity from "./components/Unity";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Unities />
            </>
          }
        />
        <Route path="/unidade/:id" element={<Unity />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
