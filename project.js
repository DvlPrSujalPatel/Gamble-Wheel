// 1. Deposite some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposite amount: ");
    const numberDepositeAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
      console.log("Invalid deposite amount, try again.");
    }else {
        return numberDepositeAmount;
    }
  }
};

deposit();
