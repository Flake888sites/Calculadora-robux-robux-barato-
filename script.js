
// Adiciona um listener para mudar o label quando o tipo de conversão muda
document.getElementById('conversionType').addEventListener('change', function() {
    const type = this.value;
    const label = document.getElementById('amountLabel');
    if (type === 'rtre') {
        label.textContent = 'Quantos Robux você tem?';
    } else {
        label.textContent = 'Quantos Reais você tem?';
    }
});

function calculate() {
    const conversionType = document.getElementById('conversionType').value;
    const amountInput = document.getElementById('amountInput').value;
    const resultElement = document.getElementById('result');

    // Validação básica para garantir que o input é um número válido
    const amount = parseFloat(amountInput);

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Esse valor não existe ou é inválido.';
        return;
    }

    let resultMessage = '';

    if (conversionType === 'rtre') {
        // Lógica: robux / 100 * 4.80 (baseado no código Python)
        // Isso parece ser uma taxa de venda (quanto você recebe por 100 Robux)
        const reais = (amount / 100) * 4.80;
        resultMessage = `Você vai poder vender por entorno de: R$ ${reais.toFixed(2)} reais.`;
    } else if (conversionType === 'retr') {
        // Lógica: reais * 20.83 (baseado no código Python)
        // Isso parece ser a taxa de compra (quantos Robux você ganha por Real)
        const robux = amount * 20.83;
        resultMessage = `Você vai ganhar entorno de ${robux.toFixed(0)} robux.`;
    }

    resultElement.textContent = resultMessage;
}
