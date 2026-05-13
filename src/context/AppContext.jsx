import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

// Order stages
export const ORDER_STAGES = [
  { label: 'Yet to Start',                    icon: '🕐', color: 'gray'   },
  { label: 'Delivery Partner Arrived to Pickup', icon: '🏪', color: 'blue'   },
  { label: 'On the Way',                      icon: '🛵', color: 'orange' },
  { label: 'Delivered',                       icon: '✅', color: 'green'  },
]

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('freshbite_user')
    return saved ? JSON.parse(saved) : null
  })
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('freshbite_cart')
    return saved ? JSON.parse(saved) : []
  })
  const [activeOrder, setActiveOrder] = useState(() => {
    const saved = localStorage.getItem('freshbite_order')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('freshbite_user', JSON.stringify(user))
    else localStorage.removeItem('freshbite_user')
  }, [user])

  useEffect(() => {
    localStorage.setItem('freshbite_cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (activeOrder) localStorage.setItem('freshbite_order', JSON.stringify(activeOrder))
    else localStorage.removeItem('freshbite_order')
  }, [activeOrder])

  function placeOrder(orderId, eta) {
    setActiveOrder({ orderId, eta, stage: 0, placedAt: Date.now() })
  }

  function advanceOrderStage() {
    setActiveOrder(prev => prev && prev.stage < ORDER_STAGES.length - 1
      ? { ...prev, stage: prev.stage + 1 }
      : prev
    )
  }

  function clearOrder() { setActiveOrder(null); localStorage.removeItem('freshbite_order') }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  function addToCart(item) {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id)
      if (exists) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => {
      const exists = prev.find(i => i.id === id)
      if (exists && exists.qty > 1) return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
      return prev.filter(i => i.id !== id)
    })
  }

  function clearCart() { setCart([]) }

  function getQty(id) {
    return cart.find(i => i.id === id)?.qty || 0
  }

  function logout() {
    setUser(null)
    setCart([])
    localStorage.clear()
  }

  return (
    <AppContext.Provider value={{ user, setUser, cart, cartCount, cartTotal, addToCart, removeFromCart, clearCart, getQty, logout, activeOrder, placeOrder, advanceOrderStage, clearOrder }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() { return useContext(AppContext) }
