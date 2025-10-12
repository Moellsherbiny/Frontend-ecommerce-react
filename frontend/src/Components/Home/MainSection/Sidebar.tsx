import { categories } from "./data"
import { Menu } from "antd"
import styles  from "./sidebar.module.scss"

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <Menu items={categories} className={styles.sidebar} />
      <Menu items={categories} mode="horizontal" className={styles.cates}   />
    </div>
  )
}

export default Sidebar
