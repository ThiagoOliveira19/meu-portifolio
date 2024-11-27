// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projetos Destacados</h2>
      <div className="project">
        <h3>Clima-Hoje</h3>
        <p>Desenvolvimento de uma API que exibe dados fictícios sobre o clima, desenvolvido para uma atividade do curso de Programação Web I</p>
        <a href="https://github.com/ThiagoOliveira19/clima-hoje">Projeto no github</a>

      </div>
      <div>
        <h3>Pipeline de Dados</h3>
        <p>Projeto de Pipeline de dados realizado através da criação de duas DAGS de extração de dados para aplicação de conhecimentos obtidos em cursos da plataforma alura.</p>
        <a href="https://github.com/ThiagoOliveira19/estudo-airflow">Projeto no github</a>
         </div>
         <div>
        <h3>Conta Bancária</h3>
        <p>Projeto pessoal idealizado em um desafio de um curso da alura para criar uma conta bancária com opções de saldo, saque e consulta de saldo.</p>
        <a href="https://github.com/ThiagoOliveira19/ContaBancaria">Projeto no github</a>
         </div>
    </section>
  );
}

export default Projects;
