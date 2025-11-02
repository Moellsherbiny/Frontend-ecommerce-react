import { useState } from "react";
import styles from "@/styles/components/layout/userMenu.module.scss"
import { Button } from "antd"
import { FiShoppingBag  } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

import { Link } from "react-router";
import User from "@/assets/icons/User";
import useAuth from "@/hooks/useAuth";


const items = [
  {
    key: '1',
    to: "/account",
    label: "Manage My Account",
    icon: <User />
  },
  {
    key: '2',
    to: "/orders",
    label: "My Order",
    icon: <FiShoppingBag size={24} />
  },
  {
    key: '3',
    to: "/cancellations",
    label: "My Cancellations",
    icon: <MdOutlineCancel size={24} />
  },
  {
    key: '4',
    to: "/reviews",
    label: "My Reviews",
    icon: <FaRegStar size={24} />
  },
  
];


function UserMenu() {
  const [visible, setVisible] = useState(false);
  const handleMenu = () => setVisible(!visible);
  const {logout} = useAuth()
  return (
    <div className={styles.userMenu}>
      <Button className={styles.userMenu__button} type={`${visible ? "primary" : "text"}`} onClick={handleMenu}>
       <User />
      </Button>
      <ul className={`${styles.userMenu__dropdown} ${visible ? styles.active : ""}`}  >
        {items.map((item) =>
          <li key={item.key} className={styles.userMenu__dropdownItem} onClick={()=>setVisible(false)}>
            <Link className={styles.titleRegular} to={item.to} key={item.key}>
              {item.icon} {item.label}
            </Link>
          </li>
        )}
        <Button type="text" style={{color:"white", padding:"0", justifyContent:"start"}} onClick={logout} block>
          <TbLogout2 size={24} /> Logout
        </Button>
      </ul>
    </div>
  )
}

export default UserMenu
