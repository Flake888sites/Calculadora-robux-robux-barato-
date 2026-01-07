// A taxa do Roblox é de 30% (o criador recebe 70%)
const ROBLOX_FEE_PERCENT = 0.30;
const CREATOR_SHARE_PERCENT = 0.70;

// Valores de referência em Reais por Robux (exemplo da fonte mencionada, ajuste conforme necessário)
// Estes valores são hipotéticos e devem ser atualizados com valores reais.
const REAIS_POR_ROBUX = {
    // Exemplo: 100 Robux custam R$ [valor]
    min: 0.012, 
    max: 0.015,
};

function updateLabel() {
    const conversionType = document.getElementById('conversionType').value;
    const amountLabel = document.getElementById('amountLabel');
    const amountInput = document.getElementById('amountInput');

    if (conversionType === 'rtre') {
        amountLabel.textContent = 'Quantos Robux você tem?';
        amountInput.placeholder = 'Digite o valor em Robux';
    } else if (conversionType === 'retr') {
        amountLabel.textContent = 'Quantos Reais você tem?';
        amountInput.placeholder = 'Digite o valor em Reais (R$)';
    } else if (conversionType === 'gpprice') {
        amountLabel.textContent = 'Quantos Robux você deseja receber? (Líquido)';
        amountInput.placeholder = 'Digite o valor em Robux';
    }
    document.getElementById('result').textContent = 'O resultado aparecerá aqui.';
}

function calculate() {
    const conversionType = document.getElementById('conversionType').value;
    const amountInput = document.getElementById('amountInput');
    const resultParagraph = document.getElementById('result');
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultParagraph.textContent = 'Por favor, insira um valor numérico válido maior que zero.';
        return;
    }

    let resultMessage = '';

    switch (conversionType) {
        case 'rtre':
            // Robux para Reais
            const reaisMin = (amount * REAIS_POR_ROBUX.min).toFixed(2);
            const reaisMax = (amount * REAIS_POR_ROBUX.max).toFixed(2);
            resultMessage = `Você receberia aproximadamente entre R$ ${reaisMin} e R$ ${reaisMax}.`;
            break;

        case 'retr':
            // Reais para Robux
            const robuxMin = Math.floor(amount / REAIS_POR_ROBUX.max);
            const robuxMax = Math.floor(amount / REAIS_POR_ROBUX.min);
            resultMessage = `Você receberia aproximadamente entre ${robuxMin.toLocaleString()} e ${robuxMax.toLocaleString()} Robux.`;
            break;
            
        case 'gpprice':
            // Calcular preço da Gamepass para ganhar X Robux líquidos
            // Se o criador recebe 70%, o preço total deve ser o valor desejado / 0.70
            const requiredPrice = Math.ceil(amount / CREATOR_SHARE_PERCENT); 
            // O Roblox arredonda os preços de gamepass para números inteiros. Usamos Math.ceil para garantir que o valor líquido seja atingido ou superado.
            
            const robuxFee = Math.ceil(requiredPrice * ROBLOX_FEE_PERCENT);
            const creatorReceives = requiredPrice - robuxFee;

            resultMessage = `O preço da sua Gamepass deve ser de ${requiredPrice.toLocaleString()} Robux.`;
            resultMessage += `\n(Taxa do Roblox: ${robuxFee.toLocaleString()} Robux. Você receberá ${creatorReceives.toLocaleString()} Robux líquidos).`;
            break;
            
        default:
            resultMessage = 'Selecione um tipo de conversão válido.';
    }

    resultParagraph.textContent = resultMessage;
}

// Inicializa o label na primeira carga
document.addEventListener('DOMContentLoaded', updateLabel);

