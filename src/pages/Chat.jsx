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
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(100);
  const [isThinking, setIsThinking] = useState(false);
  const [queryType, setQueryType] = useState('standard'); // standard | geo
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

    const payload = { question: trimmed };
    let endpoint = 'http://localhost:8000/query';

    if (queryType === 'geo') {
      endpoint = 'http://localhost:8000/query-geospatial';
      payload.location = location;
      payload.radius_km = radius;
    }

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        const botMsg = {
          sender: 'bot',
          message: data.answer || "🤖 Sorry, I couldn't find an answer.",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMsg]);
      })
      .catch(err => {
        const botMsg = {
          sender: 'bot',
          message: "🚨 Error: Could not reach the server.",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMsg]);
      })
      .finally(() => setIsThinking(false));
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

        {/* Input Section */}
        <div className="p-4 bg-slate-900 border-t border-indigo-700 flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={queryType === 'geo'
                ? "Enter your question about a location"
                : "Enter your question"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <select
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              className="bg-slate-700 text-white px-2 py-2 rounded-lg border border-slate-600"
            >
              <option value="standard">Standard</option>
              <option value="geo">Geospatial</option>
            </select>
            <button
              onClick={handleSend}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              ➤
            </button>
          </div>

          {queryType === 'geo' && (
            <div className="flex gap-2 mt-2">
              <input
                className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600"
                placeholder="Location (e.g. Kerala)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="number"
                className="w-24 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600"
                placeholder="Radius"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
              />
            </div>
          )}
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
        className={`max-w-[70%] px-4 py-3 text-sm rounded-2xl shadow-sm ${isUser
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
