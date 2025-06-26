import React, { useState } from "react";

export default function ListaAlunos({ alunos, setAlunos, cursos }) {
    const [editandoId, setEditandoId] = useState(null);
    const [formEdit, setFormEdit] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        cursosSelecionados: [],
    });

    function iniciarEdicao(aluno) {
        setEditandoId(aluno.id);
        setFormEdit({
            nome: aluno.nome,
            sobrenome: aluno.sobrenome,
            email: aluno.email,
            senha: aluno.senha,
            cursosSelecionados: aluno.cursos.map((c) => c.id.toString()),
        });
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setFormEdit((prev) => ({
                    ...prev,
                    cursosSelecionados: [...prev.cursosSelecionados, value],
                }));
            } else {
                setFormEdit((prev) => ({
                    ...prev,
                    cursosSelecionados: prev.cursosSelecionados.filter((c) => c !== value),
                }));
            }
        } else {
            setFormEdit((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    function salvarEdicao(e) {
        e.preventDefault();

        if (
            !formEdit.nome ||
            !formEdit.sobrenome ||
            !formEdit.email ||
            !formEdit.senha ||
            formEdit.cursosSelecionados.length === 0
        ) {
            alert("Preencha todos os campos e selecione ao menos um curso");
            return;
        }

        const novosCursos = cursos.filter((curso) =>
            formEdit.cursosSelecionados.includes(curso.id.toString())
        );

        const alunosAtualizados = alunos.map((aluno) =>
            aluno.id === editandoId
                ? {
                    ...aluno,
                    nome: formEdit.nome,
                    sobrenome: formEdit.sobrenome,
                    email: formEdit.email,
                    senha: formEdit.senha,
                    cursos: novosCursos,
                }
                : aluno
        );

        setAlunos(alunosAtualizados);
        setEditandoId(null);
    }

    function cancelarEdicao() {
        setEditandoId(null);
    }

    function excluirAluno(id) {
        if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
            setAlunos(alunos.filter((aluno) => aluno.id !== id));
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-xl font-bold mb-4">Alunos Cadastrados</h2>

            {alunos.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}

            {alunos.map((aluno) => (
                <div
                    key={aluno.id}
                    className="border p-4 mb-4 rounded shadow-sm bg-white"
                >
                    {editandoId === aluno.id ? (
                        <form onSubmit={salvarEdicao}>
                            <input
                                type="text"
                                name="nome"
                                value={formEdit.nome}
                                onChange={handleChange}
                                className="w-full p-2 mb-2 border rounded"
                                placeholder="Nome"
                            />
                            <input
                                type="text"
                                name="sobrenome"
                                value={formEdit.sobrenome}
                                onChange={handleChange}
                                className="w-full p-2 mb-2 border rounded"
                                placeholder="Sobrenome"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formEdit.email}
                                onChange={handleChange}
                                className="w-full p-2 mb-2 border rounded"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                name="senha"
                                value={formEdit.senha}
                                onChange={handleChange}
                                className="w-full p-2 mb-4 border rounded"
                                placeholder="Senha"
                            />

                            <div className="mb-4">
                                <p className="font-semibold mb-1">Cursos:</p>
                                {cursos.map((curso) => (
                                    <label key={curso.id} className="block">
                                        <input
                                            type="checkbox"
                                            name="cursosSelecionados"
                                            value={curso.id}
                                            checked={formEdit.cursosSelecionados.includes(
                                                curso.id.toString()
                                            )}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {curso.nome}
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded mr-2 hover:bg-green-700"
                            >
                                Salvar
                            </button>
                            <button
                                type="button"
                                onClick={cancelarEdicao}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancelar
                            </button>
                        </form>
                    ) : (
                        <>
                            <p>
                                <strong>
                                    {aluno.nome} {aluno.sobrenome}
                                </strong>
                            </p>
                            <p>Email: {aluno.email}</p>
                            <p>Cursos: {aluno.cursos.map((c) => c.nome).join(", ")}</p>
                            <div className="mt-2 flex space-x-2">
                                <button
                                    onClick={() => iniciarEdicao(aluno)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => excluirAluno(aluno.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Excluir
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
