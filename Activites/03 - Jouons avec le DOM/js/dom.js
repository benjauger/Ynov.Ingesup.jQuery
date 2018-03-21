
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
    }
    onBtnValidateClick() {
    }
    onBtnAddClick() {
    }
    onChkAllChange() {
    }
    onBtnRemoveClick() {
    }
}

let dom = new Dom()
dom.RegisterOnReady()
