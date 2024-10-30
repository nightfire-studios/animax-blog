
import './App.css'
import Blog from './Blog'
import Dashboard from './Dashboard'
import { Routes,Route,useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  const location = useLocation()
  return (
    <>
        <Navbar />
        <Routes location={location} key={location.pathname}>
        <Route index element={<Dashboard/>} />
        <Route  path="/dashboards" element={<Blog />} />
          
        </Routes>
 
    </>
  )
}

export default App
