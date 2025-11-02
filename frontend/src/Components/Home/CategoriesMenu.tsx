import { Menu } from "antd"
import { categories } from "@/data/categories"
import { Link } from "react-router"
import styles  from "@/styles/components/Home/categoriesMenu.module.scss"


function CategoriesMenu() {
  return (
        <Menu items={categories.map((cate, i)=>({
        key:i,
        label:<Link to={`/products?category=${cate.href}`}>{cate.label}</Link>,
        children:cate.children
        }))} className={styles.categoriesMenu} />
  )
}

export default CategoriesMenu
