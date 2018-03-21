
class Selector {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        $("#expression").on("keypress", $.proxy(this.onKeypress, this))
        console.log("Selector.onReady")
    }
    get Expression() {
        return $.trim($("#expression").val())
    }
    get IsHighlight() {
        return $("#highlight").prop("checked")
    }
    run() {
        $("*").removeClass("highlight")

        if (this.Expression === "") {
            return;
        }

        let elem = null
        if (this.Expression.startsWith("$")) {
            elem = eval(this.Expression)
        }
        else {
            elem = $(this.Expression)
        }

        if (!(elem instanceof jQuery)) {
            console.log(this.Expression + " returns '" + elem + "'")
            return
        }

        console.log(this.Expression + " returns " + elem.length + " elements")
        if (!this.IsHighlight) {
            return;
        }

        elem = elem.not(".selector").not("#expression").not("#highlight").not("label[for=highlight]")

        elem.each(function (i, e) {
            let element = $(e)
            if (element.is(":checkbox") || element.is(":radio") || element.is("img")) {
                element.parent().addClass("highlight")
            }
            else {
                element.addClass("highlight")
            }
        })
    }
    onKeypress(e) {
        if (e.which != 13) {
            return
        }

        this.run()
    }
}

let selector = new Selector()
selector.RegisterOnReady()