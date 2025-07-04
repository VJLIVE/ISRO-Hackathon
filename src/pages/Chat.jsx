import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      message: '👋 Welcome to the MOSDAC Help Bot. How can I assist you with satellite data today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = {
      sender: 'user',
      message: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    setTimeout(() => {
      const botMsg = {
        sender: 'bot',
        message: `🔍 Searching MOSDAC data for: "${trimmed}"`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsThinking(false);
    }, 1200);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  return (
    <div className="min-h-screen starry-bg text-white flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-3xl h-[90vh] bg-slate-800 border border-indigo-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="p-5 bg-slate-900 border-b border-indigo-700 text-center">
          <h1 className="text-2xl font-bold text-white">🛰 MOSDAC AI Assistant</h1>
          <p className="text-sm text-gray-400">Ask about satellites, missions, datasets, or docs</p>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} sender={msg.sender} message={msg.message} timestamp={msg.timestamp} />
          ))}

          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-slate-700 text-gray-300 px-4 py-2 rounded-2xl rounded-bl-none text-sm animate-pulse">
                Thinking<span className="dot-flash">...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-900 border-t border-indigo-700 flex gap-2">
          <input
            className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Show rainfall data from INSAT-3D"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

// Chat bubble component
function ChatBubble({ sender, message, timestamp }) {
  const isUser = sender === 'user';
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-3 text-sm rounded-2xl shadow-sm ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-slate-700 text-gray-200 rounded-bl-none'
        }`}
      >
        <p>{message}</p>
        <div className="text-xs text-gray-400 mt-1 text-right">{formattedTime}</div>
      </div>
    </div>
  );
}
