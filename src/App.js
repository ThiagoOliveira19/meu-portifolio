import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>Sobre Mim</h2>
          <p>Olá, sou Thiago Silva, um desenvolvedor apaixonado por tecnologia, Segurança da informação e Cloud...</p>
        </section>

        <section id="education">
          <h2>Educação</h2>
          <p>Estudante de Análise e desenvolvimento de sistemas pela UNIDESC...</p>
        </section>

        <section id="experience">
          <h2>Experiência Profissional</h2>
          <ul>
            <li>Auxiliar Administrativo - Ciem Transporte - 10/2022 - atual</li>
          </ul>
        </section>

        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
