
class Ajax {
    constructor() {
    }
    RegisterOnReady() {
        $($.proxy(this.onReady, this))
    }
    onReady() {
        // 3.a
        this.loadImage()

        // 3.b
        $("#Id").on("change", $.proxy(this.loadImage, this))

        console.log("Ajax.onReady")
    }
    static get Url() {
        return "https://jsonplaceholder.typicode.com/photos"
    }
    // 3.a
    loadImage() {
        // 3.c
        $("#Id").prop("disabled", true)

        let url = Ajax.Url + "/" + $("#Id").val()

        let onSuccess = $.proxy(function (data, status, xhr) {
            this.setImage(data)
        }, this)

        // 3.c
        let onComplete = $.proxy(function (xhr, status) {
            $("#Id").prop("disabled", false)
        }, this)
        // 3.c

        // 3.d
        let onError = $.proxy(function (xhr, status, error) {
            console.log(xhr.status + " - " + xhr.statusText)
        }, this)
        // 3.d

        let settings = {
            type: 'GET',
            dataType: 'json',
            success: onSuccess,
            complete: onComplete, // 3.c
            error: onError // 3.d
        }

        $.ajax(url, settings)
    }
    setImage(data) {
        $(".title").text(data.title)
        $(".url").text(data.url)
        $("#Image").prop("src", data.url).prop("title", data.title)
    }
    // 3.a
}

let ajax = new Ajax()
ajax.RegisterOnReady()
