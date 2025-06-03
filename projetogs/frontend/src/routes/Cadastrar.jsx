import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
 
const Cadastrar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
const handleSubmit = (e) => {
  e.preventDefault();

  fetch('http://localhost:5000/cadastrar', {
    method: 'POST',                    
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(formData),   
  })
  .then(response => response.json()) 
  .then(data => {
    console.log('Resposta do backend:', data);
    alert(data.message || 'Cadastro realizado com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
    alert('Erro ao enviar dados.');
  });
};

 
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
     
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-8">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
            Cadastro para Alertas
          </h1>
         
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaUser className="inline mr-2" />
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaEnvelope className="inline mr-2" />
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaLock className="inline mr-2" />
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaMapMarkerAlt className="inline mr-2" />
                Endereço (Área de Risco)
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaPhone className="inline mr-2" />
                Telefone para Alertas
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition mt-4"
            >
              Cadastrar para Receber Alertas
            </button>
          </form>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Cadastrar;