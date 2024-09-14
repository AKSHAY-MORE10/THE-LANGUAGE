function employee(username){
    this.username = username;
    // return this.username;
}

function employeeDetails(username ,id, age){
    // this.username = employee(username)
    // employee.call(this,username)
    employee.apply(this,[username])
    this.id = id;
    this.age = age;
}

let employee1 = new employeeDetails("akshay", 19 , 30)
console.log(employee1);



