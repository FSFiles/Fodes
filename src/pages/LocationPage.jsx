import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { cities } from '../data/products'

export default function LocationPage() {
  const { setUser } = useApp()
  const navigate = useNavigate()
  const [selected, setSelected] = useState('')
  const [search, setSearch] = useState('')
  const [detecting, setDetecting] = useState(false)

  const filtered = cities.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.state.toLowerCase().includes(search.toLowerCase())
  )

  function choose(city) {
    setSelected(city)
    setUser(prev => ({ ...(prev || {}), city }))
    setTimeout(() => navigate('/name'), 300)
  }

  function detectLocation() {
    setDetecting(true)
    navigator.geolocation?.getCurrentPosition(
      () => { choose('Current Location') },
      () => { setDetecting(false); alert('Could not detect location. Please choose a city.') }
    )
  }

  return (
    <div className="min-h-screen bg-warm px-4 py-10">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📍</div>
          <h1 className="font-display text-3xl font-bold text-gray-900">Where are you?</h1>
          <p className="text-gray-500 mt-2">Select your city to see nearby restaurants & stores</p>
        </div>

        {/* Detect location button */}
        <button onClick={detectLocation} disabled={detecting}
          className="w-full flex items-center gap-3 bg-primary/10 hover:bg-primary/20 border-2 border-primary/20 hover:border-primary/40 text-primary font-bold py-4 px-5 rounded-2xl mb-6 transition-all">
          <span className="text-2xl">{detecting ? '⏳' : '🎯'}</span>
          <div className="text-left">
            <p className="font-bold">{detecting ? 'Detecting...' : 'Use Current Location'}</p>
            <p className="text-xs font-normal text-primary/70">Allow location access for best results</p>
          </div>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400 font-medium">OR CHOOSE A CITY</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-2xl pl-11 pr-4 py-3 font-semibold focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* FreshBite logo watermark */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-base">🍽️</div>
          <span className="font-bold text-gray-500 text-sm">Popular Cities on FreshBite</span>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map(c => (
            <button
              key={c.name}
              onClick={() => choose(c.name)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all hover:shadow-md active:scale-95 ${
                selected === c.name
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-gray-100 bg-white hover:border-primary/40'
              }`}
            >
              <span className="text-3xl">{c.emoji}</span>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{c.name}</p>
                <p className="text-xs text-gray-400">{c.state}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-2">🏙️</p>
            <p>No cities found for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
