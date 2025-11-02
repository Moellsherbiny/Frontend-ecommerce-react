import styles from "@/styles/components/Home/categoriesMenuMobile.module.scss"
import { categories } from "@/data/categories"
import { Link } from "react-router"
import { MenuOutlined, } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CategoriesMenu from "./CategoriesMenu";
function CategoriesMobile() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className={styles.categoriesMobile}>
      <Button onClick={showDrawer} className={styles.horizontalSidebar__button}>
        <MenuOutlined size={24} />
      </Button>
      
      <h6 className={styles.categoriesMobile__title}>Categories</h6>
      <Drawer title="Categories" width={250}placement="left" onClose={onClose} open={open}>
        
        <CategoriesMenu />
        
      </Drawer>
    </div>
  )
}

export default CategoriesMobile
