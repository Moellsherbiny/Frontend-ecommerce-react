import { Image } from "antd";
import styles from "@/styles/pages/productDetails.module.scss";
import type { Product } from "@/types/product/product";

interface Props {
  product: Product;
  mainImage: string;
  setMainImage: (img: string) => void;
}

const ProductImages: React.FC<Props> = ({ product, mainImage, setMainImage }) => (
  <div className={styles.imageSection}>
    <div className={styles.thumbnails}>
      {(product.images ?? [product.thumbnail]).map((img) => (
        <Image
          key={img}
          src={img}
          alt="thumbnail"
          className={`${styles.thumb} ${
            mainImage === img ? styles.activeThumb : ""
          }`}
          onClick={() => setMainImage(img)}
        />
      ))}
    </div>
    <div className={styles.mainImage}>
      <Image src={mainImage} alt="main product" />
    </div>
  </div>
);

export default ProductImages;
