import User from '../entities/Player/User';
import UserData from "../protocols/userData"


describe('User tests', () => {
    let user: User<UserData>;

    beforeEach(() => {
        user = new User('XuxaDaSilva', 100);
    });

    it('ensure User initializes with a name, balance, and a wallet of 50 bucks', () => {
        expect(user.name).toEqual('XuxaDaSilva');
        expect(user.balance).toEqual(100);
        expect(user.wallet).toEqual(50);
    });

    it('ensure that addMoney methods increase the User\'s wallet balance \(and charge for it\)',
     () => {
        user.addMoney(user, 50);
        expect(user.balance).toEqual(150); 
        expect(user.wallet).toEqual(0); 
    });
    
    it('ensure that a valid bet is acceptable (and charged from wallet)', () => {
        user.setBet(user, 50);
        expect(user.balance).toEqual(50); 
        expect(user.currentBet).toEqual(50);
        expect(() => user.setBet(user, 50)).not.toThrow();
    });

    it('ensure that throws an error for an invalid bet amounts', () => {
        expect(() => user.setBet(user, 200)).toThrow('not enough credits');
        expect(() => user.setBet(user, 0)).toThrow('Invalid bet amount');
    });




});
