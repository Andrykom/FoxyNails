export default function Portfolio() {
  const images = [
    "/portfolio_photos/1.webp",
    "/portfolio_photos/2.webp",
    "/portfolio_photos/3.webp",
    "/portfolio_photos/4.webp",
    "/portfolio_photos/5.webp",
    "/portfolio_photos/6.webp",
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-white tracking-tight mb-2">
            Примеры работ
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-square border border-zinc-800 overflow-hidden group shadow-sm hover:border-neon hover:shadow-[0_0_15px_rgba(255,234,0,0.3)] transition-all duration-300 bg-black">
              <img 
                src={src} 
                alt={`Пример работы ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-400 font-medium max-w-2xl mx-auto">
            Больше работ и отзывы вы можете посмотреть в наших социальных сетях.
          </p>
        </div>
      </div>
    </section>
  );
}
