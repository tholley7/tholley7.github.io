const peopleArray = [
    "Caroline Miller",
    "Geoffery Blake",
    "Maddison Blake",
    "Karla Vasquez-Aguilar",
    "David Wallace",
    "Jeffrey Holley",
    "Josh Brinkman",
    "Grace Coyne"
]
const salaryArray = [75000, 500000, 62000, 100000, 90000, 80000, 124000, 280000]

let $ = function(id) {
    return document.getElementById(id);
}

function addSalary() {
    let employeeToAdd = $("employee-name").value;
    let salaryToAdd = $("salary").value;

    salaryToAdd = parseFloat(salaryToAdd);
    if (peopleArray.includes(employeeToAdd)) {
        let i = peopleArray.indexOf(employeeToAdd);
        salaryArray[i] = salaryToAdd;
    }

    peopleArray.push(employeeToAdd);
    salaryArray.push(salaryToAdd);

    $("salary").innerHTML = "";
    $("employee-name").focus();
}

function displayResults() {
    let highestSalary = 0;
    var highestEarner;
    let sum = 0;

    /* Find average */
    for(let i = 0; i < salaryArray.length; i++) {
        let temp = parseInt(salaryArray[i]).toFixed(2);
        sum += temp;
    }

    let average =  (sum / salaryArray.length).toFixed(2);

    /* Find highest */
    for(let i = 0; i < salaryArray.length; i++) {
        if(salaryArray[i] > highestSalary) {
            highestSalary = salaryArray[i];
            highestEarner = peopleArray[i];
        }
    }


    $('result').innerHTML = "<h2>Result</h2>" + "<p>Average salary: " + average + "</p>" + "<p>Highest earning person: " + highestEarner + "</p>"
}

function displaySalary() {
    let table = "";

    table += "<thead> <tr> <th>Employee Name</th> <th>Employee Salary</th> </tr> </thead> <tbody>";

    for (let i = 0; i < salaryArray.length; i++) {
        table + "<tr><td>" + peopleArray[i] + "</tr><td>" + salaryArray[i] + " </td></tr>";
    }
    table += "</tbody></table>"
}