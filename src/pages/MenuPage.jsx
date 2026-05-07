import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { restaurants } from '../data/products'
import { useApp } from '../context/AppContext'
import { Link } from 'react-router-dom'

export default function MenuPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, removeFromCart, getQty, cartCount, cartTotal } = useApp()
  const [typeFilter, setTypeFilter] = useState('all') // all | veg | non-veg

  const restaurant = restaurants.find(r => r.id === id)
  if (!restaurant) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400">
      <div className="text-center"><p className="text-5xl mb-3">🍽️</p><p>Restaurant not found</p></div>
    </div>
  )

  const filteredMenu = restaurant.menu.filter(cat =>
    typeFilter === 'all' || cat.type === typeFilter
  )

  const totalVeg    = restaurant.menu.filter(c => c.type === 'veg').reduce((s,c) => s + c.items.length, 0)
  const totalNonVeg = restaurant.menu.filter(c => c.type === 'non-veg').reduce((s,c) => s + c.items.length, 0)

  return (
    <div className="min-h-screen bg-[#FFFBF7] pb-32 page-background">
      {/* Cover */}
      <div className="relative h-56 overflow-hidden">
        <img src={restaurant.cover} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <button onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors">
          ← Back
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="font-bold text-white text-2xl">{restaurant.name}</h1>
          <p className="text-white/80 text-sm">{restaurant.cuisine}</p>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">⭐ {restaurant.rating}</span>
            <span className="text-white/90 text-xs font-medium">🕐 {restaurant.time}</span>
            <span className="text-white/90 text-xs font-medium">Min ₹{restaurant.minOrder}</span>
            {restaurant.offer && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg">🏷️ {restaurant.offer}</span>
            )}
          </div>
        </div>
      </div>

      {/* Veg / Non-Veg filter */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex gap-2">
          {[
            { id: 'all',     label: '🍽️ All Items',         count: totalVeg + totalNonVeg },
            { id: 'veg',     label: '🟢 Veg',               count: totalVeg,    color: 'green' },
            { id: 'non-veg', label: '🔴 Non-Veg',           count: totalNonVeg, color: 'red' },
          ].map(f => (
            <button key={f.id} onClick={() => setTypeFilter(f.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
                typeFilter === f.id
                  ? f.id === 'veg' ? 'bg-green-500 text-white border-green-500'
                  : f.id === 'non-veg' ? 'bg-red-500 text-white border-red-500'
                  : 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}>
              {f.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                typeFilter === f.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu sections */}
      <div className="max-w-3xl mx-auto px-4 pt-5 space-y-8">
        {filteredMenu.map(section => (
          <div key={section.category}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-sm border-2 flex-shrink-0 ${
                section.type === 'veg' ? 'border-green-500' : 'border-red-500'
              }`}>
                <div className={`w-full h-full rounded-sm scale-50 ${
                  section.type === 'veg' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
              <h2 className="font-bold text-gray-900 text-lg">{section.category}</h2>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                section.type === 'veg' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
              }`}>
                {section.items.length} items
              </span>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {section.items.map(item => {
                const qty = getQty(item.id)
                return (
                  <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 hover:shadow-md transition-shadow">
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      {/* Veg/Non-veg dot */}
                      <div className={`w-4 h-4 rounded-sm border-2 mb-1 flex items-center justify-center ${
                        section.type === 'veg' ? 'border-green-500' : 'border-red-500'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          section.type === 'veg' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                      </div>

                      <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                      <p className="text-orange-500 font-bold text-base mt-0.5">₹{item.price}</p>

                      <div className="flex items-center gap-2 mt-1">
                        {item.rating && (
                          <span className="text-xs text-gray-500 flex items-center gap-0.5">⭐ {item.rating}</span>
                        )}
                        {item.tag && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            item.tag === 'Bestseller' ? 'bg-yellow-100 text-yellow-700' :
                            item.tag === 'Spicy'      ? 'bg-red-100 text-red-600' :
                            item.tag === 'Healthy'    ? 'bg-green-100 text-green-700' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {item.tag === 'Bestseller' ? '🏆' : item.tag === 'Spicy' ? '🌶️' : '✨'} {item.tag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>

                    {/* Image + Add button */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.name}
                          className="w-full h-full object-cover"
                          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80' }}
                        />
                      </div>

                      {qty === 0 ? (
                        <button onClick={() => addToCart({...item, category: 'food'})}
                          className="w-full bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-sm py-1.5 px-4 rounded-xl transition-all active:scale-95">
                          ADD
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-orange-500 rounded-xl px-2 py-1.5">
                          <button onClick={() => removeFromCart(item.id)} className="text-white font-bold w-5 h-5 flex items-center justify-center text-lg leading-none hover:bg-white/20 rounded transition-colors">−</button>
                          <span className="text-white font-bold text-sm w-4 text-center">{qty}</span>
                          <button onClick={() => addToCart({...item, category: 'food'})} className="text-white font-bold w-5 h-5 flex items-center justify-center text-lg leading-none hover:bg-white/20 rounded transition-colors">+</button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Floating cart bar */}
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
