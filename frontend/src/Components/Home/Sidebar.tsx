import styles  from "@/styles/components/Home/sidebar.module.scss"
import HorizontalSidebar from "./CategoriesMenuMobile"

import CategoriesMenu from "./CategoriesMenu"
function Sidebar() {
  return (
    <>
    <div className={styles.sidebarContainer}>
      <CategoriesMenu/>
    </div>
    <HorizontalSidebar />
    </>
  )
}

export default Sidebar
