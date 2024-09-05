
async function processarFaturamento() {
    // Carregar os dados do faturamento de um arquivo JSON (simulação)
    const faturamento = await fetch('faturamento.json').then(response => response.json());

    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;

    
    faturamento.forEach(dia => {
        const valor = dia.valor;

        // Ignorar dias sem faturamento (valor 0.0)
        if (valor > 0) {
            // Atualizar menor e maior faturamento
            if (valor < menorFaturamento) menorFaturamento = valor;
            if (valor > maiorFaturamento) maiorFaturamento = valor;

            // Somar o faturamento e contar os dias com faturamento
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    });

    // Calcular a média mensal
    const mediaMensal = somaFaturamento / diasComFaturamento;

    // Contar os dias com faturamento acima da média
    faturamento.forEach(dia => {
        const valor = dia.valor;
        if (valor > mediaMensal) diasAcimaDaMedia++;
    });

    console.log(`Menor valor de faturamento: ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
}


processarFaturamento();
