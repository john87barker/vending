import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _draw() {
  document.getElementById('total').innerText = ProxyState.money.toString()
  let template = ''

  ProxyState.snack.forEach(s => {
    template += /*html*/ `
    <button type="button" class="btn btn-info p-4 m-1 col-md-3" onclick="app.vendingController.buy('${s.name}')">Buy ${s.name} <br> $${s.price} </button>`
  })
  document.getElementById('snack').innerHTML = template
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

  buy(snack) {
    // console.log('buy function at controller')
    vendingService.buy(snack)
    _draw()
  }
  clear() {

    vendingService.clear()
    _draw()
  }

}
