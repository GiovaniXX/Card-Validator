const cardFlags = [
    { name: 'Visa', pattern: /^4/ },
    { name: 'MasterCard', pattern: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/ },
    { name: 'Elo', pattern: /^(4011|4312|4389)/ },
    { name: 'American Express', pattern: /^(34|37)/ },
    { name: 'Discover', pattern: /^(6011|65|64[4-9])/ },
    { name: 'Hipercard', pattern: /^6062/ },
    { name: 'Diners Club', pattern: /^(30[0-5]|36|38|39)/ },
    { name: 'EnRoute', pattern: /^(2014|2149)/ },
    { name: 'JCB', pattern: /^35/ },
    { name: 'Voyager', pattern: /^8699/ },
    { name: 'Aura', pattern: /^50(?:[0-9]{2,17})/ }
];

function getCardFlag(cardNumber) {
    const num = String(cardNumber).replace(/\D/g, '');
    for (const flag of cardFlags) {
        if (flag.pattern.test(num)) {
            return flag.name;
        }
    }
    return 'Unknown';
}

function printCardFlagMessage(cardNumber) {
    const flag = getCardFlag(cardNumber);
    if (flag !== 'Unknown') {
        console.log(`✅ Cartão reconhecido: ${flag}! Seu cartão é válido.`);
    } else {
        console.log('⚠️ Ops! Não conseguimos identificar a bandeira do seu cartão. Por favor, verifique os dados.');
    }
}

// Exemplo de uso:
printCardFlagMessage('4111111111111111'); // Visa
printCardFlagMessage('5500000000000004'); // MasterCard
printCardFlagMessage('4011780000000000'); // Elo
printCardFlagMessage('340000000000009');  // American Express
printCardFlagMessage('6011000000000004'); // Discover
printCardFlagMessage('6062825624254001'); // Hipercard
printCardFlagMessage('30569309025904');   // Diners Club
printCardFlagMessage('201400000000009');  // EnRoute
printCardFlagMessage('3530111333300000'); // JCB
printCardFlagMessage('8699260000000000'); // Voyager
printCardFlagMessage('5078601870000127980'); // Aura
printCardFlagMessage('1234567890123456'); // Unknown