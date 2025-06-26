import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './component/ThemeContext'
import AuthProvider from './Context/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider><AuthProvider><RouterProvider router={router} /></AuthProvider></ThemeProvider>
    <ToastContainer></ToastContainer>,
  </StrictMode>,
)
