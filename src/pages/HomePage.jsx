import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const { user } = useApp()
  const navigate = useNavigate()

  // Removed: useEffect(() => { if (user) navigate('/shop') }, [user])

  return (
    <div className="min-h-screen bg-warm page-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal/5 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6 animate-fadeInUp">
            🚀 Free delivery on first order!
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp leading-tight">
            Food &amp; Groceries<br />
            <span className="text-primary">Delivered Fast</span>
          </h1>
          <p className="text-gray-500 text-xl mb-10 animate-fadeInUp max-w-xl mx-auto">
            Order from your favourite restaurants and get fresh groceries delivered to your doorstep in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link to={user ? "/restaurants" : "/auth"} className="btn-primary text-lg py-4 px-8 inline-flex items-center gap-2">
              🍽️ Order Food Now
            </Link>
            <Link to={user ? "/shop" : "/auth"} className="btn-outline text-lg py-4 px-8 inline-flex items-center gap-2">
              🛒 Shop Groceries
            </Link>
          </div>
        </div>

        {/* Floating food emojis */}
        <div className="absolute top-10 left-10 text-5xl opacity-20 animate-bounce">🍕</div>
        <div className="absolute top-20 right-16 text-4xl opacity-20 animate-bounce" style={{animationDelay:'0.3s'}}>🥗</div>
        <div className="absolute bottom-10 left-20 text-4xl opacity-20 animate-bounce" style={{animationDelay:'0.6s'}}>🍜</div>
        <div className="absolute bottom-16 right-10 text-5xl opacity-20 animate-bounce" style={{animationDelay:'0.9s'}}>🛒</div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-12">Why FreshBite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: '⚡', title: '30-Min Delivery', desc: 'Lightning-fast delivery from local restaurants and grocery stores.' },
            { emoji: '🌿', title: 'Fresh Quality', desc: 'All groceries sourced fresh daily from trusted local farmers.' },
            { emoji: '💰', title: 'Best Prices', desc: 'No hidden charges. What you see is what you pay.' },
          ].map(f => (
            <div key={f.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-primary rounded-3xl p-12 text-center text-white">
          <h2 className="font-display text-4xl font-bold mb-4">Ready to order?</h2>
          <p className="text-white/80 mb-8 text-lg">Join millions of happy customers today.</p>
          <Link to="/auth" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-2xl hover:bg-gray-100 transition-colors text-lg">
            Get Started Free 🎉
          </Link>
        </div>
      </section>
    </div>
  )
}
