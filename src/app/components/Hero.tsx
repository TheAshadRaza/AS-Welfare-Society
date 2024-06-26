
export default function Hero(){

return (

<section
    className=" bg-cover bg-center bg-no-repeat"
    
  >
     
   
    <div
      className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    >
        <img className="relative bg-cover bg-center blur-sm w-full bg-no-repeat "src="/Hero.jpg" alt="Hero images "  ></img>
    </div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
          Let us save the future
  
          <strong className="block font-extrabold text-blue-700"> Saving Child Life. </strong>
        </h1>
  
       
  
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          >
            Get Started
          </a>
  
          <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>





)
}