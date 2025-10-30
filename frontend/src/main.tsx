import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '@/app/store.ts'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
import "./styles/main.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Exclusive Store | Home</title>
        <meta name="description" content="test test"  />
        <meta name="keywords" content=''/>
      </Helmet>
      <Provider store={store}>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#DB4444",
                colorSuccess: "#00FF66",
                borderRadius: 4,
                fontFamily: "Poppins",

              }
            }}
          >
            <App />
          </ConfigProvider>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
