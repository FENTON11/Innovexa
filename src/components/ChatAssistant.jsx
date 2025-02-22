// import React, { useState, useEffect } from "react";
// import { FaCommentDots } from "react-icons/fa";
// import axios from "axios";

// const ChatAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showText, setShowText] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! My name is Zara. How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   // Show "Need some help?" after 2 minutes
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowText(true);
//     }, 120000); // 120,000ms = 2 minutes
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);
//     setInput("");

//     try {
//       const response = await axios.post("http://localhost:5000/chat", {
//         message: input,
//       });

//       const aiResponse = response.data.reply;
//       setMessages((prev) => [...prev, { sender: "bot", text: aiResponse }]);
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't process that." }]);
//     }
//   };

//   return (
//     <div>
//       {/* Floating Chat Icon with Help Message */}
//       <div className="fixed bottom-6 right-6 flex items-center space-x-2">
//         {showText && !isOpen && (
//           <div className="bg-gray-800 text-white px-3 py-1 rounded-md shadow-md flex items-center space-x-2">
//             <span>Need some help?</span>
//             <button
//               className="text-white font-bold"
//               onClick={() => setShowText(false)}
//             >
//               ✖
//             </button>
//           </div>
//         )}
//         <button
//           className="bg-highlight p-4 rounded-full text-white shadow-lg"
//           onClick={() => {
//             setIsOpen(!isOpen);
//             setShowText(false);
//           }}
//         >
//           <FaCommentDots size={24} />
//         </button>
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-16 right-6 bg-white shadow-xl rounded-lg w-80">
//           <div className="p-4 bg-primary text-white rounded-t-lg flex justify-between">
//             <span>Chat Assistant</span>
//             <button onClick={() => setIsOpen(false)} className="text-white">✖</button>
//           </div>
//           <div className="p-4 h-60 overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 my-1 rounded-md ${
//                   msg.sender === "user" ? "bg-gray-300 text-right" : "bg-gray-100"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="p-2 flex border-t">
//             <input
//               type="text"
//               className="flex-grow p-2 border rounded-md"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={handleSend} className="bg-highlight text-white px-4 ml-2 rounded-md">
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatAssistant;

import { useState, useEffect } from "react";
import { FaCommentDots } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! My name is Zara. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  // Show "Need some help?" after 2 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 120000); // 120,000ms = 2 minutes
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: input,
      });

      const aiResponse = response.data.reply;
      setMessages((prev) => [...prev, { sender: "bot", text: aiResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't process that." },
      ]);
    }
  };

  return (
    <div>
      {/* Floating Chat Icon & Help Message */}
      <div className='fixed bottom-6 right-6 flex items-center space-x-2'>
        <AnimatePresence>
          {showText && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className='bg-gray-800 text-white px-3 py-1 rounded-md shadow-md flex items-center space-x-2'
            >
              <span>Need some help?</span>
              <button
                className='text-white font-bold'
                onClick={() => setShowText(false)}
              >
                ✖
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className='bg-highlight p-4 rounded-full text-white shadow-lg'
          onClick={() => {
            setIsOpen(!isOpen);
            setShowText(false);
          }}
        >
          <FaCommentDots size={24} />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className='fixed bottom-16 right-6 bg-white shadow-xl rounded-lg w-80'
          >
            <div className='p-4 bg-primary text-white rounded-t-lg flex justify-between'>
              <span>Chat Assistant</span>
              <button onClick={() => setIsOpen(false)} className='text-white'>
                ✖
              </button>
            </div>
            <div className='p-4 h-60 overflow-y-auto'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-1 rounded-md ${
                    msg.sender === "user"
                      ? "bg-gray-300 text-right"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className='p-2 flex border-t border-t-primary'>
              <input
                type='text'
                className='flex-grow p-2 border border-primary rounded-md'
                placeholder='Type a message...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={handleSend}
                className='bg-primary text-white px-4 ml-2 rounded-md'
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatAssistant;
