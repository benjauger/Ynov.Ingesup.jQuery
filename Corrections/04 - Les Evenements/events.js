
class Events {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        // 3.a
        $("#Sports > tbody > tr").on("mouseenter mouseleave", $.proxy(this.onRowHover, this))

        // 3.b
        $("#Date").on("change", $.proxy(this.onDateChange, this))

        // 3.c
        $("#Sport").on("change", $.proxy(this.onSportChange, this))

        // 3.d
        $("#Match").on("keyup", $.proxy(this.onMatchKeyup, this))

        // 3.e
        $("#Sports > tbody > tr").on("click", $.proxy(this.onRowClick, this))

        console.log("Events.onReady")
    }
    // 3.a
    onRowHover(e) {
        $(e.currentTarget).toggleClass("highlight")
    }
    // 3.a
    // 3.b
    performSearch() {
        let rows = $("#Sports > tbody > tr").show()

        let date = $("#Date").val()
        if (date !== "") {
            rows.filter((i, e) => { return $(e).data("date") !== date }).hide()
        }

        // 3.c
        let sport = $("#Sport").val()
        if (sport !== "") {
            rows.filter((i, e) => { return $(e).data("sport") !== sport }).hide()
        }
        // 3.c

        // 3.d
        let match = $("#Match").val()
        if (match !== "") {
            let reg = new RegExp(match, "i");
            rows.filter((i, e) => { return reg.test($(e).children(".match").text()) === false }).hide()
        }
        // 3.d
    }
    onDateChange(e) {
        this.performSearch()
    }
    // 3.b
    // 3.c
    onSportChange(e) {
        this.performSearch()
    }
    // 3.c
    // 3.d
    onMatchKeyup(e) {
        this.performSearch()
    }
    // 3.d
    // 3.e
    onRowClick(e) {
        $(".information .date").text($(e.currentTarget).children(".date").text())
        $(".information .sport").text($(e.currentTarget).children(".sport").text())
        $(".information .division").text($(e.currentTarget).children(".division").text())
        $(".information .match").text($(e.currentTarget).children(".match").text())
    }
    // 3.e
}

let events = new Events()
events.RegisterOnReady()
