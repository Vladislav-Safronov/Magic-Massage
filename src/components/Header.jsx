import { useEffect, useRef } from 'react';

function Header() {

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Эффект параллакса
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // От -0.5 до 0.5
      const y = (e.clientY - top) / height - 0.5;

      // Наклон текста (до 5 градусов)
      if (textRef.current) {
        textRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
      }

      // Сдвиг картинки (до 20px)
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <header >
      <div ref={containerRef} className="flex flex-col justify-center text-center relative min-h-screen bg-[url('/cover-tree.webp')] bg-cover bg-center overflow-hidden">

        {/* Затемнение фона */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* Центральная картинка */}
        <div className="relative z-10 inset-0 flex justify-center">
          <img
            ref={imageRef}
            src="logo.svg"  // Ваша маленькая картинка
            alt="Логотип салона Magic Massage"
            className="size-50 transition-transform duration-300 ease-out sm:size-60 md:size-70 lg:size-80 xl:size-100 2xl:size-110"  // Плавность анимации
          />
        </div>

        {/* Текст с эффектом наклона */}
        <div ref={textRef} className="relative z-10 inset-0 flex flex-col items-center justify-center text-white p-4 transition-transform duration-300 ease-out pb-50">
          <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Массажный салон <br /> <b className='text-[#FE9740]'>Magic Massage</b> </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Профессиональный массаж в Орле</p>
        </div>
      </div>

    </header >
  );
}

export default Header
