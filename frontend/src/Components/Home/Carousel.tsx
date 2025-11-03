
import CarouselStyles from '@/styles/components/Home/Carousel.module.scss'
import type { CarouselProps } from '../../types/carousel'
import ShopNowBtn from '@/Components/common/ShopNowBtn/ShopNowBtn'

import { Carousel } from 'antd';


function AppCarousel({ items }: CarouselProps) {
    const onChange = (currentSlide: number) => {
        
    };
    return (
        <div className={CarouselStyles.carousel}>
            <Carousel afterChange={onChange} autoplay>
                {items.map((item) =>
                    <div className={CarouselStyles.item} key={item.id}>
                        <div className={CarouselStyles.info}>
                            <div className={CarouselStyles.brand}>
                                {item.brand.icon}
                                <span className={CarouselStyles.titleRegualar}>{item.brand.name}</span>
                            </div>
                            <div className={CarouselStyles.headingSemiBold}>
                                {item.description}
                            </div>

                            <ShopNowBtn showArrow />
                        </div>
                        <div className={CarouselStyles.imageContainer}>
                            {item.image && <img src={item.image} alt={item.brand.name} />}
                        </div>
                    </div>
                )

                }
            </Carousel>


        </div>
    )
}

export default AppCarousel
