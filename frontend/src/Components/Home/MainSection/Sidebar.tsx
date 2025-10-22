import { categories } from "./data"
import { Menu } from "antd"
import styles  from "./sidebar.module.scss"
import HorizontalSidebar from "../HorizontalSideBar"
function Sidebar() {
  return (
    <>
    <div className={styles.sidebarContainer}>
      <Menu items={categories} className={styles.sidebar} />
    </div>
    <HorizontalSidebar />
    </>
  )
}

export default Sidebar
