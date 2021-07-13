import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


// //Private
// function _draw() {
//   let values = ProxyState.values;
//   let template = ''
//   values.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }


//Public
export default class VendingController {
  constructor() {
    console.log('vending from contr working')
    
  }
  add() {
    console.log('vending from ADDcontr working')
  vendingService.add()
}
  

}
