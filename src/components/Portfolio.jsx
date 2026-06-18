export default function Portfolio() {
  const images = [
    "/portfolio_photos/1.jpg",
    "/portfolio_photos/2.jpg",
    "/portfolio_photos/3.jpg",
    "/portfolio_photos/4.jpg",
    "/portfolio_photos/5.jpg",
    "/portfolio_photos/6.jpg",
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-50 border-b border-zinc-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-zinc-900 tracking-tight mb-2">
            Примеры работ
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow bg-zinc-200">
              <img 
                src={src} 
                alt={`Пример работы ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-500 font-medium max-w-2xl mx-auto">
            Больше работ и отзывы вы можете посмотреть в наших социальных сетях и на <a href="https://yandex.com/maps/org/foxy_nail/22931872686/?ll=30.370163%2C59.999782&z=16" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-bold">Яндекс Картах</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
