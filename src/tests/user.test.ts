import User from '../entities/Player/User';
import UserData from "../protocols/userData"


describe('User tests', () => {
    let user: User<UserData>;

    beforeEach(() => {
        user = new User('John', 100);
    });

    it('ensure User initializes with a name, balance, and a wallet of 50 bucks', () => {
        expect(user.name).toEqual('John');
        expect(user.balance).toEqual(100);
        expect(user.wallet).toEqual(50);
    });

    it('ensure that addMoney methods increase the User\'s wallet balance \(and charge for it\)',
     () => {
        User.addMoney(user, 50);
        expect(user.balance).toEqual(150); 
        expect(user.wallet).toEqual(0); 
    });


});
