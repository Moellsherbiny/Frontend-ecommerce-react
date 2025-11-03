import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Signup from "./Pages/auth/signup";
import Signin from "./Pages/auth/signin";
import NotFound from "./Pages/NotFound";
import CategoryPage from "@/Pages/Products";
import CartPage from "@/Pages/Cart";
import Wishlist from "@/Pages/WhishList";
import CheckOut from "@/Pages/Checkout";
import ProductDetails from "@/Pages/ProductDetailsPage";
import AccountPage from "@/Pages/Account";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<CategoryPage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/:category" element={<Signup />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/account" element={<AccountPage/>} />
    </Routes>

  
  )
}

export default AppRoutes
