import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '@/app/store.ts'
import {App as AntApp, ConfigProvider } from 'antd'
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
              components: {
                Input:{
                  borderRadius:4,
                  paddingInline:10,
                  paddingBlock:10,
                  fontFamily:"Poppins", 
                  colorBorder:"rgba(0,0,0,.5)",
                
                }
              },
              token: {
                colorPrimary: "#DB4444",
                colorSuccess: "#00FF66",
                borderRadius: 4,
                fontFamily: "Poppins",

              }
            }}
          >
            <AntApp>
              <App />
            </AntApp>
          </ConfigProvider>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
