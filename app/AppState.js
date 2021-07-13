import Vending from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
   money = 0
  
  vending = new Vending('Doritos', 1)
  vending = new Vending('Dr. Pepper', 1.25)
  vending = new Vending('Twizzler', .75)
}

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
