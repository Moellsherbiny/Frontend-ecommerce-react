import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  // SearchOutlined,
} from "@ant-design/icons";
import styles from "../../styles/components/header.module.scss";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const navLinks = [
    {
      label: "Home",
      key: "home",
      to: "/"

    },
    {
      label: "Contact",
      key: "contact",
      to: "/contact"
    },
    {
      label: "About",
      key: "about",
      to: "/about"
    },
    {
      label: "Sign Up",
      key: "signup",
      to: "/auth/signup"
    }
  ]
  const [current, setCurrent] = useState("home")
  const setItemClick = (key: string) => {
    setCurrent(key)

  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <nav className={styles.navbar}>
          {/* Logo */}
          <div className={styles.logo}>Exclusive</div>

          {/* Desktop Menu */}
          <div className={styles.links}>
            {/* <Menu  overflowedIndicator={null} onClick={setItemClick} selectedKeys={[current]} mode="horizontal" selectable={false} items={navLinks} /> */}
            <ul>
              {navLinks.map((link) => (
                <li key={link.key} onClick={() => setItemClick(link.key)}>
                  <Link to={link.to} className={current === link.key ? styles.active : ""} >{link.label}  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.shop}>

            
            <div className={styles.actions}>
              <form className={styles.search}>

                <input
                  placeholder="What are you looking for?"
                  type="text"
                  
                  />
                <button>
                  <CiSearch size={16} />
                </button>
              </form>

              <HeartOutlined className={styles.icon} />
              <ShoppingCartOutlined className={styles.icon} />
            </div>

            {/* Mobile Menu Button */}
            <Button
              className={styles.menuBtn}
              type="text"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />

            {/* Drawer for Mobile */}
            <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
              <input
                placeholder="What are you looking for?"
                type="search"
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
