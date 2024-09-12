
import './App.css'


import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import BreadCrumbsDemo from './layout/BreadCrumbsDemo'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BreadCrumbsDemo />}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>     
    </>
  )
}


export default App
