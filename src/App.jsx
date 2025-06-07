import Header from './components/Header.jsx'
import SocialButtons from './components/SocialButtons.jsx';
import ServicesSection from './components/ServicesSection.jsx';



function App() {
  return (
    <>
     <Header />
     <hr className="h-[5px] bg-black"/>
      <div className="text-center py-8 bg-[url('/bg.webp')] bg-cover bg-center overflow-hidden lg:py-15 xl:py-20 2xl-py-25">
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'><b> Меня зовут Евгения, <br /> являюсь сертифицированным массажистом.</b></h2>
      </div>
      
     <hr className="h-[5px] bg-black"/>

     <div className="px-8 py-8">
      <SocialButtons />
     </div>

     <hr className="h-[5px] bg-black"/>
     
     <div className="">
      <ServicesSection />
     </div>


    </>
  );

}

export default App
