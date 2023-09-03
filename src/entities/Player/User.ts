import UserData from "../../protocols/userData"

class User<U extends UserData> {
    wallet: number = 50;
    currentBet?: number;

    constructor(public name: string, public balance: number) {
    }

    static AddMoney<U extends UserData>(player: U, value: number) {
        if (player.wallet <= 0 || player.wallet < value) {
            throw new Error("Not enough money bro, srry :/");
        } 
        
        player.balance += value;
        console.log(`${player.name} added ${value} to wallet`);
    }

    setBet(betAmount: number): void {
        if (betAmount <= 0 || betAmount > this.balance) {
            throw new Error("Invalid bet amount");
        }
        if(!betAmount) throw new Error("Invalid bet amount");
        
        this.currentBet = betAmount;
        console.log(`${this.name} set a bet of ${betAmount}`);
    }

}

export default User;