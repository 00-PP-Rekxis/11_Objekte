
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich", "bin", "Max"];
// output(arr);
// output(arr[0]);
// output("------------");


// // nested arrays - Prinzip: [[[]]]
// // nested arrays  - hier: [[],[]]
// arr = [
//     ["Ich", "bin", "Max"],
//     ["Ich", "bin", "Moritz"]
// ];


// output(arr);
// output(arr[0]);
// output(arr[0][0] + " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/

// let person = {
//     firstName: 'Bashkim',
//     familyName: 'Dauti',
//     salary: [120000, 160000],
//     permission: true,
//     sayHello: function () {
//         return 'Hallo, ' + this.firstName + "!";
//     }
// };


// output(person);
// output(person['firstName']);
// output(person.firstName);
// output(person.familyName);
// output(person.salary[1]);
// output(person.permission);

// const text = "Ich bin " + person.firstName +
//     " und verdiene " + person.salary[1] +
//     " p.a.";

// output(text);

// output(person.sayHello());

/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

let baikal = {
    value: '10m',
    deep: {
        deeper: {
            deepest: 'Das Licht - auf 1642m!',
            temperatur: '4 Grad Celsius',
        },
    },
}

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.temperatur);

/** Ausgabe */
function output(outputData) {
    console.log(outputData);
}