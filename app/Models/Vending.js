export default class Value {
    constructor(data) {
        this.name = data.name
        this.price = data.price
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
    }
}
