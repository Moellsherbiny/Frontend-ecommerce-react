import styles from "@/styles/components/Home/categoriesMenuMobile.module.scss"
import { categories } from "./MainSection/data"
import { Link } from "react-router"
import {MenuOutlined,} from "@ant-design/icons";
function index() {
  return (
    <div className={styles.horizontalSidebar}>
      <button>
        <MenuOutlined size={24} />
      </button>
      <h6 className={styles.horizontalSidebar__title}>Categories</h6>
      
      <ul className={styles.horizontalSidebar__list}>

        {categories.map((category, index) =>
          <li key={index}>
            <Link to={"/"}>
              {category?.key}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default index
