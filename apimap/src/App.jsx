import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [desenhos, setDesenhos] = useState([]); // Armazena todos os personagens

  const pagarDados = async () => {
    const Dados = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
    setDesenhos(Dados.data); // Armazena o array completo
  };

  useEffect(() => {
    pagarDados();
  }, []);

  return (
    <>
      <h1>API + Map</h1>

      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Renderizando todos os personagens */}
        {desenhos.map((desenho) => (
          <article key={desenho.id} style={{ textAlign: "center" }}>
            <img src={desenho.image} alt={desenho.name} style={{ width: "150px", borderRadius: "8px" }} />
            <h2>{desenho.name}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
