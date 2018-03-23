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
        // 3.b
        $(this.Panel).on("add", $.proxy(this.onPanelAdd, this))

        // 3.c
        $(this.Panel).on("generate", $.proxy(this.onPanelGenerate, this))

        console.log("Calculator.onReady")
    }
    // 3.b
    onPanelAdd(e, data) {
        this.Table.Add(data)
    }
    // 3.b
    // 3.c
    onPanelGenerate(e, data) {
        for (let i = 0; i < data.operations.length; i++) {
            this.Table.Add(data.operations[i])
        }
    }
    // 3.c
}

let calculator = new Calculator()
calculator.RegisterOnReady()
