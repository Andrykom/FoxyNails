import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer({ info }) {
  return (
    <footer id="contacts" className="bg-zinc-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              {/* Path updated to /icon.webp */}
              <img src="/icon.webp" alt="Foxy Nail Logo" className="w-12 h-12 object-contain" />
              <span className="font-heading font-black text-3xl tracking-tight uppercase">
                {info.name}
              </span>
            </div>
            <p className="text-zinc-400 font-medium text-lg max-w-sm mb-8 leading-relaxed">
              Идеальный маникюр и безупречный сервис. Подчеркнем вашу индивидуальность в стильном пространстве Foxy Nail.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold uppercase text-white mb-6 tracking-wide">Контакты</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-300">
                <MapPin size={24} className="shrink-0 text-brand" />
                <span className="leading-snug">{info.address}</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <Phone size={24} className="shrink-0 text-brand" />
                <a href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{info.phone}</a>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <Clock size={24} className="shrink-0 text-brand" />
                <span>Ежедневно 10:00 - 22:00</span>
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
              className="w-full py-4 bg-brand text-white font-bold text-lg uppercase tracking-wide rounded-md hover:bg-brand-dark transition-colors shadow-lg"
            >
              Записаться
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} {info.name}. Все права защищены.</p>
          <a href="#" className="hover:text-zinc-300 transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
