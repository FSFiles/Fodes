import { useApp } from '../context/AppContext'

export default function ProductCard({ item, type = 'food' }) {
  const { addToCart, removeFromCart, getQty } = useApp()
  const qty = getQty(item.id)
  const isGrocery = type === 'grocery'

  return (
    <div className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-200" style={{transform: 'translateY(0)', transition: 'all 0.2s'}}>
      {/* Real Image */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => {
            e.target.onerror = null
            e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80`
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Tag */}
        {item.tag && (
          <span className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
            item.tag === 'Bestseller' ? 'bg-yellow-400 text-yellow-900' :
            item.tag === 'Organic'    ? 'bg-green-500 text-white' :
            item.tag === 'Fresh'      ? 'bg-teal-500 text-white' :
            item.tag === 'Spicy'      ? 'bg-red-500 text-white' :
            item.tag === 'Healthy'    ? 'bg-green-500 text-white' :
            item.tag === 'Trending'   ? 'bg-pink-500 text-white' :
            item.tag === 'Seasonal'   ? 'bg-orange-500 text-white' :
            item.tag === 'Natural'    ? 'bg-emerald-500 text-white' :
            item.tag === 'Sweet'      ? 'bg-purple-500 text-white' :
            'bg-orange-500 text-white'
          }`}>
            {item.tag}
          </span>
        )}

        {/* Rating badge on image */}
        {item.rating && (
          <span className="absolute bottom-2 right-2 bg-white/90 text-yellow-600 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
            ⭐ {item.rating}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{item.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5 truncate">{item.desc}</p>

        {/* Meta */}
        <div className="flex items-center gap-2 mt-1">
          {item.time && <span className="text-xs text-gray-400 flex items-center gap-0.5">🕐 {item.time}</span>}
          {item.unit && <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{item.unit}</span>}
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-3">
          <span className={`font-bold text-base ${isGrocery ? 'text-teal-600' : 'text-orange-500'}`}>₹{item.price}</span>

          {qty === 0 ? (
            <button
              onClick={() => addToCart(item)}
              className={`text-sm font-bold px-3 py-1.5 rounded-xl transition-all active:scale-95 border ${
                isGrocery
                  ? 'bg-teal-50 text-teal-600 hover:bg-teal-500 hover:text-white border-teal-200'
                  : 'bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white border-orange-200'
              }`}
            >
              + ADD
            </button>
          ) : (
            <div className={`flex items-center gap-2 rounded-xl px-1.5 py-1 ${isGrocery ? 'bg-teal-500' : 'bg-orange-500'}`}>
              <button onClick={() => removeFromCart(item.id)} className="text-white font-bold w-6 h-6 flex items-center justify-center text-lg leading-none hover:bg-white/20 rounded-lg transition-colors">−</button>
              <span className="text-white font-bold text-sm w-4 text-center">{qty}</span>
              <button onClick={() => addToCart(item)}  className="text-white font-bold w-6 h-6 flex items-center justify-center text-lg leading-none hover:bg-white/20 rounded-lg transition-colors">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
