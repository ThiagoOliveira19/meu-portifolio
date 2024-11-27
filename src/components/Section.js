import React from 'react';

function Section({ title }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>Aqui vai o conteúdo da seção de {title.toLowerCase()}.</p>
    </section>
  );
}

export default Section;
