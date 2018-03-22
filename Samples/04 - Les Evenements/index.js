
class Event {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        $("#On").on("click", $.proxy(this.onOnClick, this))
        $("#Off").on("click", $.proxy(this.onOffClick, this))
        $("#Trigger").on("click", $.proxy(this.onTriggerClick, this))
        $("#Reset").on("click", $.proxy(this.onResetClick, this))
        $("#Eraser").on("click", $.proxy(this.onEraserClick, this))

        console.log("Event.onReady")
    }
    Log(msg) {
        $("#Eraser").show()
        var log = $(".log").append("<p>" + msg + "</p>")
        log.scrollTop(log.prop("scrollHeight"))
    }
    get Selector() {
        return $("#Selector").val()
    }
    get Event() {
        return $("#Event").val()
    }
    onOnClick(e) {
        var data = { selector: this.Selector, event: this.Event }
        this.Log("<span class='" + this.Selector.substr(1) + "'>" + this.Selector + "</span>- Bind '" + this.Event + "' Event with Data '" + JSON.stringify(data) + "'")
        $(".area").find(this.Selector).addClass("clickable").on(this.Event, data, $.proxy(this.onEventTriggered, this))
    }
    onOffClick(e) {
        this.Log("<span class='" + this.Selector.substr(1) + "'>" + this.Selector + "</span>- Unbind '" + this.Event + "' Event")
        $(".area").find(this.Selector).removeClass("clickable").off(this.Event)
    }
    onTriggerClick(e) {
        this.Log("<span class='" + this.Selector.substr(1) + "'>" + this.Selector + "</span>- Trigger '" + this.Event + "' Event")
        $(".area").find(this.Selector).trigger(this.Event)
    }
    onResetClick(e) {
        $("#Selector").children("option").each($.proxy(function (i, elem) {
            var selector = $(elem).val()
            this.Log("<span class='" + selector.substr(1) + "'>" + selector + "</span>- Unbind All Events")
            $(selector).removeClass("clickable").off()
        }, this))
    }
    onEraserClick(e) {
        $(".log").children("p").remove()
        $("#Eraser").hide()
    }
    onEventTriggered(e) {
        var event = "<span>" + e.type + "</span>"

        var c = $(e.currentTarget).attr("class").replace("clickable", "").trim()
        var currentTarget = "<span class='" + c + "'>." + c + "</span>"

        var t = $(e.target).attr("class").replace("clickable", "").trim()
        var target = "<span class='" + t + "'>." + t + "</span>"

        var data = "<span>" + JSON.stringify(e.data) + "</span>"

        this.Log(event + "- e.currentTarget = " + currentTarget + ", e.target = " + target + ", e.data = " + data)
    }
}

let event = new Event()
event.RegisterOnReady()
