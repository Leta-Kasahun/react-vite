//it starts with campital letters to identifies from regulers function
function Users(fristName,lastName,age,email,password){
    //we use this function
    this.fristName=fristName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;
    this.password=password;
}

//then creating different objects  by passing values
//it is possible to adds multple  properties and methode by using prottype
Users.prototype.skill=['python','javascript','tailwindcss'];
Users.prototype.getPossations=function(){
    return `${this.fristName} has three cars and two home`;
}
const user1=new Users("Abel","Tewodros",23,"abelgmail.com","abel123");

// console.log(`Name: ${ user1.fristName} ${user1.lastName} \n age ${user1.age} \n Email: ${user1.email}\n Password: ${user1.password}`);
console.log(user1.skill,user1.getPossations());