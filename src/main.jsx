import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './routes/Router';
import { ToastContainer } from 'react-toastify';
import TimelineContexProvider from './context/TimelineProvider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContexProvider>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />

    </TimelineContexProvider>
     

  </StrictMode>,
)
