import styles from "@/Components/common/Services/services.module.scss"
import { LiaShippingFastSolid } from 'react-icons/lia'
import IconContainer from "../IconContainer/IconContainer"

const servicesData = [
    {
        title:"FREE AND FAST DELIVERY",
        description:"Free delivery for all orders over $140",
        icon:<LiaShippingFastSolid size={40} />
    },
    {
        title:"24/7 CUSTOMER SERVICE",
        description:"Friendly 24/7 customer support",
        icon:<LiaShippingFastSolid size={40} />
    },
    {
        title:"MONEY BACK GUARANTEE",
        description:"We reurn money within 30 days",
        icon:<LiaShippingFastSolid size={40} />
    },

]

function Services() {
    return (
        <div className={styles.services}>
            
              {servicesData.map(service => 
                  <div key={service.title} className={styles.services__item}>
                    <IconContainer icon={service.icon} />
                    <div className={styles.services__item__content}>
                        <h5 className={styles.titleSemiBold}>{service.title}</h5>
                        <p className={styles.titleRegular}>{service.description}</p>
                    </div>
                </div>
              )
              
              }

            
        </div>
    )
}

export default Services
