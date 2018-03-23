class Method {
    static Get(value) {
        return {
            "ajaxGet": { code: "function Execute(url) {\n\tlet query = {\n\t\tid: 13\n\t}\n\n\tlet settings = {\n\t\ttype: 'GET',\n\t\tdata: query,\n\t\tdataType: 'json',\n\t\tsuccess: onSuccess\n\t}\n\n\t$.ajax(url, settings)\n}\n\nfunction onSuccess(data, status, xhr) {\n\t$('#Result').text(JSON.stringify(data.args))\n}", url: "https://httpbin.org/get", execute: Method.ajaxGet },
            "ajaxPost": { code: "function Execute(url) {\n\tlet data = {\n\t\tname: 'Mr. Debug',\n\t\tage: 21,\n\t\thappy: true\n\t}\n\n\tlet settings = {\n\t\ttype: 'POST',\n\t\tdata: data,\n\t\tdataType: 'json',\n\t\tsuccess: onSuccess\n\t}\n\n\t$.ajax(url, settings)\n}\n\nfunction onSuccess(data, status, xhr) {\n\t$('#Result').text(JSON.stringify(data.form))\n}", url: "https://httpbin.org/post", execute: Method.ajaxPost },
            "getJSON": { code: "function Execute(url) {\n\t$.getJSON(url, onSuccess)\n}\n\nfunction onSuccess(data) {\n\t$('#Result').text(JSON.stringify(data))\n}", url: "https://httpbin.org/ip", execute: Method.getJSON },
            "load": { code: "function Execute(url) {\n\t$('#Result').load(url)\n}", url: "https://httpbin.org/html", execute: Method.load }
        }[value]
    }
    static ajaxGet(url) {
        let query = {
            id: 13
        }

        let settings = {
            type: 'GET',
            data: query,
            dataType: 'json',
            success: (data, status, xhr) => {
                $('#Result').text(JSON.stringify(data.args))
            }
        }

        $.ajax(url, settings)
    }
    static ajaxPost(url) {
        let data = {
            name: 'Mr. Debug',
            age: 21,
            happy: true
        }

        let settings = {
            type: 'POST',
            data: data,
            dataType: 'json',
            success: (data, status, xhr) => {
                $('#Result').text(JSON.stringify(data.form))
            }
        }

        $.ajax(url, settings)
    }
    static getJSON(url) {
        $.getJSON(url, (data) => {
            $('#Result').text(JSON.stringify(data))
        })
    }
    static load(url) {
        $('#Result').load(url)
    }
}
