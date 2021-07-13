import Snack from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  money = 0
  
  snack = [
    new Snack('Doritos', 1, 10),
    new Snack('Dr. Pepper', 1.25, 10) ,
    new Snack('Twizzler', .75, 10)
  ]
}

// let dorito = new Snack('Doritos', 1, 10) 
// let DP = new Snack('Dr. Pepper', 1.25, 10) 
// let twizzler = new Snack('Twizzler', .75, 10)

// let vendingMaching = {
//   chip: {
//     name: Dorito,
//     price: 1
//   },

// }

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
