import { Button, Typography } from "antd";
import styles from "@/styles/pages/productDetails.module.scss";

const { Text } = Typography;

interface Props {
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

function ProductOptions({selectedColor,setSelectedColor,selectedSize,setSelectedSize,}: Props) {
  
  return(

    <>
    <div className={styles.optionGroup}>
      <Text strong>Colours:</Text>
      <div className={styles.colors}>
        {["#ff4d4f", "#1677ff"].map((color) => (
          <span
            key={color}
            className={`${styles.colorCircle} ${
              selectedColor === color ? styles.active : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>

    <div className={styles.optionGroup}>
      <Text strong>Size:</Text>
      <div className={styles.sizes}>
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <Button
            key={size}
            className={`${styles.sizeBtn} ${
              selectedSize === size ? styles.activeSize : ""
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  </>
      )

};

export default ProductOptions;
