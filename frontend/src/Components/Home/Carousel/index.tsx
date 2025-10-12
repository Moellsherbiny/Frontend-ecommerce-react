
import CarouselStyles from './Carousel.module.scss'
import type { CarouselProps } from '../../../types/carousel'
import Dots from './Dots'
import { Button } from 'antd'
// import Button from '../../common/Button'



function AppCarousel({ items }: CarouselProps) {
    let currentItem = items[0]

    return (
        <div className={CarouselStyles.carousel}>
                    <div className={CarouselStyles.item} key={currentItem.id}>

                        <div className={CarouselStyles.info}>
                            <div className={CarouselStyles.brand}>
                                {currentItem.brand.icon}
                                <span className={CarouselStyles.titleRegualar}>{currentItem.brand.name}</span>
                            </div>
                            <div className={CarouselStyles.headingSemiBold}>
                                {currentItem.description}
                            </div>

                            <Button type='dashed' style={{ width:"30%"}}>ShopNow</Button>
                        </div>
                        <div className={CarouselStyles.imageContainer}>
                            {currentItem.image && <img src={currentItem.image} alt={currentItem.brand.name} />}
                        </div>
                    </div>
            <Dots count={items.length +3} activeIndex={1} />
        </div>
    )
}

export default AppCarousel
