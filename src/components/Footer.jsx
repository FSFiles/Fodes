import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className='w-10'><img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" alt="FreshBite" /></div>
              <span className="font-display text-lg font-bold text-white">FreshBite</span>
            </div>
            <p className="text-sm text-gray-400">Delivering fresh food & groceries to your doorstep in minutes.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-primary transition-colors">Restaurants</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-primary transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social & Contact */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors text-sm">f</a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors text-sm">𝕏</a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors text-sm">in</a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors text-sm">📷</a>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>📧 support@freshbite.com</p>
              <p>📞 1-800-FRESH-BIT</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-800">
            <p>&copy; {currentYear} FreshBite. All rights reserved. | Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
