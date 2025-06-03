import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Login attempt:', { email, password });
  };
 
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
     
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
            <FaSignInAlt className="inline mr-2" />
            Acesso ao Sistema
          </h1>
         
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FaUser className="inline mr-2" />
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
           
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center"
            >
              <FaSignInAlt className="mr-2" />
              Entrar
            </button>
           
            <div className="text-center text-sm">
              <p className="text-gray-600">
                Não tem conta?{' '}
                <a href="/cadastrar" className="text-blue-600 hover:underline">
                  Cadastre-se
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Login;