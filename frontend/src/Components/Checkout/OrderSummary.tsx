import ReviewOrder from "@/Components/Checkout/ReviewOrder";

const OrderSummary = ({
  cart,
}: {
  cart: any[];
}) => {
  

  return (
    <ReviewOrder
      cart={cart}/>
  );
};

export default OrderSummary;
