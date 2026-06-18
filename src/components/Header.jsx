import { Phone } from 'lucide-react';

export default function Header({ info }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icon.webp" alt="Studio7 Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,234,0,0.3)]" />
          <span className="font-heading font-black text-2xl text-white tracking-tight uppercase hidden sm:block">
            {info.name}
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-zinc-400 uppercase tracking-wide text-sm">
          <a href="#services" className="hover:text-neon transition-colors">Услуги</a>
          <a href="#about" className="hover:text-neon transition-colors">О нас</a>
          <a href="#portfolio" className="hover:text-neon transition-colors">Наши работы</a>
          <a href="#contacts" className="hover:text-neon transition-colors">Контакты</a>
        </div>

        <div className="flex items-center gap-6">
          <a href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`} className="hidden sm:flex items-center gap-2 text-white font-bold hover:text-neon transition-colors">
            <Phone className="text-neon" size={20} strokeWidth={1.5} />
            {info.phone}
          </a>
          <button 
            onClick={() => document.getElementById('booking-modal').showModal()}
            className="px-6 py-2 border-2 border-neon text-neon font-bold uppercase tracking-wide rounded-none hover:bg-neon hover:text-black hover:shadow-[0_0_15px_rgba(255,234,0,0.5)] transition-all duration-300"
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}
