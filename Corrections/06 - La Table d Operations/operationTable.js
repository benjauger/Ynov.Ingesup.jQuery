/// <reference path="operation.js" />

class OperationTable {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        // 3.f
        $("#BtnExecuteAll").on("click", $.proxy(this.onBtnExecuteAllClick, this))

        console.log("OperationTable.onReady")
    }
    static GetHtmlRow(type, value) {
        let html = '<tr>'
        html += '<td class="delete"><img src="img/delete.png" title="Supprimer" /></td>'
        html += '<td class="operation">' + Operation.GetTypeName(type) + '</td>'
        html += '<td class="value">' + value + '</td>'
        html += '<td class="result">&nbsp;</td>'
        html += '<td class="execute"><button>Ex&eacute;cuter</button></td>'
        html += '</tr>'
        return html
    }
    // 3.b
    Add(operation) {
        $(OperationTable.GetHtmlRow(operation.Type, operation.Value)).appendTo("#Operations > tbody")

        // 3.d
        $("#Operations > tbody > tr:last > .delete > img").on("click", $.proxy(this.onIconDeleteClick, this))

        // 3.e
        $("#Operations > tbody > tr:last").data("operation", operation).children(".execute").children("button").on("click", $.proxy(this.onBtnExecuteClick, this))
    }
    // 3.b
    // 3.d
    onIconDeleteClick(e) {
        // 3.g
        $(e.currentTarget).parent("td").parent("tr").nextAll("tr").each($.proxy(this.ClearRow, this))
        // 3.g

        $(e.currentTarget).parent("td").parent("tr").remove()
    }
    // 3.d
    // 3.e
    Execute(row) {
        $("#Operations > tbody > tr").children(".result").removeClass('highlight')

        let operation = row.data("operation")

        let result = null
        if (row.prev("tr").length === 0) {
            if ($("#StartValue").val() === "") {
                alert("Veuillez saisir une valeur de démarrage.")
                return
            }

            result = operation.Execute(parseInt($("#StartValue").val()))
        }
        else {
            let prevResult = row.prev("tr").children(".result").data("result")
            if (prevResult === undefined) {
                alert("Veuillez exécuter les opérations précédentes.")
                return
            }

            result = operation.Execute(prevResult)
        }

        row.children(".result").data("result", result).text(result).addClass('highlight')
    }
    onBtnExecuteClick(e) {
        let row = $(e.currentTarget).parent("td").parent("tr")
        this.Execute(row)
    }
    // 3.e
    // 3.f
    ExecuteAll(row) {
        this.Execute(row)

        let nextRow = row.next("tr")
        if (nextRow.length === 0) {
            return
        }

        setTimeout(() => this.ExecuteAll(nextRow), 500)
    }
    onBtnExecuteAllClick(e) {
        if ($("#Operations > tbody > tr").length === 0) {
            alert("Veuillez ajouter au moins une opération.")
            return
        }

        // 3.h
        $("#Operations > tbody > tr").each($.proxy(this.ClearRow, this))
        // 3.h

        let row = $("#Operations > tbody > tr:first")
        this.ExecuteAll(row)
    }
    // 3.f
    // 3.g
    ClearRow(i, e) {
        $(e).children(".result").removeData("result").text("")
    }
    // 3.g
}
