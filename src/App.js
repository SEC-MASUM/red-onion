import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Breakfast from "./Pages/Home/Menu/Breakfast/Breakfast";
import Dinner from "./Pages/Home/Menu/Dinner/Dinner";
import Lunch from "./Pages/Home/Menu/Lunch/Lunch";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}>
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
