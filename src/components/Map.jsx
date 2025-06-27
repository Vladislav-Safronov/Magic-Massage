
function Map() {

  return (
    <section className="relative py-14 px-4 bg-[url('/cover.webp')] bg-cover bg-bottom overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10  max-w-6xl mx-auto">
            <h2 className="text-3xl text-white font-bold text-center mb-8">Местоположение</h2>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A75b1941027e0e1b3d3820f0f7fafffa16d5f28647d26f7d8dda2087915d202fd&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
            <h3 className="text-3xl text-white font-bold text-center pt-8">Орёл, улица 5 Августа, 54, 3 этаж</h3>
        </div>
    </section>
  );
}

export default Map
