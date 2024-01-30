import React from 'react';
import Bg from './assets/bg.webp';

export default function Flex() {
  
  return (
    <>
    <div className='conatiner'>

     <div className="relative max-lg h-full overflow-hidden bg-gray-900 py-24 sm:py-32">
         <img src={Bg} alt="" className="absolute inset-0 h-full w-full opacity-25 object-cover object-center md:object-center xs:object-center sm:object-center lg:object-center xl:object-center" />
      
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight  text-white sm:text-7xl "><h6 className='bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text   inline-block text-transparent'>Born Fire </h6> </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300"><em>Join us under the starry skies as we gather around the warmth of the bonfire on a night filled with laughter, friendship, and shared moments.</em></p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#" className='font-bold ' >Saturday </a>
              <a href="#">Febraury 03, 2024</a>
              <a href="/" ><span className="text-bold" >Venue: </span ><span className='hover:font-serif' >CCBAT CAMPUS, GATE 2, CHURCH ROAD CIVIL LINES</span></a>
              
              
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">Time</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">4:00 pm - 8:30</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">Invited</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">All the students || Staff</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">Dress code</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Formal</dd>
              </div>
              </dl>
              </div>
          
          </div>
        </div>
      </div>
  
    </>
  );
}
