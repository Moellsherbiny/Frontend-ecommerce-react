import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, Drawer, Button, Badge } from "antd";
import {MenuOutlined,
} from "@ant-design/icons";
import { CiSearch } from "react-icons/ci";

import UserMenu from "./UserMenu";
import styles from "../../styles/components/header.module.scss";
import { useSelector } from "react-redux";
import { type RootState } from "@/app/store";
import Cart from "@/assets/icons/Cart";
import WishlistIcon from "@/assets/icons/WishlistIcon";


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const navLinks = [
    { label: "Home", key: "home", to: "/" },
    { label: "Contact", key: "contact", to: "/contact" },
    { label: "About", key: "about", to: "/about" },
    { label: "Sign Up", key: "signup", to: "/auth/signup" },
  ];

  
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleNavClick = (key: string) => setCurrent(key);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          
          <div className={styles.logo}>
          <Link to="/">
            Exclusive
          </Link>
            </div>

          
          <div className={styles.navbar__links}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.key} onClick={() => handleNavClick(link.key)}>
                  <Link
                    to={link.to}
                    className={current === link.key ? styles.active : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className={styles.navbar__shop}>
            <div className={styles.navbar__actions}>
              
              <form className={styles.navbar__actions__search}>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  aria-label="Search products"
                />
                <button type="submit">
                  <CiSearch size={16} />
                </button>
              </form>

              
              <div className={styles.navbar__actions__icons}>
                <Link to="/wishlist">
                  <Badge count={wishlistCount} >
                   <WishlistIcon/>
                  </Badge>
               
                </Link>
                <Link to="/cart">
               
                <Badge count={cartCount} >
                  <Cart />
                </Badge>
                </Link>
                <UserMenu />
              </div>
            </div>

            
            <Button
              className={styles.menuBtn}
              type="text"
              icon={<MenuOutlined  />}
              onClick={handleDrawerOpen}
            />

            
            <Drawer
              title="Menu"
              placement="right"
              onClose={handleDrawerClose}
              open={open}
            >
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.search}
              />
              <Menu mode="vertical" items={navLinks} />
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
