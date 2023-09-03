interface UserData {
    name: string;
    balance: number;
    wallet: number;
}

class User<U extends UserData> {
    wallet: number = 50;

    constructor(public name: string, public balance: number) {
    }

    static AddMoney<U extends UserData>(player: U, value: number) {
        if (player.wallet <= 0 || player.wallet < value) {
            throw new Error("Not enough money bro, srry :/");
        } 
        
        player.balance += value;
        console.log(`${player.name} added ${value} to wallet`);
    }
    
}
