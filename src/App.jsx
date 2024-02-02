import { useState } from 'react'


import Navbar from './Navbar'
import Flex from './Flex'
import Team from './Team'
import { Route, Routes } from 'react-router-dom';
import Ticket from './Ticket';
import Conatct from './Conatct';

function App() {
  

  return (
 
  <div className='bg-gray-800' >
     <  >
  <Navbar />
 

  
    <Flex/>
    <div className="container mx-auto mt-8">
    <Team/>


     <Ticket/>
     </div>
  <Conatct/>
 </>
   </div>
   
  )
}

export default App