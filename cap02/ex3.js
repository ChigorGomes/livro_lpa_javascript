const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    const terceiroProduto = preco * 0.5;
    const valorPromocaoTerceiroProduto = (preco * 3) - terceiroProduto;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorPromocaoTerceiroProduto.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}`;
    e.preventDefault();
});
