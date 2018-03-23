/// <reference path="operation.js" />
/// <reference path="operationPanel.js" />
/// <reference path="operationTable.js" />

class Calculator {
    constructor() {
        this.Panel = new OperationPanel()
        this.Table = new OperationTable()
    }
    RegisterOnReady() {
        this.Panel.RegisterOnReady()
        this.Table.RegisterOnReady()

        $($.proxy(this.onReady, this))
    }
    onReady() {
        console.log("Calculator.onReady")
    }
}

let calculator = new Calculator()
calculator.RegisterOnReady()
