
export default function Hero() {
  return (
    <section className="md:grid md:grid-cols-2">
      <figure>
        <img className="max-h-[500px] w-full object-cover object-center" src="./imgs/banner-image.png" alt="Immagine di una papera gialla di gomma"/>
      </figure>
      <div className="py-7 px-10 text-center flex flex-col items-center bg-[url('./imgs/banner-bg.png')]">
        <h1 className="max-w-[900px] text-3xl capitalize text xs:text-4xl md:text-5xl lg:text-7xl font-semibold mb-6">Rubber duck debaggings</h1>
        <p className="mb-6 max-w-[600px]">Spiegare il codice ad una paperella di gomma aiuta i programmatori a chiarire il pensiero ed individuare errori nascosti</p>
        <button className="uppercase text-gray-600 font-bold border-4 border-gray-600 leading-10 px-6 text-lg hover:text-white hover:bg-gray-600">Acquistala subito!</button>
      </div>
    </section>
  )
}
