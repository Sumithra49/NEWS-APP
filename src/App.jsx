import React from 'react';


import { useState } from 'react';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';

const App = () => {
  //category
  const [category,setCategory] =useState("general")
  return (
    
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    
    
    
    </div>
   
  )
}

export default App