import { Wifi, Gift, CreditCard, CalendarCheck, Sparkles, Award } from 'lucide-react';

export default function Features({ info }) {
  const cleanFeatures = [
    { id: 1, text: "Онлайн запись", desc: "Удобный выбор времени", icon: CalendarCheck },
    { id: 2, text: "Сертификаты", desc: "Отличный подарок", icon: Gift },
    { id: 3, text: "Wi-Fi зона", desc: "Бесплатный интернет", icon: Wifi },
    { id: 4, text: "Безнал / СБП", desc: "Любой способ оплаты", icon: CreditCard },
    { id: 5, text: "Брови & Ресницы", desc: "Комплексный подход", icon: Sparkles },
    { id: 6, text: "«Хорошее место»", desc: "Награда Яндекс Карт", icon: Award }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 border-b border-zinc-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-zinc-900 tracking-tight mb-2">
            Почему выбирают нас
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cleanFeatures.map((feature) => (
            <div key={feature.id} className="p-8 bg-white border border-zinc-100 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start gap-5 group">
              <div className="w-14 h-14 bg-brand/10 rounded-md flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors">
                <feature.icon size={28} strokeWidth={2} className="text-brand group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-zinc-900 text-lg uppercase tracking-tight mb-1">{feature.text}</h3>
                <p className="text-zinc-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
