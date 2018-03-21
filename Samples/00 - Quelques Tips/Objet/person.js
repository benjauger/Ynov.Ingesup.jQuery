
PersonOld = function (name, age) {
    this.Name = name;
    this.Age = age;
};

PersonOld.prototype.IsAdult = function () {
    return this.Age > 17;
};

class Person {
    constructor(name, age) {
        this.Name = name;
        this.Age = age;
    }
    get IsAdult() {
        return this.Age > 17;
    }
}
