import UserData from "../../protocols/userData"
import { NoFundsException, InvalidBetAmountException } from "../../errors/errors-index";

class User<U extends UserData> {
    wallet: number = 50;
    currentBet: number = 0;

    constructor(public name: string, public balance: number) {
    }

    addMoney<U extends UserData>(player: U, value: number) {
        if (player.wallet <= 0 || player.wallet < value) {
            throw new NoFundsException();
        } 
        player.wallet -= value;
        player.balance += value;
    }

    setBet<U extends UserData>(player: U, betAmount: number){
    player.currentBet = betAmount;
    
    if (player.balance < player.currentBet) {
        throw new NoFundsException();
    }
    if (!betAmount || betAmount <= 0) {
        throw new InvalidBetAmountException();
    }
    player.balance -= betAmount;
    }

}

export default User;