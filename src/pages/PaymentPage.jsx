import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const PAYMENT_METHODS = [
  { id: 'cod',        label: 'Cash on Delivery', image:"https://png.pngtree.com/png-vector/20240517/ourmid/pngtree-cartoon-stack-of-dollar-cash-bundle-png-image_12484830.png", desc: 'Pay when your order arrives', color: 'green' },
  { id: 'upi',        label: 'UPI',              image:"https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-svg-download-png-1747946.png", desc: 'PhonePe, GPay, Paytm, BHIM', color: 'primary' },
  { id: 'card',       label: 'Credit / Debit Card', image:"https://png.pngtree.com/png-clipart/20250529/original/pngtree-flat-style-credit-card-vector-png-image_21090185.png", desc: 'Visa, Mastercard, RuPay',  color: 'blue' },
  { id: 'netbanking', label: 'Net Banking',       image:"https://png.pngtree.com/png-clipart/20211116/original/pngtree-flat-style-illustration-of-online-banking-and-internet-payment-transactions-png-image_6937272.png", desc: 'All major Indian banks',     color: 'purple' },
]

export default function PaymentPage() {
  const { cartTotal, clearCart, user, placeOrder } = useApp()
  const navigate = useNavigate()
  const [method, setMethod] = useState('upi')
  const [loading, setLoading] = useState(false)
  const [upiId, setUpiId]   = useState('')
  const [card, setCard]     = useState({ number: '', name: '', expiry: '', cvv: '' })
  const [bank, setBank]     = useState('')

  const delivery  = cartTotal > 299 ? 0 : 49
  const tax       = Math.round(cartTotal * 0.05)
  const grandTotal = cartTotal + delivery + tax

  function handlePay() {
    if (method === 'upi' && !upiId.includes('@')) { alert('Enter a valid UPI ID (e.g. name@upi)'); return }
    if (method === 'card' && card.number.replace(/\s/g,'').length < 16) { alert('Enter a valid 16-digit card number'); return }
    if (method === 'netbanking' && !bank) { alert('Please select a bank'); return }
    setLoading(true)
    setTimeout(() => {
      const orderId = `FB${Date.now().toString().slice(-6)}`
      const eta = Math.floor(Math.random() * 15) + 25
      placeOrder(orderId, eta)
      clearCart()
      navigate('/success')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-warm pb-10 page-background">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Payment 💳</h1>
        <p className="text-gray-500 mb-6">Choose your preferred payment method</p>

        {/* Amount card */}
        <div className="card p-4 mb-6 flex items-center justify-between bg-primary/5 border-primary/20">
          <div>
            <p className="text-sm text-gray-500 font-medium">Amount to pay</p>
            <p className="font-display text-3xl font-bold text-primary">₹{grandTotal}</p>
          </div>
          <div className="text-4xl">🧾</div>
        </div>

        {/* Payment method selection */}
        <div className="space-y-3 mb-6">
          {PAYMENT_METHODS.map(m => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                method === m.id
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <span className="text-2xl">{m.image && <img src={m.image} alt={m.label} className="w-6 h-6" />}</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900">{m.label}</p>
                <p className="text-xs text-gray-400">{m.desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                method === m.id ? 'border-primary bg-primary' : 'border-gray-300'
              }`}>
                {method === m.id && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic form */}
        {method === 'upi' && (
  <div className="card p-5 mb-6 animate-fadeInUp">
    <label className="block text-sm font-bold text-gray-700 mb-2">
      Enter UPI ID
    </label>

    <input
      type="text"
      value={upiId}
      onChange={e => setUpiId(e.target.value)}
      placeholder="yourname@upi"
      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-primary transition-all"
    />

    <div className="flex gap-3 mt-4">
      {[
        {
          name: "GPay",
          image:
            "https://static.vecteezy.com/system/resources/previews/046/861/640/non_2x/google-pay-logo-transparent-background-free-png.png",
        },
        {
          name: "PhonePe",
          image:
            "https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png",
        },
        {
          name: "Paytm",
          image:
            "https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png",
        },
        {
          name: "BHIM",
          image:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bhim-app-icon.png",
        },
      ].map(app => (
        <div
          key={app.name}
          className="bg-gray-100 rounded-xl px-3 py-2 flex items-center justify-center hover:scale-105 transition-all"
        >
          <img
            src={app.image}
            alt={app.name}
            className="h-6 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
)}
        {method === 'card' && (
          <div className="card p-5 mb-6 space-y-4 animate-fadeInUp">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
              <input type="text" value={card.number}
                onChange={e => setCard({...card, number: e.target.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19)})}
                placeholder="1234 5678 9012 3456" maxLength={19}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-mono font-semibold focus:outline-none focus:border-primary transition-all tracking-widest"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cardholder Name</label>
              <input type="text" value={card.name} onChange={e => setCard({...card, name: e.target.value})}
                placeholder="Name on card"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-primary transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Expiry</label>
                <input type="text" value={card.expiry}
                  onChange={e => {
                    let v = e.target.value.replace(/\D/g,'')
                    if (v.length >= 3) v = v.slice(0,2)+'/'+v.slice(2,4)
                    setCard({...card, expiry: v})
                  }}
                  placeholder="MM/YY" maxLength={5}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-mono font-semibold focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                <input type="password" value={card.cvv}
                  onChange={e => setCard({...card, cvv: e.target.value.replace(/\D/g,'').slice(0,3)})}
                  placeholder="•••" maxLength={3}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-mono font-semibold focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {method === 'netbanking' && (
          <div className="card p-5 mb-6 animate-fadeInUp">
            <label className="block text-sm font-bold text-gray-700 mb-3">Select your Bank</label>
            <div className="grid grid-cols-2 gap-2">
              {['SBI','HDFC','ICICI','Axis','Kotak','PNB','BOB','Canara'].map(b => (
                <button key={b} onClick={() => setBank(b)}
                  className={`p-3 rounded-xl border-2 text-sm font-bold transition-all ${bank===b ? 'border-primary bg-primary/10 text-primary' : 'border-gray-100 bg-white text-gray-700 hover:border-gray-200'}`}>
                  🏦 {b}
                </button>
              ))}
            </div>
          </div>
        )}

        {method === 'cod' && (
          <div className="card p-5 mb-6 bg-green-50 border-green-100 animate-fadeInUp">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💵</span>
              <div>
                <p className="font-bold text-green-800">Cash on Delivery</p>
                <p className="text-sm text-green-600">Keep ₹{grandTotal} ready at the time of delivery</p>
              </div>
            </div>
          </div>
        )}

        {/* Secure badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-5">
          <span>🔒</span> <span>256-bit SSL Secured Payment</span>
        </div>

        <button onClick={handlePay} disabled={loading}
          className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 disabled:opacity-70">
          {loading ? (
            <><span className="animate-spin text-xl">⏳</span> Processing Payment...</>
          ) : (
            <><span>✅</span> Pay ₹{grandTotal} Now</>
          )}
        </button>
      </div>
    </div>
  )
}
