import React, { useState } from "react";

export default function CadastroAluno({ setAlunos, alunos, cursos }) {
    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        cursosSelecionados: [],
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setForm((prev) => ({
                    ...prev,
                    cursosSelecionados: [...prev.cursosSelecionados, value],
                }));
            } else {
                setForm((prev) => ({
                    ...prev,
                    cursosSelecionados: prev.cursosSelecionados.filter((c) => c !== value),
                }));
            }
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !form.nome ||
            !form.sobrenome ||
            !form.email ||
            !form.senha ||
            form.cursosSelecionados.length === 0
        ) {
            alert("Preencha todos os campos e selecione ao menos um curso");
            return;
        }

        const novoAluno = {
            id: Date.now(),
            nome: form.nome,
            sobrenome: form.sobrenome,
            email: form.email,
            senha: form.senha,
            cursos: cursos.filter((curso) =>
                form.cursosSelecionados.includes(curso.id.toString())
            ),
        };

        setAlunos([...alunos, novoAluno]);

        setForm({
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            cursosSelecionados: [],
        });
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Cadastro de Aluno</h2>

            <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
            />

            <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                value={form.sobrenome}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
            />

            <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={form.senha}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
            />

            <div className="mb-4">
                <p className="font-semibold mb-1">Selecione os cursos:</p>
                {cursos.map((curso) => (
                    <label key={curso.id} className="block">
                        <input
                            type="checkbox"
                            name="cursosSelecionados"
                            value={curso.id}
                            checked={form.cursosSelecionados.includes(curso.id.toString())}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        {curso.nome}
                    </label>
                ))}
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Cadastrar
            </button>
        </form>
    );
}
