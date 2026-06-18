import { MapPin } from 'lucide-react';

export default function Hero({ info }) {
  return (
    <section className="min-h-[90vh] bg-black flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Фоновое мягкое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center space-y-8 px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Логотип */}
        <div className="flex justify-center mb-4">
          <img src="/icon.webp" alt="Studio7" className="h-40 md:h-56 drop-shadow-[0_0_20px_rgba(255,234,0,0.4)]" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
          Твой новый <span className="text-neon font-marker lowercase tracking-normal">стиль</span>
        </h1>
        
        <p className="text-zinc-400 max-w-lg mx-auto text-lg md:text-xl">
          Создаем образы, которые говорят сами за себя. 
        </p>

        <div className="flex items-center justify-center gap-3 text-zinc-500 font-medium">
          <MapPin className="text-neon shrink-0" strokeWidth={1.5} size={20} />
          <span>{info.address}</span>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('booking-modal').showModal()}
            className="w-full sm:w-auto px-10 py-5 border-2 border-neon text-neon font-bold uppercase tracking-widest hover:bg-neon hover:text-black hover:shadow-[0_0_25px_rgba(255,234,0,0.6)] transition-all duration-300"
          >
            Записаться
          </button>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-5 border border-zinc-800 text-white font-bold uppercase tracking-widest hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
          >
            Наши работы
          </a>
        </div>
      </div>
    </section>
  );
}
