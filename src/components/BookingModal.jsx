import { useState } from 'react';
import { X } from 'lucide-react';

export default function BookingModal({ services }) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  
  const categories = [
    { id: 'hair', label: 'Стрижка / Окрашивание / Укладка' },
    { id: 'depilation', label: 'Депиляция (Воск / Шугаринг)' },
    { id: 'nails', label: 'Маникюр / Педикюр' },
    { id: 'brows', label: 'Оформление бровей' }
  ];

  // Input mask for Russian phone numbers (+7 (XXX) XXX-XX-XX)
  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-digits
    
    if (input.length === 0) {
      setPhone('');
      return;
    }

    let formatted = '+7 ';
    // Skip the country code if it was typed
    let numberPart = input;
    if (input.length > 0 && (input[0] === '7' || input[0] === '8')) {
      numberPart = input.substring(1);
    }

    if (numberPart.length > 0) {
      formatted += '(' + numberPart.substring(0, 3);
    }
    if (numberPart.length >= 4) {
      formatted += ') ' + numberPart.substring(3, 6);
    }
    if (numberPart.length >= 7) {
      formatted += '-' + numberPart.substring(6, 8);
    }
    if (numberPart.length >= 9) {
      formatted += '-' + numberPart.substring(8, 10);
    }

    setPhone(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: phone,
      selectedServices: formData.getAll('services'),
      comment: formData.get('comment')
    };
    
    // Demo version logic
    console.log("=== НОВАЯ ЗАЯВКА ===");
    console.log(data);
    console.log("====================");
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
      e.target.reset();
      document.getElementById('booking-modal').close();
    }, 4000);
  };

  return (
    <dialog id="booking-modal" className="modal p-0 backdrop:bg-black/80 backdrop:backdrop-blur-md bg-transparent w-full max-w-lg m-auto open:flex flex-col border border-zinc-800 shadow-[0_0_50px_rgba(255,234,0,0.15)]">
      <div className="bg-zinc-950 relative w-full overflow-y-auto max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-black shrink-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-neon opacity-50"></div>
          <h3 className="text-2xl font-heading font-black uppercase text-white tracking-tight z-10">Онлайн запись</h3>
          <form method="dialog" className="z-10">
            <button className="text-zinc-500 hover:text-neon transition-colors p-1 rounded-none hover:bg-zinc-900 border border-transparent hover:border-neon">
              <X size={24} strokeWidth={1.5} />
            </button>
          </form>
        </div>

        <div className="p-6 md:p-8 flex-grow">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-neon/10 text-neon flex items-center justify-center rounded-none border border-neon mx-auto mb-6 shadow-[0_0_15px_rgba(255,234,0,0.2)]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Заявка отправлена!</h4>
              <p className="text-zinc-400 font-medium">Спасибо! Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-zinc-400 font-bold uppercase text-sm tracking-wide mb-2">Ваше Имя *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-none focus:outline-none focus:border-neon focus:shadow-[0_0_10px_rgba(255,234,0,0.2)] font-medium text-white transition-all"
                  placeholder="Анна"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-bold uppercase text-sm tracking-wide mb-2">Номер телефона *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="^[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}$"
                  title="Введите номер в формате +7 (999) 000-00-00"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-none focus:outline-none focus:border-neon focus:shadow-[0_0_10px_rgba(255,234,0,0.2)] font-medium text-white transition-all"
                  placeholder="+7 (999) 000-00-00"
                  maxLength="18"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-bold uppercase text-sm tracking-wide mb-3">Что вас интересует? (можно несколько)</label>
                <div className="space-y-3 p-4 bg-black border border-zinc-900">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                        <input 
                          type="checkbox" 
                          name="services" 
                          value={cat.label}
                          className="peer appearance-none w-5 h-5 border border-zinc-700 bg-zinc-950 checked:bg-neon checked:border-neon cursor-pointer transition-colors rounded-none"
                        />
                        <svg className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-zinc-400 group-hover:text-neon transition-colors select-none text-sm">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 font-bold uppercase text-sm tracking-wide mb-2">Комментарий</label>
                <textarea 
                  name="comment"
                  rows="2"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-none focus:outline-none focus:border-neon focus:shadow-[0_0_10px_rgba(255,234,0,0.2)] font-medium text-white transition-all resize-none"
                  placeholder="Особые пожелания или удобное время..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 border-2 border-neon text-neon font-bold text-lg uppercase tracking-widest hover:bg-neon hover:text-black hover:shadow-[0_0_20px_rgba(255,234,0,0.5)] transition-all duration-300"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
