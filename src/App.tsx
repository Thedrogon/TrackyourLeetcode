
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './components/Signin'
import Header from './components/Header'
import LeetcodeTracker from './components/LeetcodeTracker'
function App() {
  

  return (
      <div>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/auth/leetcode" element={<LeetcodeTracker/>} />
            <Route path="/Signin" element={<Signin/>} />
        </Routes>
      </div>
  )
}

export default App
