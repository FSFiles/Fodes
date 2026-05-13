import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SuccessPage() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState('show')  // show | flying | done | map
  const orderId = `FB${Date.now().toString().slice(-6)}`
  const eta = Math.floor(Math.random() * 15) + 25

  useEffect(() => {
    // show tick → fly → done → reveal map
    const t1 = setTimeout(() => setPhase('flying'), 2500)
    const t2 = setTimeout(() => setPhase('done'), 4000)
    const t3 = setTimeout(() => setPhase('map'), 5200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
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
      {(phase === 'show' || phase === 'done') && (
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
      <div className="text-center max-w-lg w-full relative z-10 pb-10">

        {/* Static tick after animation */}
        {(phase === 'done' || phase === 'map') && (
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-5 shadow-xl animate-bounceIn">
            ✓
          </div>
        )}

        {phase !== 'done' && phase !== 'map' && <div className="h-36" />}

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
              { label: 'Order Confirmed',    icon: '✅', done: true },
              { label: 'Preparing your food', icon: '👨‍🍳', done: true },
              { label: 'Out for delivery',   icon: '🛵', done: false },
              { label: 'Delivered',          icon: '🏠', done: false },
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

        {/* ── Chennai Delivery Map ── shown after tick animation */}
        {phase === 'map' && (
          <div
            className="animate-fadeInUp mb-6"
            style={{ animationDuration: '0.6s' }}
          >
            {/* Section header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📍</span>
              <p className="font-bold text-gray-800 text-lg">Delivery Location – Chennai</p>
              <span className="ml-auto text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full animate-pulse">
                🟢 Live
              </span>
            </div>

            {/* Map card */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-green-200">
              {/* Rider info bar */}
              <div className="bg-green-500 text-white px-4 py-2 flex items-center gap-3">
                <span className="text-2xl">🛵</span>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm">Ravi Kumar • Delivery Partner</p>
                  <p className="text-xs text-green-100">En route · {eta - 5} mins away</p>
                </div>
                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">
                  📞 Call
                </div>
              </div>

              {/* OpenStreetMap iframe – Chennai city centre */}
              <iframe
                title="Chennai Delivery Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.2200%2C13.0300%2C80.2900%2C13.0900&layer=mapnik&marker=13.0600%2C80.2550"
                width="100%"
                height="320"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
              />

              {/* Bottom info strip */}
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">📍</span>
                  <span className="text-sm text-gray-600 font-medium">Chennai, Tamil Nadu</span>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=13.0600&mlon=80.2550#map=14/13.0600/80.2550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-bold underline"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          <Link to="/shop" className="flex-1 btn-outline py-3 text-sm">Continue Shopping</Link>
          <Link to="/shop" className="flex-1 btn-primary py-3 text-sm">Track Order 🛵</Link>
        </div>

        {phase !== 'done' && phase !== 'map' && (
          <p className="text-xs text-gray-400 mt-4 animate-pulse">✨ Your order confirmation is flying to your profile...</p>
        )}
      </div>
    </div>
  )
}
