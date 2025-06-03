import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTools, FaSignInAlt, FaUserPlus, FaWater } from 'react-icons/fa';
 
const Nav = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaWater className="text-2xl" />
          <h1 className="text-xl font-bold">Alerta Enchentes BR</h1>
        </div>
       
        <nav className="flex items-center space-x-6">
          <Link to="/" className="flex items-center hover:text-blue-200 transition">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/sobre" className="flex items-center hover:text-blue-200 transition">
            <FaInfoCircle className="mr-1" /> Sobre
          </Link>
          <Link to="/solucao" className="flex items-center hover:text-blue-200 transition">
            <FaTools className="mr-1" /> Soluções
          </Link>
          <Link to="/login" className="flex items-center hover:text-blue-200 transition">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
          <Link to="/cadastrar" className="flex items-center hover:text-blue-200 transition">
            <FaUserPlus className="mr-1" /> Cadastrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
 
export default Nav;