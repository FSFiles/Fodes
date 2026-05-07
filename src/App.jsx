import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from '../src/context/AppContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage      from './pages/HomePage'
import AuthPage      from './pages/AuthPage'
import LocationPage  from './pages/LocationPage'
import NamePage      from './pages/NamePage'
import ShopPage      from './pages/ShopPage'
import RestaurantPage from './pages/RestaurantPage'
import MenuPage      from './pages/MenuPage'
import CartPage      from './pages/CartPage'
import PaymentPage   from './pages/PaymentPage'
import SuccessPage   from './pages/SuccessPage'

function ProtectedRoute({ children }) {
  const { user } = useApp()
  if (!user?.phone) return <Navigate to="/auth" replace />
  if (!user?.city)  return <Navigate to="/location" replace />
  if (!user?.name)  return <Navigate to="/name" replace />
  return children
}

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"                   element={<HomePage />} />
        <Route path="/auth"               element={<AuthPage />} />
        <Route path="/location"           element={<LocationPage />} />
        <Route path="/name"               element={<NamePage />} />
        <Route path="/shop"               element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
        <Route path="/restaurants"        element={<ProtectedRoute><RestaurantPage /></ProtectedRoute>} />
        <Route path="/restaurant/:id"     element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="/cart"               element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/payment"            element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
        <Route path="/success"            element={<ProtectedRoute><SuccessPage /></ProtectedRoute>} />
        <Route path="*"                   element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}
