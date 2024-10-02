let input = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

let output = input.map(student => {
    let key = Object.keys(student)[0];
    let subjects = Object.values(student[key]);
    let average = subjects.reduce((sum, score) => sum + score, 0) / subjects.length;
    return { [key]: { average: average } };
});

console.log(output);