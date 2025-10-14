import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/contact";
import About from "../Pages/About/about";
import Signup from "../Pages/auth/signup";
import Signin from "../Pages/auth/signin";
import NotFound from "../Pages/NotFound/notFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}

export default AppRoutes
