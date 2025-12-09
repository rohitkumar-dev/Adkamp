import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Works from './pages/Works.jsx'
import Support from './pages/Support.jsx'
import Blog from './pages/Blog.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import Login from './pages/admin/Login.jsx'
import DashboardLayout from './pages/admin/DashboardLayout.jsx'
import ProtectedRoute from './admin/ProtectedRoute.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/testimonials",
        element: <Testimonials/>,
      },
      {
        path: "/works",
        element: <Works/>,
      },
      {
        path: "/support",
        element: <Support/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions/>,
      },
      {
        path: "/admin/login",
        element: <Login/>
      },
      // {
      //   path: "/admin/dashboard",
      //   element: <Dashboard/>
      // },
       {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        )
      },

      {
        path: "*",
        element: <Navigate to="/" replace/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
