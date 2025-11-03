import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Drawer, Button, Badge, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import Cart from "@/assets/icons/Cart";
import WishlistIcon from "@/assets/icons/WishlistIcon";
import { type RootState } from "@/app/store";
import styles from "@/styles/components/layout/header.module.scss";
import useAuth from "@/hooks/useAuth";
import SearchBox from "./SearchBox";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [current, setCurrent] = useState("home");
  const {isLoggedIn} = useAuth(); 

  
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    switch (currentPath) {
      case "/":
        setCurrent("home");
        break;
      case "/contact":
        setCurrent("contact");
        break;
      case "/about":
        setCurrent("about");
        break;
      case "/auth/signup":
      case "/auth/signin":
        setCurrent("signup");
        break;
      default:
        setCurrent("home");
    }
  }, [currentPath, setCurrent]);
  
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  let navLinks = [
    { label: "Home", key: "home", to: "/" },
    { label: "Contact", key: "contact", to: "/contact" },
    { label: "About", key: "about", to: "/about" },
    
  ];

  if (!isLoggedIn) {
    navLinks = [
      ...navLinks,
      { label: "Sign Up", key: "signup", to: "/auth/signup" },
    ];
  }

  const handleNavClick = (key: string) => setCurrent(key);
  const toggleDrawer = (open: boolean) => setDrawerOpen(open);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          
          <div className={styles.logo}>
            <Link to="/">Exclusive</Link>
          </div>

         
          <div className={styles.navbar__links}>
            <ul>
              {navLinks.map(({ key, label, to }) => (
                <li key={key} onClick={() => handleNavClick(key!)}>
                  <Link
                    to={to!}
                    className={current === key ? styles.active : ""}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className={styles.navbar__shop}>
            <div className={styles.navbar__actions}>
              {/* Search Input */}
             <SearchBox className={styles.searchBox}/>

              
              <div className={styles.navbar__actions__icons}>
                <Link to="/wishlist">
                  <Badge count={wishlistCount}>
                    <WishlistIcon />
                  </Badge>
                </Link>

                <Link to="/cart">
                  <Badge count={cartCount}>
                    <Cart />
                  </Badge>
                </Link>

                {isLoggedIn && <UserMenu />}
              </div>
            </div>

            <Button
              className={styles.menuBtn}
              type="text"
              icon={<MenuOutlined />}
              onClick={() => toggleDrawer(true)}
            />

            <Drawer
              title="Menu"
              placement="right"
              onClose={() => toggleDrawer(false)}
              open={drawerOpen}
            >
              <SearchBox
                styles={{ paddingBottom: "10px" }}
                
              />
              <Divider/>
              <Menu
                mode="vertical"
                selectedKeys={[current]}
                onClick={({ key }) => handleNavClick(key)}
                items={navLinks.map(({ label, key, to }) => ({
                  key,
                  label: <Link to={to}>{label}</Link>,
                }))}
              />
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
