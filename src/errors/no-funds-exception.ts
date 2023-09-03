export class NoFundsException extends Error {
    constructor (){
      super(`Not enough funds`)
      this.name = 'NoFundsException'
    }
  }