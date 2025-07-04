import { useState, useRef, useEffect } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      message: '👋 Welcome to the MOSDAC Help Bot. How can I assist you with satellite data today?',
    },
  ])
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  const handleSend = () => {
    if (!input.trim()) return

    const newMessages = [...messages, { sender: 'user', message: input }]
    setMessages(newMessages)
    setInput('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', message: `🔍 Searching MOSDAC data for: "${input}"` },
      ])
    }, 1000)
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="min-h-screen starry-bg text-white flex items-center justify-center px-4 py-10">
      <div className="relative z-10 w-full max-w-3xl h-[90vh] bg-slate-800 border border-indigo-700 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <header className="p-5 bg-slate-900 border-b border-indigo-700 text-center">
          <h1 className="text-2xl font-bold text-white">🛰 MOSDAC AI Assistant</h1>
          <p className="text-sm text-gray-400">Ask anything about satellites, missions, or data.</p>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} sender={msg.sender} message={msg.message} />
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-900 border-t border-indigo-700 flex gap-2">
          <input
            className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type your question here..."
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
  )
}

// Chat bubble
function ChatBubble({ sender, message }) {
  const isUser = sender === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-3 text-sm rounded-2xl shadow ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-slate-700 text-gray-200 rounded-bl-none'
        }`}
      >
        {message}
      </div>
    </div>
  )
}
