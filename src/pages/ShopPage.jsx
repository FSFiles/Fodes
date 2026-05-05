import { useState } from 'react'
import { useApp } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import { groceryItems } from '../data/products'
import { Link, useNavigate } from 'react-router-dom'

export default function ShopPage() {
  const { user, cartCount, cartTotal } = useApp()
  const [section, setSection] = useState('food')
  const [grocerySearch, setGrocerySearch] = useState('')
  const navigate = useNavigate()

  const filteredGrocery = groceryItems.filter(i =>
    i.name.toLowerCase().includes(grocerySearch.toLowerCase()) ||
    i.desc.toLowerCase().includes(grocerySearch.toLowerCase())
  )

  function getGreeting() {
    const h = new Date().getHours()
    if (h < 12) return 'morning'
    if (h < 17) return 'afternoon'
    return 'evening'
  }

  return (
    <div className="min-h-screen bg-[#FFFBF7] pb-28">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-sm font-medium">Good {getGreeting()},</p>
          <h2 className="font-bold text-2xl">{user?.name || 'Friend'} 👋</h2>
          <p className="text-white/70 text-sm mt-1">📍 {user?.city || 'Select city'} · Delivery in 30 min</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-5">
        {/* Section switcher */}
        <div className="flex bg-gray-100 p-1 rounded-2xl mb-6 gap-1">
          <button onClick={() => setSection('food')}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              section === 'food' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'
            }`}>
            🍽️ Food
          </button>
          <button onClick={() => setSection('grocery')}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              section === 'grocery' ? 'bg-teal-500 text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'
            }`}>
            🛒 Groceries
          </button>
        </div>

        {/* ── FOOD SECTION ── */}
        {section === 'food' && (
          <div>
            {/* Hero banner */}
            <div className="rounded-3xl bg-gradient-to-r from-orange-100 to-yellow-50 border border-orange-100 p-6 mb-6 flex items-center justify-between">
              <div>
                <p className="text-orange-500 font-bold text-sm">Today's Special 🔥</p>
                <h3 className="font-bold text-2xl text-gray-900 mt-1">Top Restaurants<br/>Near You</h3>
                <p className="text-gray-500 text-sm mt-1">Free delivery on first order</p>
              </div>
              <span className="text-7xl">🍛</span>
            </div>

            {/* Quick category chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
              {[
                { label: '🍛 Biryani', id: 'r3' },
                { label: '🫓 Dosa',    id: 'r2' },
                { label: '🍕 Pizza',   id: 'r4' },
                { label: '🌮 Street',  id: 'r5' },
                { label: '🍗 Chicken', id: 'r1' },
              ].map(c => (
                <button key={c.id} onClick={() => navigate(`/restaurant/${c.id}`)}
                  className="flex-shrink-0 bg-white border-2 border-gray-100 hover:border-orange-300 hover:bg-orange-50 text-gray-700 font-bold text-sm px-4 py-2 rounded-full transition-all shadow-sm">
                  {c.label}
                </button>
              ))}
            </div>

            <h2 className="font-bold text-xl text-gray-900 mb-4">🏪 Restaurants Near You</h2>

            {/* Import restaurants inline to avoid circular */}
            <RestaurantList navigate={navigate} />
          </div>
        )}

        {/* ── GROCERY SECTION ── */}
        {section === 'grocery' && (
          <div>
            {/* Hero */}
            <div className="rounded-3xl bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 p-6 mb-6 flex items-center justify-between">
              <div>
                <p className="text-teal-600 font-bold text-sm">Farm Fresh 🌿</p>
                <h3 className="font-bold text-2xl text-gray-900 mt-1">Groceries<br/>Delivered Fast</h3>
                <p className="text-gray-500 text-sm mt-1">100% fresh. No compromises.</p>
              </div>
              <span className="text-7xl">🥬</span>
            </div>

            {/* Search */}
            <div className="relative mb-5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input type="text" placeholder="Search groceries..." value={grocerySearch}
                onChange={e => setGrocerySearch(e.target.value)}
                className="w-full bg-white border-2 border-gray-100 rounded-2xl pl-11 pr-4 py-3 font-semibold focus:outline-none focus:border-teal-400 transition-all shadow-sm"
              />
            </div>

            <h2 className="font-bold text-xl text-gray-900 mb-4">🛒 Fresh Groceries</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGrocery.map(item => <ProductCard key={item.id} item={item} type="grocery" />)}
            </div>
            {filteredGrocery.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <p className="text-5xl mb-3">🛒</p><p>No groceries found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Floating Cart Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-4 right-4 max-w-xl mx-auto z-50">
          <Link to="/cart" className="flex items-center justify-between bg-orange-500 text-white px-5 py-4 rounded-2xl shadow-2xl shadow-orange-400/40 hover:bg-orange-600 transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 rounded-xl px-2 py-1 text-sm font-bold">{cartCount} item{cartCount>1?'s':''}</span>
              <span className="font-bold">View Cart</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">₹{cartTotal}</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

// Inline mini restaurant list component
import { restaurants } from '../data/products'

function RestaurantList({ navigate }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {restaurants.map(r => (
        <button key={r.id} onClick={() => navigate(`/restaurant/${r.id}`)}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
          <div className="relative h-36 overflow-hidden">
            <img src={r.cover} alt={r.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {r.offer && (
              <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                🏷️ {r.offer}
              </div>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">{r.name}</h3>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-lg">⭐ {r.rating}</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{r.cuisine}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 font-medium">
              <span>🕐 {r.time}</span>
              <span>·</span>
              <span>Min ₹{r.minOrder}</span>
              <span className="ml-auto">
                {restaurants.find(x=>x.id===r.id)?.menu.filter(c=>c.type==='veg').length > 0 && <span className="text-green-600">🟢</span>}
                {restaurants.find(x=>x.id===r.id)?.menu.filter(c=>c.type==='non-veg').length > 0 && <span className="text-red-500">🔴</span>}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
