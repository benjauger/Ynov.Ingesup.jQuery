
class Events {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        console.log("Events.onReady")
    }
}

let events = new Events()
events.RegisterOnReady()
