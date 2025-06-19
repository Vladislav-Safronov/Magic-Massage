import { SiVk } from "react-icons/si";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";


function SocialButtons() {
    const buttons = [
      {
        name: 'WhatsApp',
        url: 'https://wa.me/79200870682',
        bgColor: 'bg-green-500 hover:bg-green-600',
        icon: (
          <FaWhatsapp />
        )
      },
      {
        name: 'VK',
        url: 'https://vk.com/write-228677304',
        bgColor: 'bg-blue-500 hover:bg-blue-600',
        icon: (
          <SiVk />
        )
      },
      {
        name: 'Telegram',
        url: 'https://t.me/evgenia_MagicMassage',
        bgColor: 'bg-blue-400 hover:bg-blue-500',
        icon: (
          <FaTelegram />
        )
      },
    ];
  
    return (
      <div className="grid xl:grid-cols-3 gap-4 ">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button.bgColor} text-white flex items-center justify-center gap-2 py-5 px-6 rounded-lg transition-colors duration-300 w-full md:w-auto`}
          >
            {button.icon}
            <span className="sm:text-xl xl:text-2xl">Записаться в {button.name}</span>
          </a>
        ))}
      </div>
    );
  }

export default SocialButtons
