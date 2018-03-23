/// <reference path="operation.js" />

class OperationPanel {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        // 3.a
        $("#BtnRandom").on("click", $.proxy(this.onBtnRandomClick, this))

        // 3.b
        $("#BtnAdd").on("click", $.proxy(this.onBtnAddClick, this))

        // 3.c
        $("#BtnGenerate").on("click", $.proxy(this.onBtnGenerateClick, this))

        console.log("OperationPanel.onReady")
    }
    // 3.a
    onBtnRandomClick(e) {
        let operation = Operation.GenerateRandom()
        $("#OperationType").val(operation.Type)
        $("#OperationValue").val(operation.Value)
    }
    // 3.a
    // 3.b
    onBtnAddClick(e) {
        if ($("#OperationValue").val() === "") {
            alert("Veuillez saisir tous les champs.")
            return
        }

        let operation = new Operation($("#OperationType").val(), parseInt($("#OperationValue").val()))
        $(this).trigger("add", operation)
    }
    // 3.b
    // 3.c
    onBtnGenerateClick(e) {
        let operations = new Array()
        let number = parseInt($("#OperationNumber").val())
        for (let i = 0; i < number; i++) {
            operations.push(Operation.GenerateRandom())
        }

        $(this).trigger("generate", { operations: operations })
    }
    // 3.c
}
