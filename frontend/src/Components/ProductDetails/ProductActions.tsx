import { Button, InputNumber } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styles from "@/styles/pages/productDetails.module.scss";
import { addToCart, updateQuantity } from "@/features/products/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { useNavigate } from "react-router";


interface Props {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
  setQuantity: (qty: number) => void;
}

function ProductActions({id, name, price, thumbnail }: Props){
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.items);
  const quantity = cart.find((item) => item.id === id)?.quantity || 1;
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      thumbnail,
      quantity,
    }));
    navigate("/cart");
  }
  const handleQuantityChange = (quantity: number) => {
    dispatch(updateQuantity({
      id,
      quantity,
    }));
  }
  return(

    <div className={styles.actions}>
    <div className={styles.qty}>
      <Button
        icon={<MinusOutlined />}
        onClick={()=>handleQuantityChange(quantity - 1)}
      />
      <InputNumber min={1} value={quantity} readOnly />
      <Button icon={<PlusOutlined />} onClick={() => handleQuantityChange(quantity + 1)} />
    </div>

    <Button type="primary" icon={<ShoppingCartOutlined />} size="large" onClick={handleAddToCart}>
      Buy Now
    </Button>
    <Button icon={<HeartOutlined />} size="large" />
  </div>
)};

export default ProductActions;
