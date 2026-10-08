function calcularSubtotal(itens) {
    let preco = 0, quantidade = 0, subtotal = 0;
    for (let i = 0; i < itens.length; i++) {
        preco = itens[i].preco;
        quantidade = itens[i].quantidade;
        subtotal += preco * quantidade;
    } return subtotal;
};
let itens = [
    {nome: "x", preco: 150, quantidade: 2},
    {nome: "y", preco: 200, quantidade: 1},
    {nome: "z", preco: 80, quantidade: 1},
];
console.log(calcularSubtotal(itens));