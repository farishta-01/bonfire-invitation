import React from 'react'
import Samroz from './assets/Samroz.webp'
import Sami from './assets/Sami.webp'
import Mubara from './assets/Mubara.webp'
import Laiba_Arshad from './assets/Laiba_Arshad.webp'
export default function Team() {
  return (
    <div id='team'>
    <div className="container mx-auto">
      <>
      <div className="max-w-screen-xl p-5 mx-auto  text-gray-100">

          <h1 className="my-16 text-4xl text-center  font-bold tracking-tight text-white sm:text-6xl">Team</h1>
	<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
    <div className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500`} style={{ backgroundImage: `url(${Samroz})` }}>

			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Ambassador</a>
				<div className="flex flex-col justify-start text-center text-gray-100">
					<span className="text-3xl font-semibold leadi tracki">EMS</span>
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100"> Samroz</a>
			</h2>
		</div>
        <div className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500`} style={{ backgroundImage: `url(${Sami})` }}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Manager</a>
				<div className="flex flex-col justify-start text-center text-gray-100">
					<span className="text-3xl font-semibold leadi tracki">EMS</span>
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Samiullah</a>
			</h2>
		</div>
        <div className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500`} style={{ backgroundImage: `url(${Mubara})` }}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Coordinator</a>
				<div className="flex flex-col justify-start text-center text-gray-100">
					<span className="text-3xl font-semibold leadi tracki">EMS</span>
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Mubara</a>
			</h2>
		</div>
        <div className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500`} style={{ backgroundImage: `url(${Laiba_Arshad})` }}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">Coordinator</a>
				<div className="flex flex-col justify-start text-center text-gray-100">
					<span className="text-3xl font-semibold leadi tracki">EMS</span>
					
				</div>
			</div>
			<h2 className="z-10 p-5">
				<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Laiba Arshad</a>
			</h2>
		</div>
	</div>
</div>
      </>
    </div>
    </div>
  )
}
