/// <reference path="operation.js" />

class OperationPanel {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        console.log("OperationPanel.onReady")
    }
}
