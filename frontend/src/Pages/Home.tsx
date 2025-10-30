import styles from "@/styles/pages/home.module.scss"
import Carousel from "@/Components/Home/Carousel"
import Sidebar from "@/Components/Home/MainSection/Sidebar"
import type { CarouselItem } from "@/types/carousel"
import { FaApple } from "react-icons/fa";
import FlashSales from "@/Components/Home/FlashSales/FlashSales";
import Featured from "@/Components/Home/Featured/Featured";
import ThisMonth from "@/Components/Home/ThisMonth";
import Categories from "@/Components/Home/Categories";
import MainBanner from "@/Components/Home/MainBanner";
import OurProducts from "@/Components/Home/OurProducts/OurProducts";
import { Divider } from "antd";


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
    <div className="container">

    <div className={styles.home}>
      <div className={styles.main}>
        <Sidebar/>
        <Carousel items={carouselItems} />
      </div>
      <FlashSales/>
      <Divider/>
      <Categories/>
      <Divider/>
      <ThisMonth/>
      <MainBanner/>
      <OurProducts/>
      <Featured/>
    </div>
    </div>
  )
}

export default HomePage
