import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function NamePage() {
  const { setUser } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function handleSubmit() {
    if (!name.trim() || name.trim().length < 2) { setError('Please enter your full name'); return }
    setUser(prev => ({ ...(prev || {}), name: name.trim() }))
    navigate('/shop')
  }

  return (
    <div className="min-h-screen bg-warm flex items-center justify-center px-4 page-background">
      <div className="w-full max-w-md">
        <div className="card p-8 shadow-xl text-center">
          <div className="text-7xl mb-6">👋</div>
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">What's your name?</h1>
          <p className="text-gray-500 mb-8">We'd love to personalize your experience!</p>

          <div className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); setError('') }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your full name"
              className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-center"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button onClick={handleSubmit} disabled={!name.trim()} className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed">
              Let's Go! 🚀
            </button>
          </div>

          {/* Fun suggestions */}
          <div className="mt-6">
            <p className="text-xs text-gray-400 mb-3">Quick picks</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Leon', 'Pranesh', 'Diana', 'Baskaran', 'Jesy'].map(n => (
                <button key={n} onClick={() => setName(n)} className="text-xs bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-600 px-3 py-1.5 rounded-full font-medium transition-colors">
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
