// import "./App.css";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import About from "./components/About ";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import ChatAssistant from "./components/ChatAssistant";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
      <Footer />
      <ChatAssistant /> {/* Add Chat Assistant */}
    </Router>
  );
}

export default App;
