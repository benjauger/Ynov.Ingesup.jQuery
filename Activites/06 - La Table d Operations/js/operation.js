
class Operation {
    constructor(type, value) {
        this.Type = type
        this.Value = value
    }
    static GetTypeName(value) {
        switch (value) {
            case OperationType.Add: return "Additionner"
            case OperationType.Substract: return "Soustraire"
            case OperationType.Multiply: return "Multiplier"
            case OperationType.Divide: return "Diviser"
        }
    }
}

const OperationType = Object.freeze({
    Add: "add",
    Substract: "substract",
    Multiply: "multiply",
    Divide: "divide"
})
