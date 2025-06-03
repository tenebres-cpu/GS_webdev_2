import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaWater, FaChartBar, FaUsers, FaExclamationTriangle } from 'react-icons/fa';
 
const Sobre = () => {
  const stats = [
    { icon: <FaWater className="text-3xl" />, value: "21 mil", label: "Inundações (1991-2022)" },
    { icon: <FaUsers className="text-3xl" />, value: "110 milhões", label: "Pessoas afetadas" },
    { icon: <FaChartBar className="text-3xl" />, value: "R$ 8 bilhões", label: "Perdas anuais" },
    { icon: <FaExclamationTriangle className="text-3xl" />, value: "8 milhões", label: "Em áreas de risco" }
  ];
 
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
     
      <main className="flex-grow container mx-auto p-6">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
            Sobre o Projeto Alerta Enchentes
          </h1>
         
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">O Problema</h2>
            <p className="mb-4">
              As enchentes no Brasil são tragédias anunciadas. De acordo com o Atlas Brasileiro de
              Desastres Naturais, entre 1991 e 2022, o país registrou mais de 21 mil inundações,
              afetando mais de 110 milhões de pessoas.
            </p>
            <p>
              Apenas em 2023, mais de 3,3 milhões de brasileiros foram impactados por eventos
              hidrológicos extremos, com ao menos 142 mortes associadas a enchentes e deslizamentos.
            </p>
          </div>
         
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-blue-500 mb-2">{stat.icon}</div>
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
         
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Nossa Solução</h2>
            <p className="mb-4">
              Utilizando tecnologia de ponta, desenvolvemos um sistema integrado de monitoramento e
              alerta precoce para áreas de risco de enchentes.
            </p>
            <p>
              Combinamos sensores IoT, inteligência artificial e um aplicativo móvel para fornecer
              alertas em tempo real à população e aos órgãos responsáveis.
            </p>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Sobre;