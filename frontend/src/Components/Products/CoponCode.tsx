import { Space, Button, Input } from 'antd'
import styles from "@/styles/components/Product/coponeCode.module.scss"


function CoponCode() {
  return (
    <Space className={styles.coponeCode}>
      <Input
        type="text"
        placeholder="Coupon Code"
        className={styles.coponeCode__input}
      />
      <Button type="primary" className={styles.coponeCode__btn} style={{ padding: "30px" }}>
        Apply Coupon
      </Button>
    </Space>
  )
}

export default CoponCode
