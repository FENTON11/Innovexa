
import { useState, useEffect, useRef } from "react";
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
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Show help text after 2 minutes of inactivity
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 120000);
    return () => clearTimeout(timer);
  }, []);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^(?:\+254|0)?7\d{8}$/.test(phone);

  const isValidName = (name) =>
    name.trim().split(" ").length >= 2;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      if (step === 0) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Got it! Please leave your details so we can contact you even if you're no longer on the site. 👇",
          },
        ]);
        setStep(2);
      }
    } catch (error) {
      console.error("Error in chat flow:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const errors = [];
    if (!isValidName(name)) errors.push("a full name (e.g., John Doe)");
    if (!isValidEmail(email)) errors.push("a valid email (e.g., john@example.com)");
    if (!isValidPhone(phone)) errors.push("a valid Kenyan phone number (e.g., 0712345678)");
    if (message.length < 10) errors.push("a longer message (at least 10 characters)");

    if (errors.length > 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Oops! Please make sure to include:\n- ` + errors.join("\n- "),
        },
      ]);
      return;
    }

    setIsTyping(true);
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/contact`, {
        name,
        email,
        phone,
        message,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thanks, ${name.split(" ")[0]}! Your message has been sent. We'll get back to you soon.`,
        },
      ]);
      setStep(0);
      form.reset();
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong while sending your message. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="font-sans">
      {/* Floating Icon & Auto Message */}
      <div className='fixed bottom-6 right-6 flex items-end space-x-2 z-50'>
        <AnimatePresence>
          {showText && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              className='bg-gray-800 text-white px-3 py-2 rounded-md shadow-lg flex items-center space-x-2'
            >
              <span className="text-sm">Need some help?</span>
              <button
                className='text-white hover:text-gray-300 text-sm'
                onClick={() => setShowText(false)}
                aria-label="Close help message"
              >
                ✖
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className='bg-highlight p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow'
          onClick={() => {
            setIsOpen(!isOpen);
            setShowText(false);
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <FaCommentDots size={24} />
        </motion.button>
      </div>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className='fixed bottom-24 right-6 bg-white shadow-xl rounded-lg w-80 max-w-[90vw] z-40 overflow-hidden'
          >
            <div className='p-4 bg-primary text-white flex justify-between items-center'>
              <span className="font-medium">Chat Assistant</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className='text-white hover:text-gray-200'
                aria-label="Close chat"
              >
                ✖
              </button>
            </div>

            <div className='p-4 h-60 overflow-y-auto flex flex-col space-y-3'>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white self-end rounded-tr-none"
                      : "bg-gray-100 text-gray-800 self-start rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-100 text-gray-800 self-start rounded-tl-none rounded-br-lg p-3 max-w-[40%]"
                >
                  <div className="flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {step === 2 ? (
              <div className='p-4 border-t border-gray-200'>
                <form
                  className='flex flex-col space-y-3'
                  onSubmit={handleSubmitForm}
                >
                  <input 
                    type='text' 
                    name='name' 
                    placeholder='Full Name' 
                    className='p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary' 
                    required 
                  />
                  <input 
                    type='email' 
                    name='email' 
                    placeholder='Email Address' 
                    className='p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary' 
                    required 
                  />
                  <input 
                    type='tel' 
                    name='phone' 
                    placeholder='Phone Number (e.g., 0712345678)' 
                    className='p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary' 
                    required 
                  />
                  <textarea 
                    name='message' 
                    placeholder='Your message...' 
                    className='p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary' 
                    rows='3' 
                    required 
                  />
                  <button 
                    type='submit' 
                    className='bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50'
                    disabled={isTyping}
                  >
                    {isTyping ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            ) : (
              <div className='p-3 border-t border-gray-200'>
                <div className='flex'>
                  <input
                    type='text'
                    className='flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary text-sm'
                    placeholder='Type a message...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSend}
                    className='bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors disabled:opacity-50'
                    disabled={!input.trim() || isTyping}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatAssistant;
