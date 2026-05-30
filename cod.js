const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question ("digite o nome do cupom: ", (resposta) => {
 if ( resposta === "promo30"){
    console.log ("ok")

const porcentagem = 100;
const papo10 = 30;

const sabadao = porcentagem * (papo10 /100);
const papo20 = porcentagem - sabadao;

console.log (`valor inicial ${porcentagem}`)
console.log (`valor desconto em % ${papo10}`)
console.log (`valor final em % ${papo20}`)


fs.readFile('cupons.json', 'utf-8', (err, dadosTexto) => {
    if (err) {
        console.log("Erro ao ler o arquivo de cupons:", err.message);
        return;
    }

    const saptp3 = JSON.parse(dadosTexto);

    console.log("=== CUPONS CADASTRADOS ===");

   saptp3.forEach((cupom) => {
        console.log(`Cupom: ${cupom.nomepromo} | Desconto: ${cupom.desconto}% | Status: ${cupom.status}`);
    });
    console.log("===========================\n");

    
});

}else{
    console.log ("cupom inativo")
}

});


