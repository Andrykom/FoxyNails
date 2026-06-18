import { Phone } from 'lucide-react';

export default function Header({ info }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Path updated to /icon.webp since it is now in public/ */}
          <img src="/icon.webp" alt="Foxy Nail Logo" className="w-10 h-10 object-contain" />
          <span className="font-heading font-black text-2xl text-zinc-900 tracking-tight uppercase hidden sm:block">
            {info.name}
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-zinc-600 uppercase tracking-wide text-sm">
          <a href="#services" className="hover:text-brand transition-colors">Услуги</a>
          <a href="#about" className="hover:text-brand transition-colors">О нас</a>
          <a href="#portfolio" className="hover:text-brand transition-colors">Наши работы</a>
          <a href="#contacts" className="hover:text-brand transition-colors">Контакты</a>
        </div>

        <div className="flex items-center gap-6">
          <a href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`} className="hidden sm:flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors">
            <Phone size={20} strokeWidth={2} />
            {info.phone}
          </a>
          <button 
            onClick={() => document.getElementById('booking-modal').showModal()}
            className="px-6 py-2.5 bg-brand text-white font-bold uppercase tracking-wide rounded-md hover:bg-brand-dark transition-colors shadow-md shadow-brand/20"
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}
