import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/MyOrder/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./Pages/Dashboard/MyOrder/MyProfile";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Perches from "./Pages/Perches/Perches";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Review from "./Pages/Review/Review";
import Footer from "./Pages/Share/Footer";
import Signup from "./Pages/SignUp/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="myorders" element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
        <Route path="/purchase/:id" element={<Perches/>}></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
