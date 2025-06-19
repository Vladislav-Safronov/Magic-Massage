import { useState } from 'react';


function ServicesSection() {
  const [flippedCards, setFlippedCards] = useState([]);

  const services = [
    {
      id: 1,
      title: "Классический массаж",
      price: "1600 ₽ / час",
      image: "massage/classic.webp",
      description: "60-минутный сеанс расслабляющего массажа всего тела с использованием аромамасел."
    },
    {
      id: 2,
      title: "Массаж предплечьями",
      price: "800 ₽ / час",
      image: "massage/forearm.webp",
      description: "Специальная техника для борьбы с целлюлитом. Курс из 10 сеансов дает видимый эффект уже через 2 недели."
    },
    {
      id: 3,
      title: "Массаж ног",
      price: "800 ₽",
      image: "massage/legs.webp",
      description: "Для спортсменов и активных людей. Помогает восстановиться после тренировок, предотвращает травмы."
    },
    {
      id: 4,
      title: "Массаж шейно-воротниковой зоны",
      price: "600 ₽",
      image: "massage/neck.webp",
      description: "Улучшает лимфоток, снимает отеки, способствует детоксикации организма. Рекомендуется курсом."
    },
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Наши услуги</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`flip-card h-64 [perspective:1000px] ${flippedCards.includes(service.id) ? 'active' : ''}`}
            onMouseEnter={() =>  toggleFlip(service.id)}
            onMouseLeave={() =>  toggleFlip(service.id)}
          >
            <div className="flip-card-inner w-full h-full rounded-2xl shadow-lg transition-transform duration-500">
              {/* Передняя сторона */}
              <div className="flip-card-front absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  loading="lazy"
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-xl font-medium">{service.price}</p>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Нажмите для подробностей
                  </p>
                </div>
              </div>
              
              {/* Задняя сторона */}
              <div className="z-10 flip-card-back absolute w-full h-full backface-hidden rounded-2xl bg-white p-6 overflow-y-auto">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-xl font-medium mb-4">{service.price}</p>
                <a 
                  href={`https://vk.com/write-228677304?text=Здравствуйте! Я хочу записаться на услугу: ${service.title}`}
                  className="mt-auto bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded-full transition-colors w-full block text-center cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS для эффекта переворота */}
      <style jsx>{`
        .flip-card-inner {
          position: relative;
          transform-style: preserve-3d;
        }
        .flip-card.active .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        @media (max-width: 768px) {
          .flip-card.active .flip-card-inner {
            transform: rotateY(180deg) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}

export default ServicesSection