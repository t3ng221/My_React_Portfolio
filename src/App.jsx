import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skills";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import HomePage from "./pages/HomePage";
import Experiences from "./pages/experience";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Social />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quote" element={<Quote />} />
          <Route path="skills" element={<Skill />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
