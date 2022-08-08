// Release 0
const student = {};
student.firstName = "Petr";
student["lastName"] = "Perviy";
student.firstName = "Petya";
delete student["firstName"];
// Release 1
const group = [];
group.push(student);
group.push({firstName : "Vasya", lastName: "Pupkin"}, {firstName:"Harry", lastName:"Potter"});
