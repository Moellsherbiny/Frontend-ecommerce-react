import { useState } from "react";
import styles from "./userMenu.module.scss"
import { Button } from "antd"
import { FiUser,FiShoppingBag  } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

import { Link } from "react-router";


const items = [
  {
    key: '1',
    label: "Manage My Account",
    icon: <FiUser size={24} />
  },
  {
    key: '2',
    label: "My Order",
    icon: <FiShoppingBag size={24} />
  },
  {
    key: '3',
    label: "My Cancellations",
    icon: <MdOutlineCancel size={24} />
  },
  {
    key: '4',
    label: "My Reviews",
    icon: <FaRegStar size={24} />
  },
  {
    key: '5',
    label: "Logout",
    icon: <TbLogout2 size={24} />,
  },
];


function UserMenu() {
  const [visible, setVisible] = useState(false);
  const handleMenu = () => setVisible(!visible);
  return (
    <div className={styles.userMenu}>
      <Button className={styles.userMenu__button} type={`${visible ? "primary" : "text"}`} onClick={handleMenu}>
        <FiUser size={21} />
      </Button>
      <ul className={`${styles.userMenu__dropdown} ${visible ? styles.active : ""}`}  >
        {items.map((item) =>
          <li key={item.key} className={styles.userMenu__dropdownItem}>
            <Link className={styles.titleRegular} to={item.key} key={item.key}>
              {item.icon} {item.label}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default UserMenu
