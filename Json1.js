const student = {
     Name:"Bihan Banerjee",
     Grade:8,
     School:"Gaudium",
     Language:["English","Telegu","Urdu"],
    Education:{
        school:"ABC SCHOOL",
        College:"XYZ UNIVERSITY",


    },};

    const SendData = JSON.stringify(student)
    console.log(SendData);
    const RecieveData = JSON.parse(SendData)
    console.log(RecieveData);


    console.log(RecieveData.Name)
    console.log(RecieveData.Grade)
    console.log(RecieveData.School)
    console.log(RecieveData.Language[1])
    console.log(RecieveData.Education.College)
 







