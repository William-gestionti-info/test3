import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-lg transition-all duration-300 ${
            scrolled ? 'bg-navy-700 text-cream-100' : 'bg-white/20 text-white backdrop-blur-sm'
          }`}>
            A
          </div>
          <div>
            <div className={`font-serif font-semibold text-lg leading-tight transition-colors duration-300 ${
              scrolled ? 'text-navy-800' : 'text-white'
            }`}>
              Les Deux Aires
            </div>
            <div className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-sage-400' : 'text-white/70'
            }`}>
              Résidence pour aînés
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? scrolled
                      ? 'bg-navy-50 text-navy-700'
                      : 'bg-white/20 text-white'
                    : scrolled
                    ? 'text-warm-gray hover:bg-cream-100 hover:text-navy-700'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15143331515"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled ? 'text-navy-700 hover:text-navy-500' : 'text-white hover:text-cream-200'
            }`}
            aria-label="Appeler le (514) 333-1515"
          >
            <Phone size={15} />
            <span>(514) 333-1515</span>
          </a>
          <Link
            to="/contact"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Planifier une visite
            <ChevronRight size={15} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled ? 'text-navy-700 hover:bg-cream-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-cream-200 shadow-medium"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl font-medium transition-all ${
                        isActive
                          ? 'bg-navy-50 text-navy-700'
                          : 'text-warm-gray hover:bg-cream-100 hover:text-navy-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+15143331515"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cream-100 text-navy-700 font-medium"
                >
                  <Phone size={16} />
                  (514) 333-1515
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Planifier une visite <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
