export default function Estatisticas({ alunos, cursos }) {
    // Contar quantos alunos tem por curso
    const cursosComAlunos = cursos
        .map((curso) => {
            const quantidade = alunos.filter((aluno) =>
                aluno.cursos.some((c) => c.id === curso.id)
            ).length;

            return {
                ...curso,
                quantidade,
            };
        })
        // Mostrar apenas cursos com 1 ou mais alunos
        .filter((curso) => curso.quantidade > 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Estatísticas de Alunos por Curso
            </h2>

            {cursosComAlunos.length === 0 ? (
                <p className="text-center text-gray-500">Nenhum aluno cadastrado ainda.</p>
            ) : (
                <ul className="space-y-2">
                    {cursosComAlunos.map((curso) => (
                        <li key={curso.id} className="flex justify-between border-b pb-1">
                            <span>{curso.nome}</span>
                            <span className="font-semibold text-blue-600">
                                {curso.quantidade} aluno(s)
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
