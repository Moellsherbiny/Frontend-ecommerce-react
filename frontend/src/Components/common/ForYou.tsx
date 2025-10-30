import styles from "@/styles/components/common/forYou.module.scss"
import { Button, Col, Row } from "antd"
import SectionTitle from "../Home/SectionTitle"
import { products } from "@/data/products"
import { useSelector } from "react-redux";
import { type RootState } from "@/app/store";
import ProductCard from "../Products/ProductCard";


function getForYouProducts() {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  let cate = "electronic"; // default category

  if (wishlist.length > 0) {
    const catesMap = new Map<string, number>();

    wishlist.forEach((item) => {
      catesMap.set(item.category, (catesMap.get(item.category) || 0) + 1);
    });

    // get the most frequent category
    let maxCount = 0;
    let mostCategory = cate; // fallback

    catesMap.forEach((count, category) => {
      if (count > maxCount) {
        maxCount = count;
        mostCategory = category;
      }
    });

    cate = mostCategory;
  }

  const forYouProducts = products.filter(
    (product) => product.category === cate
  );

  return forYouProducts;
}


function ForYou() {
  const forYouProducts = getForYouProducts();
  const handleShowAll = () => {

  }
  return (
    <div>
      <div className={styles.header}>
        <SectionTitle title="Just For You" />
        <Button onClick={handleShowAll}>See All</Button>
      </div>

      <Row gutter={[24, 24]}>
        {forYouProducts.map(product => (

          <Col key={product.id} xs={24} md={10} lg={8} xl={6}>
            <ProductCard product={product} prefrences={{ hideWishlistBtn: true, hoverable: true }} />
          </Col>
        )
        )}
      </Row>
    </div>
  )
}

export default ForYou
