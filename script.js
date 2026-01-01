// Adiciona um listener para a mudança na seleção do tipo de conversão
document.getElementById('conversionType').addEventListener('change', function() {
    const type = this.value;
    const inputSection = document.getElementById('inputSection');
    const inputLabel = document.getElementById('inputLabel');
    
    if (type === 'rtre') {
        inputLabel.textContent = 'Quantos Robux você tem?';
        inputSection.style.display = 'block';
    } else if (type === 'retr') {
        inputLabel.textContent = 'Quantos reais você tem?';
        inputSection.style.display = 'block';
    } else {
        inputSection.style.display = 'none';
    }
    // Limpa o resultado e o input ao mudar a opção
    document.getElementById('result').textContent = '';
    document.getElementById('amountInput').value = '';
});

function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const amountInput = document.getElementById('amountInput').value;
    const resultElement = document.getElementById('result');
    
    // Limpa o resultado anterior
    resultElement.textContent = '';

    // Validação básica do input
    if (amountInput === '' || isNaN(amountInput) || parseFloat(amountInput) <= 0) {
        resultElement.textContent = 'Esse valor não existe.';
        return;
    }

    const amount = parseFloat(amountInput);
    let resultMessage = '';

    if (conversionType === 'rtre') {
        // Lógica: robux / 100 * 4.80
        const reais = (amount / 100) * 4.80;
        resultMessage = `Você vai poder vender por entorno de: ${reais.toFixed(2)} reais.`;
    } else if (conversionType === 'retr') {
        // Lógica: reais * 20.83
        const robuxRate = 20.83;
        const robux = amount * robuxRate;
        resultMessage = `Você vai ganhar entorno de ${Math.floor(robux)} robux.`;
    } else {
        resultMessage = 'Por favor, selecione um tipo de conversão válido.';
    }

    resultElement.textContent = resultMessage;
}
