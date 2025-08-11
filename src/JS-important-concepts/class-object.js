class Dog{
    constructor(name,age){
        this.name=name;
        this.age=age;
       
    }
    isAlive(){
        return ` ${this.name} dog  is alive. it is barcking  before a moment`;
    }
}
const Dog1=new Dog('Buchi',4);
console.log(Dog1.isAlive());
//inheriting the Dog for puppy
class Puppy extends Dog{
    constructor(name,age,color){
        super(name,age);
        this.color=color;
    }
    isEating(){
        return `${this.color} color puppy is not eating anything`;
    }
}

const puppy1=new Puppy('Puppy',1,'red');
console.log(puppy1.isEating());