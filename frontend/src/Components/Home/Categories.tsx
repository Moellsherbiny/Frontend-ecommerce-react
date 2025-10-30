import styles from "@/styles/components/Home/categories.module.scss"
import { HorizontalScroll, ScrollButtonBackward, ScrollButtonForward } from "./ScrollButtons/ScrollButtons";
import { useHorizontalScroll } from "@/hooks/scrollHooks/useHorizontalScroll";
import SectionTitle from "./SectionTitle";
import PhoneIcon from "@/assets/icons/Phone"
import ComputerIcon from "@/assets/icons/Computer"
import CameraIcon from "@/assets/icons/Camera"
import SmartWatchIcon from "@/assets/icons/SmartWatch"
import HeadPhoneIcon from "@/assets/icons/HeadPhone"
import GamePadIcon from "@/assets/icons/GamePad"

function Categories() {
    const { scrollRef, isAtStart, isAtEnd, scroll } = useHorizontalScroll()
    const categories = [
        {
            title: "Phone",
            icon: <PhoneIcon />
        },
        {
            title: "Computer",
            icon: <ComputerIcon />
        },
        {
            title: "SmartWatch",
            icon: <SmartWatchIcon />
        },
        {
            title: "Camera",
            icon: <CameraIcon />
        },
        {
            title: "HeadPhone",
            icon: <HeadPhoneIcon />
        },
        {
            title: "Gaming",
            icon: <GamePadIcon />
        },
    ]
    return (
        <div className={styles.categories}>
            <SectionTitle title="Categories" />
            <div className={styles.categories__head}>
                <h1 className={styles.headingSemiBold}>Browse By Categories</h1>
                <HorizontalScroll >
                    <ScrollButtonBackward disabled={isAtStart} onClick={() => scroll("left")} />
                    <ScrollButtonForward disabled={isAtEnd} onClick={() => scroll("right")} />
                </HorizontalScroll>
            </div>
            <div className={styles.categories__container} ref={scrollRef}>

                <ul className={styles.categories__container__list} >
                    {categories.map((category) =>
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