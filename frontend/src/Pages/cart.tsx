import React, { useMemo } from "react";
import { Table, Button, InputNumber, Card, Row, Col, Typography, Space, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/app/store";
import { removeFromCart, saveCartToLocalStorage, updateQuantity } from "@/features/products/cartSlice";
import styles from "@/styles/components/Product/cartPage.module.scss";
import { Link } from "react-router";
import CouponCode from "@/Components/Products/CoponCode"
const { Title, Text } = Typography;

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};


const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (id: number, value: number | null) => {
    if (value)
      dispatch(updateQuantity({ id, quantity: value }))
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id))
  };

  const subtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      render: (_: string, record: CartItem) => (
        <Space className={styles.productInfo}>
          <div className={styles.productImage}>

            <Button
              className={styles.removeBtn}
              type="text"
              icon={<CloseOutlined />}
              onClick={() => handleRemove(record.id)}
            />
            <img
              src={record.image}
              alt={record.name}
              width={60}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>
          <Text strong>{record.name}</Text>
        </Space>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (_: number, record: CartItem) => (
        <InputNumber
          min={1}
          value={record.quantity}
          formatter={(value)=>( value && value < 10 ? `0${value}` : `${value}`)}
          parser={(value) => parseInt(value ?? "0", 10)}
          className={styles.customInput}
          onChange={(val) => handleQuantityChange(record.id, val)}
        />
      ),
    },
    {
      title: "Subtotal",
      render: (_: string, record: CartItem) => `$${record.price * record.quantity}`,
    },
  ];

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <Title level={3}>Shopping Cart</Title>

        <Table
          columns={columns}
          dataSource={cart}
          rowKey="id"
          pagination={false}
          className={styles.cartTable}
        />
        <Space className={styles.btnContainer} >
          <Link to="/products">
            <Button className={styles.btn}>Return To Shop</Button>
          </Link>
          <Button onClick={()=>{saveCartToLocalStorage(cart)}} className={styles.btn} >Update Cart</Button>

        </Space>
        <Row gutter={[32, 32]} justify="space-between">
          <Col xs={24} md={10}>
            <CouponCode />
          </Col>

          <Col xs={24} md={10}>
            
          
            <Card className={styles.cartTotal}>
              <Title level={5}>Cart Total</Title>
              <Divider />
              <Space direction="vertical" style={{ width: "100%" }}>
                <Row justify="space-between">
                  <Text>Subtotal:</Text>
                  <Text strong>${subtotal}</Text>
                </Row>
                <Row justify="space-between">
                  <Text>Shipping:</Text>
                  <Text>Free</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text strong>Total:</Text>
                  <Text strong>${subtotal}</Text>
                </Row>
                <Link to="/checkout">
                <Button type="primary" style={{display:"flex", margin:"0 auto", padding:"28px", width:"80%"}} >
                  Proceed to Checkout
                </Button>
                </Link>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartPage;
