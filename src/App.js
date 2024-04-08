import React, { useState } from 'react';
import { checkHitmanString } from './functions/checkString';
import checkNumerics from './functions/checkNumerics';
import evaluate from './functions/evaluate';
import HitmanForAreason from './components/HitmanForAreason';
import NotFound from './components/NotFound';
import Header from './components/Header';
import {BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [value, setValue] = useState("");
  const [isHitman, setIsHitman] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = () => {  
    if (checkHitmanString(value) || checkNumerics(value) || evaluate(value)) {
      setIsHitman(true);
    } else {
      setIsHitman(false);
    }
    setValue("");
    setShowContent(true); 
  };

  return (
    <Router>
	  <Header />
      <div className='flex justify-center items-center p-6'>	
        <div className='border p-6 sm:p-4 md:p-10 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-900 via-blue-500 shadow-2xl'>
          <input className='p-3 w-full rounded-xl md:w-96' placeholder='Enter your reason....' type='text' value={value} onChange={(e) => setValue(e.target.value)} />
          <button className='bg-gradient-to-tr from-orange-600 to-green-600 via-slate-200 p-3 mt-2 md:mt-0 md:ml-3 bg-blue-500 text-blue-700 font-bold rounded-lg w-full md:w-auto' type='submit' onClick={handleSubmit}>Check</button>
          {showContent && (
            <div className='flex justify-center items-center'>
              {isHitman ? <HitmanForAreason/> : <NotFound/>}
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
