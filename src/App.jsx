import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import About from "./components/About ";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import ChatAssistant from "./components/ChatAssistant";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
      <ChatAssistant /> {/* Add Chat Assistant */}
    </Router>
  );
}

export default App;
