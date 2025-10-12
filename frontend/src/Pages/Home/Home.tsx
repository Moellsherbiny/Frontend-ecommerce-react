import styles from "./home.module.scss"
import Carousel from "../../Components/Home/Carousel"
import Sidebar from "../../Components/Home/MainSection/Sidebar"
import type { CarouselItem } from "../../types/carousel"
import { FaApple } from "react-icons/fa";
import FlashSales from "../../Components/Home/FlashSales/FlashSales";
import Featured from "../../Components/Home/Featured/Featured";
import ThisMonth from "../../Components/Home/ThisMonth/ThisMonth";
import Categories from "../../Components/Home/Categories/Categories";
import MainBanner from "../../Components/Home/MainBanner";
import OurProducts from "../../Components/Home/OurProducts/OurProducts";


const carouselItems: CarouselItem[] =[
  { 
    id:1,
    image:"/images/iphone-image.jpg",
    brand:{
      icon:<FaApple size={40} />,
      name:"iPhone 14 Series",
    },
    description:"Up to 10% off Voucher" 
},
  {
    id:2,
    image:"",
    brand:{
      icon:"",
      name:"",
    },
    description:"" 
},
]

function HomePage() {


  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <Sidebar/>
        <Carousel items={carouselItems} />
      </div>
      <FlashSales/>
      <Categories/>
      <ThisMonth/>
      <MainBanner/>
      <OurProducts/>
      <Featured/>
    </div>
  )
}

export default HomePage
