import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { restaurants } from '../data/products'

export default function RestaurantPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all') // all | veg | non-veg

  const filtered = restaurants.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase())
    if (filter === 'veg') return matchSearch && r.tags.some(t => t.toLowerCase().includes('veg'))
    return matchSearch
  })

  return (
    <div className="min-h-screen bg-[#FFFBF7] pb-10 page-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-2xl">🍽️ Order Food</h2>
          <p className="text-white/80 text-sm mt-1">Choose from top restaurants near you</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-5">
        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input type="text" placeholder="Search restaurants or cuisine..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-white border-2 border-gray-100 rounded-2xl pl-11 pr-4 py-3 font-semibold focus:outline-none focus:border-orange-400 transition-all shadow-sm"
          />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: '🍽️ All' },
            { id: 'veg', label: '🥦 Pure Veg' },
          ].map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                filter === f.id
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'
              }`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Restaurant cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map(r => (
            <button key={r.id} onClick={() => navigate(`/restaurant/${r.id}`)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden">
                <img src={r.cover} alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={e => { e.target.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Offer badge */}
                {r.offer && (
                  <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    🏷️ {r.offer}
                  </div>
                )}
                {/* Tags */}
                <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                  {r.tags.map(t => (
                    <span key={t} className="bg-white/90 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{r.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{r.cuisine}</p>
                  </div>
                  <div className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-xl flex-shrink-0 flex items-center gap-1">
                    ⭐ {r.rating}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1">🕐 {r.time}</span>
                  <span>•</span>
                  <span>Min ₹{r.minOrder}</span>
                </div>

                {/* Menu preview count */}
                <div className="mt-3 flex items-center gap-2">
                  {['veg','non-veg'].map(type => {
                    const count = r.menu.filter(c => c.type === type).reduce((s,c) => s + c.items.length, 0)
                    if (!count) return null
                    return (
                      <span key={type} className={`text-xs font-bold px-2 py-1 rounded-full ${
                        type === 'veg' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                      }`}>
                        {type === 'veg' ? '🟢' : '🔴'} {count} {type === 'veg' ? 'Veg' : 'Non-Veg'}
                      </span>
                    )
                  })}
                  <span className="ml-auto text-xs text-orange-500 font-bold">View Menu →</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-3">🍽️</p>
            <p className="font-semibold">No restaurants found</p>
          </div>
        )}
      </div>
    </div>
  )
}
