export class InvalidBetAmountException extends Error {
    constructor (){
      super(`Invalid bet`)
      this.name = 'InvalidBetAmountException'
    }
  }