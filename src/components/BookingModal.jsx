import { useState } from 'react';
import { X } from 'lucide-react';

export default function BookingModal({ services }) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  
  const categories = [
    { id: 'manicure', label: 'Маникюр / Наращивание ногтей' },
    { id: 'pedicure', label: 'Педикюр / Подология' },
    { id: 'brows', label: 'Оформление / Окрашивание бровей' },
    { id: 'lashes', label: 'Наращивание / Ламинирование ресниц' }
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
    <dialog id="booking-modal" className="modal p-0 backdrop:bg-zinc-900/60 backdrop:backdrop-blur-sm bg-transparent w-full max-w-lg m-auto open:flex flex-col rounded-xl shadow-2xl">
      <div className="bg-white relative w-full overflow-y-auto max-h-[90vh] rounded-xl flex flex-col">
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50 shrink-0">
          <h3 className="text-2xl font-heading font-black uppercase text-zinc-900 tracking-tight">Онлайн запись</h3>
          <form method="dialog">
            <button className="text-zinc-400 hover:text-zinc-900 transition-colors p-1 rounded-full hover:bg-zinc-200">
              <X size={24} strokeWidth={2} />
            </button>
          </form>
        </div>

        <div className="p-6 md:p-8 flex-grow">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-brand/10 text-brand flex items-center justify-center rounded-full mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-2xl font-heading font-bold text-zinc-900 mb-2 uppercase">Заявка отправлена!</h4>
              <p className="text-zinc-600 font-medium">Спасибо! Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-zinc-700 font-bold uppercase text-sm tracking-wide mb-2">Ваше Имя *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full p-3.5 bg-white border border-zinc-200 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand font-medium text-zinc-900 transition-all shadow-sm"
                  placeholder="Анна"
                />
              </div>

              <div>
                <label className="block text-zinc-700 font-bold uppercase text-sm tracking-wide mb-2">Номер телефона *</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  pattern="^[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}$"
                  title="Введите номер в формате +7 (999) 000-00-00"
                  className="w-full p-3.5 bg-white border border-zinc-200 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand font-medium text-zinc-900 transition-all shadow-sm"
                  placeholder="+7 (999) 000-00-00"
                  maxLength="18"
                />
              </div>

              <div>
                <label className="block text-zinc-700 font-bold uppercase text-sm tracking-wide mb-3">Что вас интересует? (можно несколько)</label>
                <div className="space-y-3 p-4 bg-zinc-50 border border-zinc-100 rounded-lg">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                        <input 
                          type="checkbox" 
                          name="services" 
                          value={cat.label}
                          className="peer appearance-none w-5 h-5 border border-zinc-300 rounded-sm bg-white checked:bg-brand checked:border-brand cursor-pointer transition-colors"
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors select-none text-sm">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-zinc-700 font-bold uppercase text-sm tracking-wide mb-2">Комментарий</label>
                <textarea 
                  name="comment"
                  rows="2"
                  className="w-full p-3.5 bg-white border border-zinc-200 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand font-medium text-zinc-900 transition-all shadow-sm resize-none"
                  placeholder="Особые пожелания или удобное время..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand text-white font-bold text-lg uppercase tracking-wide rounded-md hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20"
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
