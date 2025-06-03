import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaExclamationTriangle, FaUsers, FaMoneyBillWave, FaWater, FaChartLine, FaBell } from 'react-icons/fa';
 
const Home = () => {
  const stats = [
    { icon: <FaExclamationTriangle className="text-4xl" />, value: "170 mortes", label: "No RS em 2024", color: "text-red-500" },
    { icon: <FaUsers className="text-4xl" />, value: "2.3 milhões", label: "Pessoas afetadas", color: "text-blue-500" },
    { icon: <FaMoneyBillWave className="text-4xl" />, value: "R$ 20 bi", label: "Em perdas", color: "text-green-500" },
    { icon: <FaWater className="text-4xl" />, value: "21 mil", label: "Inundações (1991-2022)", color: "text-cyan-500" }
  ];
 
  const features = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Monitoramento em Tempo Real",
      description: "Sensores IoT que alertam sobre riscos de enchentes"
    },
    {
      icon: <FaBell className="text-3xl" />,
      title: "Sistema de Alertas",
      description: "Notificações instantâneas para a população em risco"
    },
    {
      icon: <FaWater className="text-3xl" />,
      title: "Previsão Avançada",
      description: "IA que prevê enchentes com 48h de antecedência"
    }
  ];
 
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Nav />
     
      <main className="flex-grow">
        {}
        <section className="relative bg-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tecnologia Contra as Enchentes no Brasil</h1>
              <p className="text-xl mb-8">Soluções inovadoras para prevenir tragédias e salvar vidas</p>
              <Link
                to="/solucao"
                className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
        </section>
 
        {}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">O Problema em Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                  <div className={`${stat.color} mb-4`}>{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Como a Tecnologia Pode Ajudar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Quer Receber Alertas de Enchentes?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Cadastre-se agora e receba informações em tempo real sobre riscos na sua região</p>
            <Link
              to="/cadastrar"
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Cadastre-se Gratuitamente
            </Link>
          </div>
        </section>
      </main>
     
      <Footer />
    </div>
  );
};
 
export default Home;