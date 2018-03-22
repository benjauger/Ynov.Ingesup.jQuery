
class Dom {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        $("#btnMenu").on("click", $.proxy(this.onBtnMenuClick, this))
        $("#btnValidate").on("click", $.proxy(this.onBtnValidateClick, this))
        $("#btnAdd").on("click", $.proxy(this.onBtnAddClick, this))
        $("#chkAll").on("change", $.proxy(this.onChkAllChange, this))
        $("#btnRemove").on("click", $.proxy(this.onBtnRemoveClick, this))

        console.log("Dom.onReady")
    }
    onBtnMenuClick() {
        // 3.a
        $(".menu").toggle()
        // 3.a
    }
    onBtnValidateClick() {
        // 3.b
        $("select,input").removeClass("highlight").filter((i, e) => { return $(e).val() === ""; }).addClass("highlight")
        // 3.b
    }
    onBtnAddClick() {
        // 3.c
        let elems = $("select,input").removeClass("highlight").filter((i, e) => { return $(e).val() === ""; })
        if (elems.length > 0) {
            elems.addClass("highlight").first().focus()
            alert('Veuillez saisir tous les champs.')
            return
        }

        let person = {
            annee: $("[name=annee]:checked").val(),
            civilite: $("#civilite").val(),
            nom: $("#nom").val(),
            prenom: $("#prenom").val(),
            date: $("#date").val(),
            email: $("#email").val(),
            stage: $("#stage").prop("checked")
        }

        let html = '<tr>'
        html += '<td><input type="checkbox" /></td>'
        html += '<td class="annee">' + person.annee + '</td>'
        html += '<td class="civilite">' + person.civilite + '</td>'
        html += '<td class="nom">' + person.nom + '</td>'
        html += '<td class="prenom">' + person.prenom + '</td>'
        html += '<td class="date">' + person.date + '</td>'
        html += '<td class="email">' + person.email + '</td>'
        html += '<td class="stage">' + person.stage + '</td>'
        html += '</tr>'

        $("#persons > tbody").append(html)

        $("#chkAll").prop("checked", false)
        // 3.c
    }
    onChkAllChange() {
        // 3.d
        let checked = $("#chkAll").prop("checked")
        $("#persons > tbody > tr > td > input:checkbox").prop("checked", checked)
        // 3.d
    }
    onBtnRemoveClick() {
        // 3.e
        $("#persons > tbody > tr > td > input:checkbox:checked").parent("td").parent("tr").remove()
        // 3.e
    }
}

let dom = new Dom()
dom.RegisterOnReady()
