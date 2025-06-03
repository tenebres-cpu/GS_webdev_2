import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Error = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
     
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">404 - Página Não Encontrada</h1>
          <p className="text-lg mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-block transition"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Error;