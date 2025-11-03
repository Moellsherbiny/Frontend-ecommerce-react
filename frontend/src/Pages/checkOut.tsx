import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Navigate } from "react-router";
import SEO from "@/Components/SEO";
import Breadcrumb from "@/Components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import CheckoutSteps from "@/Components/Checkout/CheckoutSteps";
import OrderSummary from "@/Components/Checkout/OrderSummary";
import styles from "@/styles/components/Checkout/Checkout.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;


const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
function Checkout ()  {
  const { isLoggedIn } = useAuth();
  const cart = useSelector((state: RootState) => state.cart.items);
  console.log(STRIPE_PUBLIC_KEY);
  
  if (!isLoggedIn) return <Navigate to="/auth/signup" />;

  const breadItems = [
    { title: "Account" },
    { title: "My Account" },
    { title: "Product" },
    { title: "View Cart" },
    { title: "CheckOut", path: "/checkout" },
  ];

  return (
    <>
      <SEO
        title="Checkout | Exclusive"
        description="Complete your purchase securely on Exclusive. Fast, safe, and simple checkout process."
        url="/checkout"
      />

      <div className={styles.checkout}>
        <div className="container">
          <Breadcrumb chain={breadItems} />
          <div className={styles.checkoutCard}>
            <Row gutter={[24, 24]} justify="space-between">
              <Col xs={24} md={12} style={{ padding: 5 }}>
              <Elements stripe={stripePromise}>
                <CheckoutSteps />
              </Elements>
              </Col>

              <Col xs={24} md={10}>
                <OrderSummary cart={cart} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
