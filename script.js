function updateLabel() {
    const conversionType = document.getElementById('conversionType').value;
    const amountLabel = document.getElementById('amountLabel');
    const amountInput = document.getElementById('amountInput');

    if (conversionType === 'rtre') {
        amountLabel.textContent = 'Quantos Robux você tem?';
        amountInput.placeholder = 'Ex: 1000';
    } else if (conversionType === 'retr') {
        amountLabel.textContent = 'Quantos Reais (R$) você tem?';
        amountInput.placeholder = 'Ex: 50.00';
    } else if (conversionType === 'gpprice') {
        amountLabel.textContent = 'Quantos Robux você deseja receber?';
        amountInput.placeholder = 'Ex: 500';
    }
}

function calculate() {
    const conversionType = document.getElementById('conversionType').value;
    const amountInput = document.getElementById('amountInput').value;
    const resultElement = document.getElementById('result');

    const amount = parseFloat(amountInput);
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Esse valor não existe ou é inválido.';
        return;
    }

    let resultMessage = '';

    if (conversionType === 'rtre') {
        const reais = (amount / 100) * 4.80;
        resultMessage = `Você vai poder vender por entorno de: R$ ${reais.toFixed(2)}`;
    } 
    else if (conversionType === 'retr') {
        const robux = amount * 20.83;
        resultMessage = `Você vai ganhar entorno de ${Math.floor(robux)} robux.`;
    } 
    else if (conversionType === 'gpprice') {
        // Cálculo: Valor / 0.7 (para compensar os 30% de taxa do Roblox)
        const gpPrice = Math.ceil(amount / 0.7);
        const taxa = gpPrice - amount;
        resultMessage = `Para receber ${amount} Robux, você deve colocar a Gamepass por: ${gpPrice} Robux (O Roblox ficará com ${taxa} de taxa).`;
    }

    resultElement.textContent = resultMessage;
}


