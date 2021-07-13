import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


export default class VendingController {
  constructor() {
    // console.log('vending from contr working')
    
  }
  add() {
    // console.log('vending from ADDcontr working')
  vendingService.add()
}
  buy() {
    // console.log('buy function at controller')
    vendingService.buy()
  }

}
