import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Solucao from './routes/Solucao'
import Login from './routes/Login'
import Cadastrar from './routes/Cadastrar'
import Error from './routes/Error'
import Chat from './routes/Chat' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/chat" element={<Chat />} /> {}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App