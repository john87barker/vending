import { ProxyState } from "../AppState.js";


class VendingService {
  // addValue() {
  //   ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  // }
  constructor() {
  console.log('vending service connecting and working')
  }
  
  add() {
    // let money = 0
    // let quarter = .25
    ProxyState.money += .25
  
    console.log(ProxyState.money)
  }

  buy() {
    if (ProxyState.money >= ProxyState.snack.price) {
      ProxyState.money -= ProxyState.snack.price
      console.log('bought chips')
    }
  }
  clear() {
    ProxyState.money = 0
    console.log('money gone')
  }
}

export const vendingService = new VendingService();

