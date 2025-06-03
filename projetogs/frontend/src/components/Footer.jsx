import React from 'react';
import { FaGithub, FaLinkedin, FaUniversity } from 'react-icons/fa';
 
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold flex items-center">
              <FaUniversity className="mr-2" /> GS Tech Solutions
            </h2>
            <p className="text-sm mt-2">Tecnologia para prevenir tragédias</p>
          </div>
         
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
       
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm">
          <p>© 2024 Projeto GS - FIAP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;