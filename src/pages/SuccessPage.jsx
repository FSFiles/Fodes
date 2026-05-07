import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SuccessPage() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState('show')  // show | flying | done
  const orderId = `FB${Date.now().toString().slice(-6)}`
  const eta = Math.floor(Math.random() * 15) + 25

  useEffect(() => {
    // After 1.8s show tick, start flying after 2.5s
    const t1 = setTimeout(() => setPhase('flying'), 2500)
    const t2 = setTimeout(() => setPhase('done'), 4000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="min-h-screen bg-warm flex flex-col items-center justify-center px-4 relative overflow-hidden page-background">
      {/* Flying tick overlay */}
      {(phase === 'show' || phase === 'flying') && (
        <div
          className={`fixed left-1/2 top-1/2 z-50 pointer-events-none
            w-28 h-28 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl shadow-2xl
            ${phase === 'flying' ? 'animate-flyToProfile' : 'animate-bounceIn'}`}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          ✓
        </div>
      )}

      {/* Background confetti dots */}
      {phase !== 'flying' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['🎉','🎊','⭐','✨','🌟','🎈'].map((e, i) => (
            <span key={i} className="absolute text-3xl animate-bounce opacity-30"
              style={{
                left: `${10 + i * 16}%`,
                top: `${5 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${1.5 + i * 0.2}s`
              }}>
              {e}
            </span>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="text-center max-w-sm w-full relative z-10">
        {/* Static tick after animation done */}
        {phase === 'done' && (
          <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl mx-auto mb-6 shadow-xl animate-bounceIn">
            ✓
          </div>
        )}

        {phase !== 'done' && <div className="h-36" />}

        <h1 className="font-display text-4xl font-bold text-gray-900 mb-2 animate-fadeInUp">Order Placed! 🎉</h1>
        <p className="text-gray-500 text-lg mb-6 animate-fadeInUp">
          Your food is being prepared with love!
        </p>

        {/* Order details */}
        <div className="card p-5 mb-6 text-left animate-fadeInUp">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500 font-medium">Order ID</p>
            <p className="font-bold text-gray-900">#{orderId}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500 font-medium">Estimated delivery</p>
            <p className="font-bold text-green-600">{eta} – {eta + 5} mins 🚀</p>
          </div>
          {/* Timeline */}
          <div className="mt-4 space-y-3">
            {[
              { label: 'Order Confirmed',  icon: '✅', done: true },
              { label: 'Preparing your food', icon: '👨‍🍳', done: true },
              { label: 'Out for delivery', icon: '🛵', done: false },
              { label: 'Delivered',        icon: '🏠', done: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                  s.done ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>{s.icon}</div>
                <span className={`text-sm font-semibold ${s.done ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
                {s.done && <span className="ml-auto text-xs text-green-500 font-bold">✓</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link to="/shop" className="flex-1 btn-outline py-3 text-sm">Continue Shopping</Link>
          <Link to="/shop" className="flex-1 btn-primary py-3 text-sm">Track Order 🛵</Link>
        </div>

        {phase !== 'done' && (
          <p className="text-xs text-gray-400 mt-4 animate-pulse">✨ Your order confirmation is flying to your profile...</p>
        )}
      </div>
    </div>
  )
}
