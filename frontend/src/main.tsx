import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
import "./styles/main.scss"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token:{
            colorPrimary: "#DB4444",
            colorSuccess:"#00FF66",
            borderRadius: 4,
            fontFamily:"Poppins",
          }
        }}
        >
        <App />
        </ConfigProvider>
      </HelmetProvider>
      </BrowserRouter>
  </StrictMode>,
)
