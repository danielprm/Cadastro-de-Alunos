import { useState } from "react";
import CadastroAluno from "./components/CadastroAluno";
import ListaAlunos from "./components/ListaAlunos";
import Estatisticas from "./components/Estatisticas";

const cursosDisponiveis = [
  { id: 1, nome: "Python" },
  { id: 2, nome: "JavaScript" },
  { id: 3, nome: "CSS" },
  { id: 4, nome: "HTML" },
  { id: 5, nome: "Node.js" },
  { id: 6, nome: "React" },
  { id: 7, nome: "Banco de Dados" },
  { id: 8, nome: "Git e GitHub" },
];

export default function App() {
  const [aba, setAba] = useState("cadastro");
  const [alunos, setAlunos] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setAba("cadastro")}
          className={`px-6 py-2 rounded font-semibold shadow transition-colors duration-300 ${aba === "cadastro"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
            }`}
        >
          Cadastro
        </button>
        <button
          onClick={() => setAba("estatisticas")}
          className={`px-6 py-2 rounded font-semibold shadow transition-colors duration-300 ${aba === "estatisticas"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border border-green-600"
            }`}
        >
          Estatísticas
        </button>
      </div>

      {aba === "cadastro" && (
        <>
          <CadastroAluno
            setAlunos={setAlunos}
            alunos={alunos}
            cursos={cursosDisponiveis}
          />
          <ListaAlunos
            alunos={alunos}
            setAlunos={setAlunos}
            cursos={cursosDisponiveis}
          />
        </>
      )}

      {aba === "estatisticas" && (
        <Estatisticas alunos={alunos} cursos={cursosDisponiveis} />
      )}
    </div>
  );
}
