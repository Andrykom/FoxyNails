import { Wifi, Gift, CreditCard, CalendarCheck, Sparkles, Award } from 'lucide-react';

export default function Features({ info }) {
  const cleanFeatures = [
    { id: 1, text: "Онлайн запись", desc: "Удобный выбор времени", icon: CalendarCheck },
    { id: 2, text: "Сертификаты", desc: "Отличный подарок", icon: Gift },
    { id: 3, text: "Wi-Fi зона", desc: "Бесплатный интернет", icon: Wifi },
    { id: 4, text: "Безнал / СБП", desc: "Любой способ оплаты", icon: CreditCard },
    { id: 5, text: "Комплексный уход", desc: "Стрижки, депиляция, маникюр", icon: Sparkles },
    { id: 6, text: "Высокий рейтинг", desc: "Рейтинг " + info.rating, icon: Award }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tight mb-2">
            Почему выбирают нас
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cleanFeatures.map((feature) => (
            <div key={feature.id} className="p-8 bg-black border border-zinc-800 hover:border-neon hover:shadow-[0_0_15px_rgba(255,234,0,0.15)] transition-all duration-300 flex items-start gap-5 group">
              <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-neon transition-colors">
                <feature.icon size={28} strokeWidth={1.5} className="text-zinc-500 group-hover:text-neon transition-colors drop-shadow-[0_0_8px_rgba(255,234,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,234,0,0.6)]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-tight mb-1">{feature.text}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
