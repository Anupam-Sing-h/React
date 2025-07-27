import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contect from './components/Contect/Contect.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
import githubInfoLoader from './components/GitHub/GitHub.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[{
      path:"/",
      element: <Home/>
    }, {
      path:"about",
      element: <About/>
    },{
      path:"/contect",
      element: <Contect/>
    },{
      path:"/github",
      loader: () => {
    // your loader logic here
    return fetch("https://api.github.com/users/Anupam-Sing-h");
  },

      element: <GitHub/>
    }]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)