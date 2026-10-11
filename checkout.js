function calcularSubtotal(itens) {
    let preco = 0, quantidade = 0, subtotal = 0;
    for (let i = 0; i < itens.length; i++) {
        preco = itens[i].preco;
        quantidade = itens[i].quantidade;
        subtotal += preco * quantidade;
    } return subtotal;
};
function contarItens(itens) {
    let quantidade = 0;
    for (let i = 0; i < itens.length; i++) {
        quantidade += itens[i].quantidade;
    } return quantidade;
};

/// 2 cupomm
 function aplicarCupom (cupom, subtotal){
    if (cupom === "DESC10"){
        return subtotal * 0.10;
    } else if(cupom === "DESC20" && subtotal >= 200){
        return subtotal * 0.20;
    }
    else if (cupom === "FRETEGRATIS") {
        return 15;
    }
    else{
      return 0;
    }
}

function finalizarCompra(itens, codigoCupom) {
    let subtotal = calcularSubtotal(itens);
    let desconto = aplicarCupom(codigoCupom, subtotal);
    let compra = {};
    compra.subtotal = subtotal;
    compra.desconto = desconto;
    compra.total = subtotal - desconto;
    return compra;
};

const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
]; 
console.log(finalizarCompra(itens, "DESC10")); // { subtotal: 250, desconto: 25, total: 225 }