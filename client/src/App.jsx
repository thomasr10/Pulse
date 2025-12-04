import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import PublicRoutes from "../context/PublicRoutes"
import ProtectedRoutes from "../context/ProtectedRoutes"
import Homepage from "./pages/HomePage"

function App() {

  return (
    <Routes>

      <Route path="/register" element={
        <PublicRoutes>
          <Register />
        </PublicRoutes>
      } />

      <Route path="/login" element={
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      } />

      <Route path="/" element={
        <ProtectedRoutes>
          <Homepage />
        </ProtectedRoutes>
      }/>
      
    </Routes>
  )
}

export default App
