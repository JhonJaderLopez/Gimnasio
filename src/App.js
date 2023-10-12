import React from 'react'
import {Routes,Route} from 'react-router'

import firebase, {FirebaseContext} from './components/firebase';

import Sidebar from './ui/sidebar';
import Home from './components/paginas/home';
import Register from './components/paginas/Register';
import RegisterClass from './components/paginas/RegisterClass';
import Routine from './components/paginas/Routine';

function App() {
  return (
    <FirebaseContext.Provider
      value={{firebase}}
    >
      <div className='md:flex min-h-screen'>
        <Sidebar/>
          <div className='md:w-3/5 xl:w-4/5 p-6'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register-user' element={<Register/>}/>
              <Route path='/register-class' element={<RegisterClass/>}/>
              <Route path='/register-routine' element={<Routine/>}/>
            </Routes>
          </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
