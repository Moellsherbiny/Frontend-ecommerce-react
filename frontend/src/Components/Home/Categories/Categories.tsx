import { BiCamera, BiHeadphone } from "react-icons/bi";
import styles from "./categories.module.scss"
import { HorizontalScroll, ScrollButtonBackward, ScrollButtonForward } from "../ScrollButtons/ScrollButtons";
import { useHorizontalScroll } from "../../../hooks/scrollHooks/useHorizontalScroll";
import SectionTitle from "../SectionTitle";
import { LuGamepad } from "react-icons/lu";
import { CiDesktop, CiMobile4 } from "react-icons/ci";
import { TbDeviceWatchStats } from "react-icons/tb";
function Categories(){
    const {scrollRef, isAtStart, isAtEnd, scroll} = useHorizontalScroll()
    const categories = [
        {
            title:"Phone",
            icon: <CiMobile4  size={56}/>
        },
        {
            title:"Computer",
            icon: <CiDesktop size={56}/>
        },
        {
            title:"SmartWatch",
            icon: <TbDeviceWatchStats  size={56}/>
        },
        {
            title:"Camera",
            icon: <BiCamera size={56}/>
        },
        {
            title:"HeadPhone",
            icon: <BiHeadphone size={56}/>
        },
        {
            title:"Gaming",
            icon: <LuGamepad size={56} />
        },
    ]
    return(
        <div className={styles.categories}>
            <SectionTitle title="Categories"/>
            <div className={styles.categories__head}>
                <h1 className={styles.headingSemiBold}>Browse By Categories</h1>
                <HorizontalScroll >
                    <ScrollButtonBackward disabled={isAtStart} onClick={()=>scroll("left")}/>
                    <ScrollButtonForward disabled={isAtEnd} onClick={()=>scroll("right")}/>
                </HorizontalScroll>
            </div>
            <div className={styles.categories__container} ref={scrollRef}>

            <ul className={styles.categories__container__list} >
                {categories.map((category)=> 
                <li key={category.title} className={styles.categories__container__list__item}>
                    {category.icon}
                    <h6 className={styles.titleRegular}> {category.title}</h6>
                    <div className={styles.categories__container__list__item__bg}></div>
                </li>
            )}
            </ul>
            </div>
        </div>
    )
}

export default Categories;