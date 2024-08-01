import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Slider from './componentes/Slider/Slider'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Slider />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:category' element={<ItemListContainer/>} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
