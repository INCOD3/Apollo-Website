import { BrowserRouter, Routes, Route } from "react-router-dom"

import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
import { RegisterPage } from "./pages/Register"

import { AuthProvider } from "react-auth-kit";

function App() {
  return (
    <AuthProvider authName="_auth" authType="cookie" cookieDomain={window.location.hostname}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/register" Component={RegisterPage} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App