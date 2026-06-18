import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer({ info }) {
  return (
    <footer id="contacts" className="bg-black text-white pt-24 pb-12 border-t border-zinc-900 relative">
      {/* Мягкое фоновое свечение в подвале */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src="/icon.webp" alt="Studio7 Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,234,0,0.3)]" />
              <span className="font-heading font-black text-3xl tracking-tight uppercase">
                {info.name}
              </span>
            </div>
            <p className="text-zinc-400 font-medium text-lg max-w-sm mb-8 leading-relaxed">
              Создаем образы, которые говорят сами за себя. Твой новый стиль в Studio7.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold uppercase text-white mb-6 tracking-wide">Контакты</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-300">
                <MapPin size={24} strokeWidth={1.5} className="shrink-0 text-neon" />
                <span className="leading-snug">{info.address}</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <Phone size={24} strokeWidth={1.5} className="shrink-0 text-neon" />
                <a href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-neon transition-colors">{info.phone}</a>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <Clock size={24} strokeWidth={1.5} className="shrink-0 text-neon" />
                <span>Ежедневно: {info.schedule}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold uppercase text-white mb-6 tracking-wide">Ждем вас</h3>
            <p className="text-zinc-400 font-medium mb-8">
              Оставьте заявку онлайн, мы перезвоним в течение 5 минут.
            </p>
            <button 
              onClick={() => document.getElementById('booking-modal').showModal()}
              className="w-full py-4 border-2 border-neon text-neon font-bold text-lg uppercase tracking-widest hover:bg-neon hover:text-black hover:shadow-[0_0_20px_rgba(255,234,0,0.5)] transition-all duration-300"
            >
              Записаться
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} {info.name}. Все права защищены.</p>
          <a href="#" className="hover:text-zinc-300 transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
