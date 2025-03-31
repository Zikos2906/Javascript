// const Student = {

//     Name:"Bihan Banerjee",
//     school:"Gaudium School",
//     Grade: 8,
//     city:"Hyderbad",
// };

// const Student2 = {
//     Name:"Suhaas Samved",
//     Grade:8,
//     school:"DPS",
//     city:"Mumbai"
// };


// console.log(Student.Name);

const person = {
    Name:"Suhaas",
    age:13,
    Language:["Telegu","English","Hindi"],
    Education:{
        School:"ABC school",
        college:"XYZ university",
        
    }

}



const SendData = JSON.stringify(person)
console.log(SendData);

const RecieveData = JSON.parse(SendData)
console.log(RecieveData);

console.log(RecieveData.Name);
console.log(RecieveData.age);
console.log(RecieveData.Language[1]);
console.log(RecieveData.Education.college);
