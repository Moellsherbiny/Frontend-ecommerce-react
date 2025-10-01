import { Button, Space } from 'antd'
import { Helmet } from 'react-helmet-async'
import Layout from "./Components/Layout"
function App() {
 
  return (
      <Layout>
        
        <Helmet>
         <title>Exclusive | Best E-Commerce Shop</title>
          <meta name="description" content="Buy electronics, fashion, and more at Exclusive. Fast delivery and best deals." />
          <meta name="keywords" content="ecommerce, shop, electronics, fashion, deals" />
      </Helmet>
      </Layout>
  )

}

export default App
