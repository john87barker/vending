import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _draw() {
  document.getElementById('total').innerText = ProxyState.money.toString()

}
export default class VendingController {
  constructor() {
    // console.log('vending from contr working')
    _draw()
  }
  add() {
    // console.log('vending from ADDcontr working')
    vendingService.add()
    _draw()
  }
  
  buy() {
    // console.log('buy function at controller')
    vendingService.buy()
    _draw()
  }
  clear() {
   
    vendingService.clear()
    _draw()
  }

}
