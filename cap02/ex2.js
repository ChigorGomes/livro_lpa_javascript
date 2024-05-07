const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    const valorPor15MinDeUso = Number(frm.inValor.value);
    const tempoDeUso = Number(frm.inTempo.value);
    const valorAPagar = Math.ceil(tempoDeUso / 15) * valorPor15MinDeUso;
    resp1.innerText = `Valor a Pagar R$: ${valorAPagar.toFixed(2)}`;
    e.preventDefault();
})