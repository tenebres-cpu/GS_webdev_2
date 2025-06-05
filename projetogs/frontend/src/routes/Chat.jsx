import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaPaperPlane, FaUser, FaExclamationTriangle } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userName] = useState('Usuário Anônimo');
  const [region] = useState('Área de Risco - SP');
  const messagesEndRef = useRef(null);

  
  useEffect(() => {
    const initialMessages = [
      {
        id: 1,
        user: 'Sistema de Alerta',
        text: 'Bem-vindo ao chat de emergência! Aqui você pode conversar com outros moradores da sua região.',
        time: '10:00',
        isSystem: true
      },
      {
        id: 2,
        user: 'Maria Silva',
        text: 'Alguém mais está com água entrando em casa?',
        time: '10:05',
        isEmergency: true
      },
      {
        id: 3,
        user: 'José Santos',
        text: 'Sim, aqui no Jardim São Paulo já está com 50cm de água na rua',
        time: '10:07',
        isEmergency: true
      }
    ];
    setMessages(initialMessages);
  }, []);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      user: userName,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isEmergency: newMessage.toLowerCase().includes('ajuda') || newMessage.toLowerCase().includes('socorro')
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleEmergencyAlert = () => {
    const emergencyMessage = {
      id: messages.length + 1,
      user: 'Sistema de Alerta',
      text: `${userName} acionou um alerta de emergência! Autoridades foram notificadas.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSystem: true,
      isEmergency: true
    };

    setMessages([...messages, emergencyMessage]);
    alert('Alerta de emergência enviado às autoridades!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Nav />
      
      <main className="flex-grow container mx-auto p-4 flex flex-col">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center">
            <FaUser className="mr-2" />
            Chat de Emergência - {region}
          </h1>
          <p className="text-gray-600">
            Converse com outros moradores e compartilhe informações em tempo real
          </p>
        </div>

        <div className="flex-grow bg-white rounded-lg shadow-md p-4 mb-4 overflow-y-auto max-h-[60vh]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 p-3 rounded-lg ${message.isSystem ? 'bg-blue-50 border-l-4 border-blue-500' : ''} ${message.isEmergency ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50'}`}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className={`font-bold ${message.isSystem ? 'text-blue-600' : message.isEmergency ? 'text-red-600' : 'text-gray-800'}`}>
                  {message.user}
                </span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-gray-700">{message.text}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
            >
              <FaPaperPlane />
            </button>
            <button
              type="button"
              onClick={handleEmergencyAlert}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition flex items-center"
              title="Alerta de Emergência"
            >
              <FaExclamationTriangle />
            </button>
          </form>
        </div>

        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
          <h3 className="font-bold text-yellow-800 mb-2">Dicas de Segurança:</h3>
          <ul className="list-disc pl-5 text-yellow-700 text-sm">
            <li>Não compartilhe informações pessoais</li>
            <li>Verifique a veracidade das informações antes de agir</li>
            <li>Em caso de emergência real, ligue para 193 (Bombeiros)</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;