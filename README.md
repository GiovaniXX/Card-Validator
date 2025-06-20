# 💳 Card Validator

---

## 🚀 Como Funciona

O **Card Validator** é uma implementação em JavaScript para identificar a bandeira de cartões de crédito e débito a partir do número informado. O sistema reconhece as principais bandeiras do mercado, incluindo **Visa**, **MasterCard**, **Elo**, **American Express**, **Discover**, **Hipercard**, **Diners Club**, **EnRoute**, **JCB**, **Voyager** e **Aura**.

---

## 📂 Estrutura dos Arquivos

- `cardFlag.js`: Contém a lógica de identificação das bandeiras e a função para exibir mensagens personalizadas.
- `src/index.js`: Arquivo principal de execução, onde você pode testar a identificação de diferentes cartões.

---

## 🛠️ Como Usar

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd Card-Validator
   ```

2. **Execute o projeto:**
   ```bash
   node src/index.js
   ```

3. **Adicione ou teste outros números de cartão em `src/index.js` usando a função `printCardFlagMessage`.**

---

## 🧩 Exemplo de Uso

No arquivo `src/index.js`:

```javascript
const { printCardFlagMessage } = require('../cardFlag');

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
```

A saída será uma mensagem personalizada para cada cartão, por exemplo:

```
✅ Cartão reconhecido: Visa! Seu cartão é aceito com segurança e praticidade.
⚠️ Ops! Não conseguimos identificar a bandeira do seu cartão. Por favor, verifique os dados.
```

---

## 📝 Como Funciona a Identificação

- O número do cartão é limpo para conter apenas dígitos.
- O sistema percorre uma lista de bandeiras, cada uma com seu padrão (regex).
- Ao encontrar uma correspondência, retorna o nome da bandeira.
- Se não encontrar, retorna "Unknown" e exibe uma mensagem de alerta.

---

## ✨ Personalização

Para adicionar novas bandeiras, basta incluir um novo objeto na lista `cardFlags` em `cardFlag.js` com o nome e o padrão desejado.

---

## 📢 Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções ou inclusão de novas bandeiras!

---

## **📢 Contribuição**

Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções ou inclusão de novas bandeiras!
