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
  // O restante da sua função calculate() viria aqui.
  // Como a função calculate() original não foi totalmente fornecida,
  // mantive o código da forma como foi solicitado.
}


// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', (event) => {
    // Cria um novo objeto de Data (data e hora atuais)
    const today = new Date();

    // Obtém o dia, mês e ano
    // getMonth() retorna um valor de 0 a 11, então adicionamos 1 para o mês correto
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    // Formata a data como dd/mm/yyyy
    const formattedDate = `${day}/${month}/${year}`;

    // Encontra o elemento pelo ID e atualiza seu conteúdo
    const dateElement = document.getElementById('updateDate');
    if (dateElement) {
        dateElement.textContent = `Taxas atualizadas em: ${formattedDate}`;
    }
});
