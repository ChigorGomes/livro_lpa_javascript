// Exercícios

//a)
console.log("Questão A\n")
const numero = 15;
const vizinhoAnterior = numero - 1;
const vizinhoPosterior= numero + 1;
console.log(`Número: 15`,` Número: ${numero}`);
console.log(`Vizinhos: 14 e 16`,`Vizinhos: ${vizinhoAnterior} e ${vizinhoPosterior}`)


//b)
console.log("\n")
console.log("Questão B\n")
const valorDaConta = 90.00;
const numeroClientes = 3;
const valorPorCliente = valorDaConta / numeroClientes;

console.log(`Valor da Conta R$: 90.00`, ` Valor da Conta R$: ${valorDaConta.toFixed(2)}` )
console.log(`Número de Clientes: 3`, ` Número de Clientes: ${numeroClientes}`)
console.log(`Valor por cliente: R$ 30.00`, ` Valor por cliente: R$ ${valorPorCliente.toFixed(2)}`)


//c)
console.log("\n")
console.log("Questão C\n")

const preco = 60.00;
const precoAvista = preco - (preco * 0.10)
const precoParcelado3X= preco / 3 ;
console.log(`Preço R$: 60.00`, `Preço R$: ${preco.toFixed(2)}`)
console.log(`Á vista R$: 54.00`, `Á vista R$: ${precoAvista.toFixed(2)}`)
console.log(`Ou 3x de R$: 20.00`, ` Ou 3x de R$: ${precoParcelado3X.toFixed(2)}`) 



//d)
console.log("\n")
console.log("Questão D\n")
const nota1 = 7.0;
const nota2 = 8.0;
const media = (nota1 + nota2) / 2
console.log(`1ª Nota: 7.0`, `1ª Nota: ${nota1.toFixed(1)}`)
console.log(`2ª Nota: 8.0`, `2ª Nota: ${nota2.toFixed(1)}`)
console.log(`Média: 7.5`, `Média: ${media.toFixed(1)}`)

