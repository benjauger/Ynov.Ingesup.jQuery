class Index {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        $("#Method").on("change", $.proxy(this.RefreshMethod, this))
        $("#Execute").on("click", $.proxy(this.onExecuteClick, this))
        $("#Eraser").on("click", $.proxy(this.onEraserClick, this))

        $(document).ajaxSend($.proxy(this.onAjaxSend, this))
        $(document).ajaxComplete($.proxy(this.onAjaxComplete, this))
        $(document).ajaxError($.proxy(this.onAjaxError, this))
        $(document).ajaxSuccess($.proxy(this.onAjaxSuccess, this))

        this.RefreshMethod()

        console.log("Index.onReady")
    }
    get CurrentMethod() {
        return $("#Method").val()
    }
    get CurrentUrl() {
        return $("#Url").val()
    }
    Log(msg) {
        $("#Eraser").show()
        var log = $(".log").append("<p>" + msg + "</p>")
        log.scrollTop(log.prop("scrollHeight"))
    }
    LogResponse(event, settings, xhr) {
        var msg = "<span>" + event + "</span>-<span>" + settings.url + "</span>"
        if (xhr.statusText) {
            msg += "-<span class='" + xhr.statusText + "'>" + xhr.status + " " + xhr.statusText + "</span>"
        }

        this.Log(msg)
    }
    RefreshMethod() {
        var method = Method.Get(this.CurrentMethod)
        $("#Code").text(method.code)
        $("#Url").val(method.url)

        hljs.initHighlighting.called = false
        hljs.initHighlighting()
    }
    onExecuteClick(e) {
        $("#Result").empty()
        if (this.CurrentUrl === "") {
            return
        }

        Method.Get(this.CurrentMethod).execute(this.CurrentUrl)
    }
    onEraserClick(e) {
        $(".log").children("p").remove()
        $("#Eraser").hide()
    }
    onAjaxSend(event, xhr, settings) {
        this.LogResponse("ajaxSend", settings, xhr)
    }
    onAjaxComplete(event, xhr, settings) {
        this.LogResponse("ajaxComplete", settings, xhr)
    }
    onAjaxError(event, jqxhr, settings, thrownError) {
        this.LogResponse("ajaxError", settings, jqxhr, thrownError)
    }
    onAjaxSuccess(event, xhr, settings) {
        this.LogResponse("ajaxSuccess", settings, xhr)
    }
}

let index = new Index()
index.RegisterOnReady()
