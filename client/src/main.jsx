import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Testimonials from './components/pages/Testimonials.jsx'
import Events from './components/pages/Events.jsx'
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import TermsConditions from './components/pages/TermsConditions.jsx'
import Support from './components/pages/Support.jsx'
import Login from './components/pages/admin/Login.jsx'
import Dashboard from './components/pages/admin/Dashboard.jsx'
import Blog from './components/pages/Blog.jsx'

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
        path: "/portfolio",
        element: <Portfolio/>,
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
        path: "/events",
        element: <Events/>,
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
      {
        path: "/admin/dashboard",
        element: <Dashboard/>
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
