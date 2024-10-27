const alunos = [
    {
        nome: "Ana",
        nota: 5
    },
    {
        nome: "Bernardo",
        nota: 3
    },
    {
        nome: "Júlia",
        nota: 7
    },
    {
        nome: "Gustavo",
        nota: 9
    },
    {
        nome: "Rodrigo",
        nota: 6
    }
]

const filtraAlunos = (aluno) => aluno.nota >= 6;
const notaDosAlunos = alunos.filter(filtraAlunos)
console.log(notaDosAlunos)