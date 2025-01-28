import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [desenhos, setDesenhos] = useState([]); // Armazena todos os produtos
  const [loading, setLoading] = useState(true); // Controle de loading
  const [error, setError] = useState(null); // Armazena erros de requisição

  // Função para pegar os dados da API
  const pegarDados = async () => {
    setLoading(true); // Inicia o carregamento

    try {
      const response = await axios.get("https://fakestoreapi.com/products"); // Corrigido o endpoint
      setDesenhos(response.data);
    } catch (err) {
      setError("Erro ao carregar os dados. Tente novamente mais tarde.");
      console.error("Erro ao carregar os dados:", err);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    pegarDados(); // Chama a função para buscar os dados ao montar o componente
  }, []);

  return (
    <>
      <header>
        <div>
          <img
            className="image"
            src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1593360200/avatars/003/473/701/3473701-original.png?1593360200"
            alt="Rick"
          />
        </div>
        <h1>API + Map</h1>
      </header>

      <section >
        {/* Exibe um texto de loading ou erro enquanto os dados são carregados */}
        {loading && !error ? (
          <div>Carregando...</div>
        ) : error ? (
          <div>{error}</div> // Exibe o erro para o usuário
        ) : (
          desenhos.map((desenho) => (
            <article key={desenho.id} style={{ textAlign: "center", width: "200px" }}>
              <img
                src={desenho.image}
                alt={desenho.title}
                style={{ width: "150px", borderRadius: "8px" }}
              />
              <h2>{desenho.title}</h2>
            </article>
          ))
        )}
      </section>

      <footer style={{ position: "relative", overflow: "hidden", height: "50px", backgroundColor: "#333" }}>
        <div
        >
          <span >
            <a href="https://www.linkedin.com/in/maria-clara-valotti-2869b51ab/">Linkedin</a> |{" "}
          </span>
          <span style={{ marginRight: "50px" }}>API + Map com React | </span>
          <span>Maria Clara Valotti</span>
        </div>
      </footer>
    </>
  );
}
