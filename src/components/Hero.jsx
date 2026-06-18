import { MapPin } from 'lucide-react';

export default function Hero({ info }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-zinc-100">
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="relative inline-block mb-10 select-none">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase text-zinc-900 tracking-tighter leading-none">
                Foxy Nail
              </h1>
              <span className="absolute -bottom-4 right-0 md:-right-8 text-4xl md:text-6xl lg:text-7xl font-brush text-brand -rotate-6 transform drop-shadow-md">
                studio
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-zinc-700 font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Место, где позаботятся о твоей красоте ✨
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 text-zinc-600 font-medium">
              <MapPin className="text-brand shrink-0" strokeWidth={2} size={22} />
              <span>{info.address}</span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('booking-modal').showModal()}
                className="px-8 py-4 bg-brand text-white font-bold text-lg uppercase tracking-wide rounded-md hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20"
              >
                Онлайн запись
              </button>
              <a 
                href="#portfolio" 
                className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold text-lg uppercase tracking-wide rounded-md hover:border-zinc-900 hover:bg-zinc-50 transition-colors shadow-sm"
              >
                Примеры работ
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-zinc-200">
              {/* Path updated to /hero_photo.jpg */}
              <img 
                src="/hero_photo.jpg" 
                alt="Интерьер Foxy Nail" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              {Number(info.rating.replace(',', '.')) >= 4.5 && (
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-zinc-900 font-bold px-5 py-3 rounded-lg shadow-lg flex items-center gap-2">
                  <span className="text-brand text-xl">★</span> Рейтинг {info.rating}
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
