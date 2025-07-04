// import { useState } from 'react'

// export default function InputBar({ onSend }) {
//   const [input, setInput] = useState("")

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input)
//       setInput("")
//     }
//   }

//   return (
//     <div className="flex items-center gap-2 p-4 border-t">
//       <input
//         type="text"
//         className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Ask me anything..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handleSend()}
//       />
//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         onClick={handleSend}
//       >
//         Send
//       </button>
//     </div>
//   )
// }
