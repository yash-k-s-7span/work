
import './App.css'
import MyForm from './forms/MyForm'
import PropsDemo from './props/PropsDemo'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Home from './router/Home'
import About from './router/About'
import Layout from './layout/Layout'
import UseMemo from './use-memo/UseMemo'
import MyEffect from './use-effect/MyEffect'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='home' index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    )
  )
  return (
    <>
      {/* <PropsDemo title="Yash"/> */}
      {/* <RouterProvider routes={router}/> */}
      {/* <UseMemo/> */}
      <MyEffect/>
    </>
  )
}

export default App
