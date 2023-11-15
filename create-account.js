function createAccount(pin, amount) {
    return { //looked at solution for help. 
        checkBalance(enterPin){
            //if the pin I enter does not match the correct pin, no balance can be
            //checked
            if(enterPin !== pin) return "Invalid PIN.";
            return `Balance: $${amount}`;
        }, deposit(enterPin, depositAmount){
            if(enterPin !== pin) return "Invalid PIN.";
            amount += depositAmount; //add to balance if pin is correct, 
            return `${depositAmount} has been deposited into your account. 
            Current Balance: ${amount}`
        }, withdraw(enterPin, withdrawAmount){
            if(enterPin !== pin) return "Invalid PIN.";
            amount -= withdrawAmount; //subtract from account balance
            return `${withdrawAmount} has been withdrawn from your account. 
            Current Balance: ${amount}`
        }, changePin(oldPin, newPin){
            if(oldPin !== newPin) return "Invalid PIN.";
            pin = newPin;
            return 'pin has been changed'
        }
    }
}

module.exports = { createAccount };
