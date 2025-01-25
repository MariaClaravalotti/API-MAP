import { useState, useEffect } from "react";
import axios from 'axios';

export default function App() {
  const [desenhos, setDesenhos] = useState([]); // Armazena todos os personagens

  const pegarDados = async () => {
    const Dados = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
    setDesenhos(Dados.data); // Armazena o array completo
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>
    <header>
      <div>
      <img className="image" src="https://licensingcon.com.br/wp-content/uploads/2019/08/rick.png" alt="" />
      </div>
      <h1>API + Map</h1>
    </header>

      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Renderizando todos os personagens */}
        {desenhos.map((desenho) => (
          <article key={desenho.id} style={{ textAlign: "center" }}>
            <img src={desenho.image} alt={desenho.name} style={{ width: "150px", borderRadius: "8px" }} />
            <h2>{desenho.name}</h2>
          </article>
        ))}
      </section>
      <footer style={{ position: "relative", overflow: "hidden", height: "50px", backgroundColor: "#333" }}>
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "marquee 15s linear infinite",
            color: "#fff",
            fontSize: "1rem",
            paddingLeft: "100%",
          }}
        >
          <span style={{ marginRight: "50px" }}><a href="https://www.linkedin.com/in/maria-clara-valotti-2869b51ab/">Linkedin</a>| </span>
          <span style={{ marginRight: "50px" }}>API + Map com React | </span>
          <span style={{ marginRight: "50px" }}>Maria Clara Valotti</span>
        </div>
      </footer>
    </>
  );
}
