/// <reference path="operation.js" />

class OperationTable {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
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
}
