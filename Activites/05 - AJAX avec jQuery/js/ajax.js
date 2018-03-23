
class Ajax {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        console.log("Ajax.onReady")
    }
    static get Url() {
        return "https://jsonplaceholder.typicode.com/photos"
    }
}

let ajax = new Ajax()
ajax.RegisterOnReady()
