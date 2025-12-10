import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"

import Homepage from "./pages/Homepage"
import { UserProvider } from "../context/UserContext"

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </UserProvider>
  )
}

export default App
