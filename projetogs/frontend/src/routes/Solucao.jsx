import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  FaWater,
  FaChartLine,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaBell,
  FaCloudRain,
  FaSatelliteDish
} from 'react-icons/fa';
 
const Solucao = () => {
  const solutions = [
    {
      icon: <FaWater className="text-5xl mb-4 text-blue-500" />,
      title: "Sensores Inteligentes",
      description: "Rede de sensores IoT para monitoramento em tempo real dos níveis dos rios e córregos, com transmissão de dados a cada 5 minutos.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <FaChartLine className="text-5xl mb-4 text-purple-500" />,
      title: "IA Preditiva",
      description: "Algoritmos de machine learning que analisam padrões históricos e preveem áreas de risco com 85% de precisão até 72 horas antes.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: <FaMobileAlt className="text-5xl mb-4 text-green-500" />,
      title: "APP de Alertas",
      description: "Aplicativo móvel com notificações push em tempo real para a população em áreas de risco, incluindo rotas de evacuação.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl mb-4 text-red-500" />,
      title: "Mapas de Risco",
      description: "Plataforma colaborativa com mapas interativos mostrando áreas vulneráveis e pontos de apoio em tempo real.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: <FaShieldAlt className="text-5xl mb-4 text-yellow-500" />,
      title: "Barreiras Inteligentes",
      description: "Sistemas de contenção automática que se ativam quando detectam aumento crítico no nível das águas.",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700"
    },
    {
      icon: <FaSatelliteDish className="text-5xl mb-4 text-indigo-500" />,
      title: "Monitoramento por Satélite",
      description: "Análise de imagens de satélite para identificar mudanças no curso de rios e áreas de alagamento potencial.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];
 
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
     
      <main className="flex-grow">
        {}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Soluções Tecnológicas para Enchentes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conheça nossas inovações para prevenir e mitigar os efeitos das enchentes no Brasil
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                Como Funciona?
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 transform hover:scale-105">
                Fale Conosco
              </button>
            </div>
          </div>
        </section>
 
        {}
        <section className="container mx-auto py-16 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossas Tecnologias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinação de hardware e software para criar um sistema integrado de prevenção a enchentes
            </p>
          </div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`${solution.bgColor} rounded-xl shadow-lg overflow-hidden border-t-4 ${solution.borderColor} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="p-8 text-center">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-white shadow-md">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <button className={`${solution.buttonColor} text-white font-medium py-2 px-6 rounded-full transition duration-300`}>
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
 
        {}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">+85%</div>
                <p className="text-blue-100">Precisão nas previsões</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-blue-100">Monitoramento contínuo</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">5min</div>
                <p className="text-blue-100">Atualização de dados</p>
              </div>
            </div>
          </div>
        </section>
 
        {}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Pronto para implementar em sua cidade?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Nossa equipe está pronta para ajudar a proteger sua comunidade contra enchentes
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-blue-900 transition duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Demonstração
            </button>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Solucao;