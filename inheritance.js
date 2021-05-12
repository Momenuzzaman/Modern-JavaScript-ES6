class Parent {
    constructor(){
        this.fatherName = "Liton";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
 const baby = new Child("Ayaan");
 const baby2 = new Child("Ruhi");
 console.log(baby,baby2);