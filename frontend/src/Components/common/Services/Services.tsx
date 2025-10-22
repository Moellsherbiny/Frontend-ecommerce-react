import styles from "@/Components/common/Services/services.module.scss"
import IconContainer from "../IconContainer/IconContainer"
import Delivery from "@/assets/icons/Delivery"
import HeadPhone from "@/assets/icons/HeadPhone"
import Shield from "@/assets/icons/Shield"

const servicesData = [
    {
        title:"FREE AND FAST DELIVERY",
        description:"Free delivery for all orders over $140",
        icon:<Delivery />
    },
    {
        title:"24/7 CUSTOMER SERVICE",
        description:"Friendly 24/7 customer support",
        icon:<HeadPhone />
    },
    {
        title:"MONEY BACK GUARANTEE",
        description:"We reurn money within 30 days",
        icon:<Shield />
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
