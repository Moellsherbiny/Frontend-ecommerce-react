import React, { useState } from "react";
import { Input, Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  // SearchOutlined,
} from "@ant-design/icons";
import styles from "../../styles/components/header.module.scss";
import { Link } from "react-router";

const { Search } = Input;

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
      to: "/signup"
    }
  ]
  const [current, setCurrent] = useState("home")
  const setItemClick = (key: string) => {
    setCurrent(key)

  }
  return (
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

        {/* Search + Icons */}
        <div className={styles.actions}>
          <Search
            placeholder="What are you looking for?"
            allowClear
            className={styles.search}
            style={{ border: "none" }}
          />
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
            <Search
            placeholder="What are you looking for?"
            allowClear
            
            style={{ border: "none" }}
          />
          <Menu mode="vertical" items={navLinks} />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
