const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

// 1. Imprima no console a quantidade de pessoas Total.
let tamanhoArrayTotal = data.length;
console.log(tamanhoArrayTotal);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
let filtroSexoF = data.filter((pessoa) => pessoa.sexo === "F");
console.log(filtroSexoF.length);

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalarialTotal = data.reduce((acc, curr) => acc + curr.salario, 0);
console.log(somaSalarialTotal);

// 4. Imprima no console a média do salário de todas as pessoas.
let mediaSalarialTotal = somaSalarialTotal / tamanhoArrayTotal;
console.log(mediaSalarialTotal.toFixed(2));

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
let filtroSexoM = data.filter((pessoa) => pessoa.sexo === "M");
let somaSalarialM = filtroSexoM.reduce((acc, curr) => acc + curr.salario, 0);
console.log(somaSalarialM);

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
let arrayM = filtroSexoM.length;
let mediaSalarialM = somaSalarialM / arrayM;
console.log(mediaSalarialM.toFixed(2));

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
let salarioMaior7000 = data.some((data) => data.salario > 7000);
console.log(salarioMaior7000);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
console.log(data.findIndex((i) => i.nome === "Eva Trindade"));

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
console.log(data.filter((pessoa) => pessoa.nome.includes("Silva")));

// 10. Imprima os nomes utilizando o MAP
console.log(data.map((nomes) => nomes.nome));
