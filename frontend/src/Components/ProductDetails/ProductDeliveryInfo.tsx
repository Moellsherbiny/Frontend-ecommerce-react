import { Typography, Divider } from "antd";
import styles from "@/styles/pages/productDetails.module.scss";
import Delivery from "@/assets/icons/Delivery";
import ReturnIcon from "@/assets/icons/ReturnICon";

const { Text, Paragraph } = Typography;

const ProductDeliveryInfo = () => (
  <>
    <Divider />
    <div className={styles.delivery}>
      <div>
        <div><Delivery fontSize={21} /></div>
        <div>
          <Text strong>Free Delivery</Text>
          <Paragraph style={{ marginBottom: 0 }}>
            Enter your postal code for Delivery Availability
          </Paragraph>
        </div>
      </div>

      <div>
        <div><ReturnIcon /></div>
        <div>
          <Text strong>Return Delivery</Text>
          <Paragraph style={{ marginBottom: 0 }}>
            Free 30 Days Delivery Returns. Details
          </Paragraph>
        </div>
      </div>
    </div>
  </>
);

export default ProductDeliveryInfo;
