import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import ProjectPage from "./components/ProjectPage";

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Toolkit />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>

        <footer className="bg-gray-700 text-white py-8 text-center mt-auto">
          <p>Made with React & Tailwind</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
