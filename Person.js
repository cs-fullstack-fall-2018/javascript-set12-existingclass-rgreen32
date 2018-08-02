class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var Will = new Person("will", 25, 130, 60)
    var Bell = new Person("bell", 14, 100, 48)

    console.log(Will.bodyMassIndex());
    console.log(Bell.bodyMassIndex());

    var arr = [Will,Bell]

    Will.printPerson()



}

main();