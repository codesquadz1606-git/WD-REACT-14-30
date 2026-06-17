import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import cartStore from './Class 5/store/cartStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>

    
    <App />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />

    </Provider>
  </StrictMode>,
)
