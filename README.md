# Sistema de Cadastro de Alunos e Estatísticas

Este projeto consiste em uma aplicação web simples feita com **React** e estilizada com **TailwindCSS**, onde é possível:

* Cadastrar alunos com nome, sobrenome, e-mail, senha e cursos;
* Selecionar múltiplos cursos para cada aluno;
* Editar e excluir alunos cadastrados;
* Visualizar estatísticas de alunos por curso;
* Trocar entre abas de cadastro e estatísticas.

## Tecnologias Utilizadas

* React (Vite ou Create React App)
* TailwindCSS
* JavaScript (ES6+)

## Estrutura do Projeto

```
📁 alunos-app/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── CadastroAluno.jsx
│   │   ├── ListaAlunos.jsx
│   │   └── Estatisticas.jsx
│   ├── App.js
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Como Executar o Projeto

1. Clone o repositório

```bash
git clone https://github.com/seuusuario/alunos-app.git
cd alunos-app
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o projeto em `http://localhost:5173` (ou porta definida pelo Vite).

---

## Comentários nos Códigos (em Português)

Os arquivos dos componentes contêm comentários explicativos em **português** para facilitar o entendimento e aprendizado. Cada função importante foi documentada com:

* Descrição clara da sua função;
* Explicação de parâmetros e retornos (quando aplicável);
* Orientações para manutenção ou melhoria futura.

---

## Funcionalidades

### Aba de Cadastro

* Formulário para entrada de nome, sobrenome, e-mail e senha;
* Lista de checkboxes para selecionar os cursos disponíveis;
* Botão de cadastro adiciona o aluno à lista de maneira temporária (em memória);
* Após cadastro, o aluno aparece na lista logo abaixo do formulário;
* Possui botões para editar ou excluir o aluno.

### Aba de Estatísticas

* Exibe a lista de cursos com quantidade de alunos matriculados em cada um;
* Só são mostrados cursos com ao menos um aluno.

---

## Observações

* Os dados não são persistidos em banco de dados, sendo armazenados somente na memória enquanto a aplicação estiver rodando.
* O projeto é ideal para fins educativos e testes com formulários e manipulação de estado no React.

---

## Melhorias Futuras

* Persistência de dados com banco de dados (ex: Firebase, PostgreSQL);
* Integração com backend (Node.js/Express);
* Validações de formulário mais completas;
* Paginação da lista de alunos e filtros.

---

Desenvolvido por Daniel 🚀
