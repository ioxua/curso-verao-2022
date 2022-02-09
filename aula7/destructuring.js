const obj = {
    x: 12,
    y: "oi",
    a: "outra chave",
    b: "outra chave 2",
};

const { x, y, ...resto } = obj;
console.log(x);
console.log(y);
console.log(resto);

const arr = [123, "ola", { a: 90 }, "final"];
const [numero, cumprimento, ...resto2] = arr;
console.log(numero);
console.log(cumprimento);
console.log(resto2);

console.log("===============");

const myNewObj = {
    nome: "joao",
    idade: 12,
};

if ("nome" in myNewObj) {
    console.log(myNewObj.nome);
}

if ("sobrenome" in myNewObj) {
    console.log(myNewObj.sobrenome);
} else {
    console.log('não há sobrenome');
}

console.log("===============");
