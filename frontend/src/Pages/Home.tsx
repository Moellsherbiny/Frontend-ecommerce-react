import styles from "@/styles/pages/home.module.scss"
import Carousel from "@/Components/Home/Carousel"
import Sidebar from "@/Components/Home/Sidebar"
import type { CarouselItem } from "@/types/carousel"
import { FaApple } from "react-icons/fa";
import FlashSales from "@/Components/Home/FlashSales";
import Featured from "@/Components/Home/Featured";
import ThisMonth from "@/Components/Home/ThisMonth";
import Categories from "@/Components/Home/Categories";
import MainBanner from "@/Components/Home/MainBanner";
import OurProducts from "@/Components/Home/OurProducts";
import { Divider } from "antd";
import SEO from "@/Components/SEO";


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
    image:"images/iphone-17.jpg",
    brand:{
      icon:<FaApple size={40} />,
      name:"iPhone 17 Series",
    },
    description:"Up to 15% off Voucher"
},
  {
    id:3,
    image:"images/AirPods-Pro.webp",
    brand:{
      icon:<FaApple size={40} />,
      name:"AirPods Pro",
    },
    description:"Up to 20% off Voucher"
},
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
    image:"images/iphone-17.jpg",
    brand:{
      icon:<FaApple size={40} />,
      name:"iPhone 17 Series",
    },
    description:"Up to 15% off Voucher"
},

]

function HomePage() {
  
  
  return (
    <>
    <SEO
      title="Exclusive | Home"
      description="Welcome to Exclusive – explore our latest collections and premium offers."
    />
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
    </>
  )
}

export default HomePage
