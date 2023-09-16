import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
import { RegisterPage } from "./pages/Register"

import { AuthProvider, RequireAuth } from "react-auth-kit";
import { DashboardPage } from "./pages/Dashboard";
import { BegginerPage, ProfessionalPage } from "./pages/Contract";

function App() {
  return (
    <AuthProvider authName="_auth" authType="cookie" cookieDomain={window.location.hostname}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Outlet/>}/>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/dashboard" element={
              <RequireAuth loginPath="/login">
                <DashboardPage />
              </RequireAuth>
            } />
            <Route path="/order/begginer" element={
              <RequireAuth loginPath="/login">
                <BegginerPage />
              </RequireAuth>
            }/>
            <Route path="/order/professional" element={
              <RequireAuth loginPath="/login">
                <ProfessionalPage />
              </RequireAuth>
            }/>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App