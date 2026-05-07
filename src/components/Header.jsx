import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { user, cartCount, logout } = useApp()
  const navigate = useNavigate()
  const location = useLocation()

  const hideCart = ['/', '/auth', '/location', '/name'].includes(location.pathname)

  return (
    <header className="sticky top-0 z-50 bg-orange-400 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to={user ? '/shop' : '/'} className="flex items-center gap-2">
          <div className='w-14'> <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" alt="" /></div>
          <span className="font-display text-xl font-bold text-gray-900">Fooodes<span className="text-primary"></span></span>
        </Link>

        {/* Location pill */}
        {user?.city && (
          <button onClick={() => navigate('/location')} className="hidden sm:flex items-center gap-1.5 bg-orange-50 text-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-orange-100 hover:bg-orange-100 transition-colors">
            <span className='w-8'><img src="https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small/3d-render-red-pin-map-location-pointer-icon-png.png" alt="" /></span>
            <span>{user.city}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3">
          {!hideCart && (
            <Link to="/cart" className="relative p-2 hover:bg-gray-50 rounded-xl transition-colors">
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounceIn">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
          )}

          {/* Profile */}
          {user ? (
            <div className="relative group">
              <button id="profile-icon" className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 rounded-xl px-3 py-2 transition-colors">
                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {user.name?.[0]?.toUpperCase() || '👤'}
                </div>
                <span className="hidden sm:block text-sm font-semibold text-gray-700">{user.name?.split(' ')[0]}</span>
              </button>
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-4 border-b border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.phone}</p>
                </div>
                <div className="p-2">
                  <button onClick={() => navigate('/shop')} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-xl text-gray-700 font-medium flex items-center gap-2">
                    <span>🏠</span> Home
                  </button>
                  <button onClick={() => navigate('/cart')} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-xl text-gray-700 font-medium flex items-center gap-2">
                    <span>🛒</span> My Cart
                  </button>
                  <button onClick={logout} className="w-full text-left px-3 py-2 text-sm hover:bg-red-50 rounded-xl text-red-500 font-medium flex items-center gap-2">
                    <span>🚪</span> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="btn-primary text-sm py-2 px-4">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  )
}
