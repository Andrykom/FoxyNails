import { useState, useMemo } from 'react';

export default function Services({ services }) {
  const [activeTab, setActiveTab] = useState('Стрижки');

  const groupedServices = useMemo(() => {
    const groups = {};
    services.forEach(item => {
      const cat = item.category || 'Другое';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    });
    return groups;
  }, [services]);

  const tabs = Object.keys(groupedServices).filter(key => groupedServices[key].length > 0);

  // Fallback to first available tab if activeTab is empty or invalid
  if (!tabs.includes(activeTab) && tabs.length > 0) {
    setActiveTab(tabs[0]);
  }

  return (
    <section id="services" className="py-24 bg-black border-b border-zinc-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tight mb-2">
            Наши Услуги
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-bold uppercase tracking-wide transition-all border-2 border-transparent ${
                activeTab === tab 
                  ? 'border-neon text-neon shadow-[0_0_15px_rgba(255,234,0,0.3)]' 
                  : 'bg-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {groupedServices[activeTab]?.map((item, index) => (
            <div key={index} className="p-6 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-neon hover:shadow-[0_0_15px_rgba(255,234,0,0.15)] transition-all group overflow-hidden">
              <div className="flex-1 min-w-0 w-full">
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-tight break-words hyphens-auto w-full group-hover:text-neon transition-colors">
                  {item.service}
                </h3>
              </div>
              <div className="shrink-0 mt-2 sm:mt-0">
                <div className="text-neon font-black text-xl whitespace-nowrap drop-shadow-[0_0_5px_rgba(255,234,0,0.5)]">
                  {item.price.replace(/\\n/g, ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('booking-modal').showModal()}
            className="px-10 py-5 border-2 border-neon text-neon font-bold uppercase tracking-widest hover:bg-neon hover:text-black hover:shadow-[0_0_25px_rgba(255,234,0,0.6)] transition-all duration-300"
          >
            Записаться сейчас
          </button>
        </div>
      </div>
    </section>
  );
}
