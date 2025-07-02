import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from "react-router";
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [text,setText]=useState('');
  
  const handleSearchText=(textVal)=>{
    console.log(textVal)
    setText(textVal);
  }

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage text={text} handleSearchText={handleSearchText}/>}/>
            <Route path='/search' element={<SearchPage text={text} handleSearchText={handleSearchText}/>}/>
            <Route path='/:productId/view' element={<ViewPage/>}/>

            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;