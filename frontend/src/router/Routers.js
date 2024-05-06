// import React from 'react'
// import {Routes,Route,Navigate} from 'react-router-dom'

// import Home from './../pages/Home'
// import Tours from './../pages/Tours'
// import TourDetails from './../pages/TourDetails'
// import Login from './../pages/Login'
// import Register from './../pages/Register'
// import SearchResultList from './../pages/SearchResultList'

// const Routers = () => {
//   return (
//     <Routes>
//         <Route path='/' element={<Navigate to='/home'/>}/>
//         <Route path='/home' element={<Navigate to='/Home'/>}/>
//         <Route path='/tours' element={<Navigate to='/Tours'/>}/>
//         <Route path='/tours/:id' element={<Navigate to='/TourDetails'/>}/>
//         <Route path='/login' element={<Navigate to='/Login'/>}/>
//         <Route path='/register' element={<Navigate to='/Register'/>}/>
//         <Route path='/tour/search' element={<Navigate to='/SearchResultList'/>}/>s
//     </Routes>
//   )
// }

// export default Routers

import React from 'react';
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import {Routes,Route,Navigate} from 'react-router-dom';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home'/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tour/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
