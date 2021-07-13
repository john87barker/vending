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

  buy(snack) {
    const find = ProxyState.snack.find(s => s.name == snack)
    if (ProxyState.money >= find.price) {
      ProxyState.money -= find.price
      window.alert(`Your ${find.name} is on it's way! Enjoy your treat and feel free to share!`)
    }

  }
  clear() {
    ProxyState.money = 0
    // console.log('money gone')
  }
}

export const vendingService = new VendingService();

