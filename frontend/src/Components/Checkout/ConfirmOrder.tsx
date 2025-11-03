import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Card, Descriptions } from "antd";

const ConfirmOrder = () => {
  const shippingData = useSelector(
    (state: RootState) => state.payment.shippingData
  );
  const paymentMethod = useSelector(
    (state: RootState) => state.payment.method
  );

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Review & Confirm</h2>
      <p>Double-check your details and confirm your order.</p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <Card style={{ width: 600, textAlign: "left" }}>
          <h3>Shipping Information</h3>
          {shippingData ? (
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Full Name">{shippingData.fullName}</Descriptions.Item>
              <Descriptions.Item label="Company Name">{shippingData.companyName}</Descriptions.Item>
              <Descriptions.Item label="Street Address">{shippingData.streetAddress}</Descriptions.Item>
              <Descriptions.Item label="Address">{shippingData.address}</Descriptions.Item>
              {shippingData.apartment && (
                <Descriptions.Item label="Apartment">{shippingData.apartment}</Descriptions.Item>
              )}
              <Descriptions.Item label="City">{shippingData.city}</Descriptions.Item>
              <Descriptions.Item label="Phone">{shippingData.phone}</Descriptions.Item>
            </Descriptions>
          ) : (
            <p>No shipping data available.</p>
          )}

          <h3 style={{ marginTop: "2rem" }}>Payment Method</h3>
          <p>{paymentMethod ? paymentMethod.toUpperCase() : "Not selected"}</p>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmOrder;