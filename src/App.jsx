
import './App.css'
import Blog from './Blog'
import Dashboard from './Dashboard'
import { Routes,Route,useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
 
    </>
  )
}

export default App
