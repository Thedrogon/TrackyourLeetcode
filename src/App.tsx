
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLeetcode from './components/AuthLeetcode'
import Signin from './components/Signin'
import Home from './components/Home'
function App() {
  

  return (
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth/leetcode" element={<AuthLeetcode/>} />
            <Route path="/Signin" element={<Signin/>} />
        </Routes>
      </div>
  )
}

export default App
