import { useState, useMemo } from 'react';

export default function Services({ services }) {
  const [activeTab, setActiveTab] = useState('Маникюр');

  const groupedServices = useMemo(() => {
    const groups = {
      'Маникюр': [],
      'Педикюр': [],
      'Брови': [],
      'Ресницы': []
    };

    services.forEach(item => {
      const name = item.service.toLowerCase();
      if (name.includes('ресниц')) {
        groups['Ресницы'].push(item);
      } else if (name.includes('бров') || name.includes('комбо')) {
        groups['Брови'].push(item);
      } else if (name.includes('педикюр') || name.includes('стопы') || name.includes('титанов') || name.includes('зачистка') || name.includes('пальчик')) {
        groups['Педикюр'].push(item);
      } else {
        groups['Маникюр'].push(item);
      }
    });
    return groups;
  }, [services]);

  const tabs = Object.keys(groupedServices).filter(key => groupedServices[key].length > 0);

  return (
    <section id="services" className="py-24 bg-white border-b border-zinc-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-zinc-900 tracking-tight mb-2">
            Наши Услуги
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-md font-bold uppercase tracking-wide transition-all ${
                activeTab === tab 
                  ? 'bg-brand text-white shadow-md shadow-brand/20' 
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {groupedServices[activeTab]?.map((item, index) => (
            <div key={index} className="p-6 bg-white border border-zinc-100 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-brand/30 hover:shadow-md transition-all group overflow-hidden">
              <div className="flex-1 min-w-0 w-full">
                <h3 className="font-heading font-bold text-zinc-900 text-lg uppercase tracking-tight break-words hyphens-auto w-full">
                  {item.service}
                </h3>
              </div>
              <div className="shrink-0 mt-2 sm:mt-0">
                <div className="text-brand font-black text-xl whitespace-nowrap">
                  {item.price.replace(/\\n/g, ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('booking-modal').showModal()}
            className="px-10 py-4 bg-zinc-900 text-white font-bold text-lg uppercase tracking-wide rounded-md hover:bg-brand transition-colors shadow-lg"
          >
            Записаться сейчас
          </button>
        </div>
      </div>
    </section>
  );
}
