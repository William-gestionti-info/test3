import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Strip */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #1e4e72 0%, #2d6a94 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-blue-200 mb-3 font-medium">Prenez contact aujourd’hui</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Votre prochain pas commence par un appel
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions et vous guider dans votre démarche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15143331515" className="btn-primary bg-white text-navy-700 hover:bg-cream-50" style={{background:'white',color:'#163a57'}}>
              <Phone size={18} /> (514) 333-1515
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-700">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center font-serif text-lg font-bold text-cream-100">A</div>
              <div>
                <div className="font-serif font-semibold text-lg">Les Deux Aires</div>
                <div className="text-xs text-blue-300 tracking-widest uppercase">Résidence pour aînés</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Un milieu de vie chaleureux, sécuritaire et enrichissant pour les personnes âgées autonomes et semi-autonomes à Montréal.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center hover:bg-navy-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center hover:bg-navy-600 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {[{to:'/',label:'Accueil'},{to:'/a-propos',label:'À propos'},{to:'/services',label:'Services'},{to:'/contact',label:'Contact'}].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-blue-200 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Nos services</h3>
            <ul className="space-y-3">
              {['Hébergement','Soins personnalisés','Sécurité 24/7','Loisirs & activités','Restauration','Soutien aux familles'].map(s => (
                <li key={s}>
                  <span className="text-blue-200 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Nous trouver</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sage-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">505, Boulevard Gouin Ouest,<br />Montréal (Ahuntsic), QC H3L 3T2</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sage-300 flex-shrink-0" />
                <a href="tel:+15143331515" className="text-blue-200 text-sm hover:text-white transition-colors">(514) 333-1515</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sage-300 flex-shrink-0" />
                <a href="mailto:info@lesdeuxaires.com" className="text-blue-200 text-sm hover:text-white transition-colors">info@lesdeuxaires.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            &copy; {currentYear} Résidence Les Deux Aires. Tous droits réservés.
          </p>
          <p className="text-blue-400 text-xs flex items-center gap-1">
            Fait avec <Heart size={12} className="text-red-400" /> à Montréal
          </p>
        </div>
      </div>
    </footer>
  )
}
