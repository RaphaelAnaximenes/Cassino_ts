import UserData from "../../protocols/userData"

class User<U extends UserData> {
    wallet: number = 50;
    currentBet: number = 0;

    constructor(public name: string, public balance: number) {
    }

    addMoney<U extends UserData>(player: U, value: number) {
        if (player.wallet <= 0 || player.wallet < value) {
            throw new Error("Not enough money bro, srry :/");
        } 
        player.wallet -= value;
        player.balance += value;
    }

    setBet<U extends UserData>(player: U, betAmount: number){
    player.currentBet = betAmount;
    
    if (player.balance < player.currentBet) {
        throw new Error("not enough credits");
    }
    if (!betAmount || betAmount <= 0) {
        throw new Error("Invalid bet amount");
    }
    player.balance -= betAmount;
    }

}

export default User;