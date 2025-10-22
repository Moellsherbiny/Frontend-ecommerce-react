import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, Drawer, Button, Badge } from "antd";
import {
  MenuOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { CiSearch } from "react-icons/ci";

import UserMenu from "./UserMenu";
import styles from "../../styles/components/header.module.scss";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");

  // --- Navigation Links ---
  const navLinks = [
    { label: "Home", key: "home", to: "/" },
    { label: "Contact", key: "contact", to: "/contact" },
    { label: "About", key: "about", to: "/about" },
    { label: "Sign Up", key: "signup", to: "/auth/signup" },
  ];

  // --- Handlers ---
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleNavClick = (key: string) => setCurrent(key);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          {/* === Logo === */}
          <div className={styles.logo}>Exclusive</div>

          {/* === Desktop Links === */}
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

          {/* === Right Section (Search + Icons + User) === */}
          <div className={styles.navbar__shop}>
            <div className={styles.navbar__actions}>
              {/* --- Search --- */}
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

              {/* --- Icons --- */}
              <div className={styles.navbar__actions__icons}>
                <Badge count={3}>
                  <HeartOutlined className={styles.icon} />
                </Badge>
                <Badge count={0}>
                  <ShoppingCartOutlined className={styles.icon} />
                </Badge>
                <UserMenu />
              </div>
            </div>

            {/* --- Mobile Menu Button --- */}
            <Button
              className={styles.menuBtn}
              type="text"
              icon={<MenuOutlined />}
              onClick={handleDrawerOpen}
            />

            {/* --- Drawer (Mobile Menu) --- */}
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
