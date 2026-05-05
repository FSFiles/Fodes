import { useApp } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

export default function CartPage() {
  const { cart, cartCount, cartTotal, addToCart, removeFromCart, clearCart } = useApp()
  const navigate = useNavigate()

  const delivery = cartTotal > 299 ? 0 : 49
  const tax = Math.round(cartTotal * 0.05)
  const grandTotal = cartTotal + delivery + tax

  if (cartCount === 0) return (
    <div className="min-h-screen bg-warm flex flex-col items-center justify-center px-4">
      <div className="text-8xl mb-6">🛒</div>
      <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-8">Add some delicious items to get started!</p>
      <Link to="/shop" className="btn-primary">Browse Menu 🍽️</Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-warm pb-10">
      <div className="max-w-2xl mx-auto px-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-3xl font-bold text-gray-900">Your Cart 🛒</h1>
          <button onClick={clearCart} className="text-red-400 hover:text-red-600 text-sm font-semibold transition-colors">Clear all</button>
        </div>

        {/* Cart items */}
        <div className="space-y-3 mb-6">
          {cart.map(item => (
            <div key={item.id} className="card p-4 flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${item.category === 'grocery' ? 'bg-teal/10' : 'bg-orange-50'}`}>
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.unit || item.time}</p>
                <p className={`font-bold ${item.category === 'grocery' ? 'text-teal' : 'text-primary'}`}>₹{item.price}</p>
              </div>
              {/* Qty controls */}
              <div className={`flex items-center gap-2 rounded-xl px-2 py-1.5 ${item.category === 'grocery' ? 'bg-teal' : 'bg-primary'}`}>
                <button onClick={() => removeFromCart(item.id)} className="text-white font-bold w-6 h-6 flex items-center justify-center text-xl hover:bg-white/20 rounded-lg">−</button>
                <span className="text-white font-bold text-sm w-5 text-center">{item.qty}</span>
                <button onClick={() => addToCart(item)}     className="text-white font-bold w-6 h-6 flex items-center justify-center text-xl hover:bg-white/20 rounded-lg">+</button>
              </div>
              <div className="text-right min-w-[60px]">
                <p className="font-bold text-gray-900">₹{item.price * item.qty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bill summary */}
        <div className="card p-5 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Bill Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Item total</span><span className="font-semibold text-gray-900">₹{cartTotal}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery fee</span>
              <span className={`font-semibold ${delivery === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                {delivery === 0 ? 'FREE 🎉' : `₹${delivery}`}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>GST (5%)</span><span className="font-semibold text-gray-900">₹{tax}</span>
            </div>
            {delivery === 0 && (
              <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-2 rounded-xl">
                🎉 You saved ₹49 on delivery!
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg">
              <span>Total</span><span className="text-primary">₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Delivery not free notice */}
        {delivery > 0 && (
          <div className="bg-orange-50 border border-orange-100 rounded-2xl px-4 py-3 mb-5 text-sm text-orange-700 font-medium">
            Add ₹{299 - cartTotal} more for <strong>FREE delivery</strong> 🚚
          </div>
        )}

        <button onClick={() => navigate('/payment')} className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2">
          Proceed to Payment • ₹{grandTotal} →
        </button>
      </div>
    </div>
  )
}
