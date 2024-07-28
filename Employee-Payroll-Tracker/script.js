// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); // Select the button element

const employees = []; // Initialize an empty array to hold employee objects

// Collect employee data
const collectEmployees = function() {
    let addMore = true; // Initialize a flag to control the loop

    while (addMore) { // Loop to collect employee data
        const firstName = prompt('Enter First Name:'); // Prompt the user to enter the first name
        if (!firstName) { // If the first name is empty
            alert('First Name is required.'); // Alert the user that first name is required
            continue; // Continue to the next iteration of the loop
        }

        const lastName = prompt('Enter Last Name:'); // Prompt the user to enter the last name
        if (!lastName) { // If the last name is empty
            alert('Last Name is required.'); // Alert the user that last name is required
            continue; // Continue to the next iteration of the loop
        }

        const salaryInput = prompt('Enter Salary:'); // Prompt the user to enter the salary
        if (!salaryInput) { // If the salary input is empty
            alert('Salary is required.'); // Alert the user that salary is required
            continue; // Continue to the next iteration of the loop
        }

        const salary = parseFloat(salaryInput); // Parse the salary input as a float
        if (isNaN(salary)) { // If the salary input is not a number
            alert('Invalid salary. Please enter a valid number.'); // Alert the user that the salary is invalid
            continue; // Continue to the next iteration of the loop
        }

        const employee = { firstName, lastName, salary }; // Create an employee object with the input data
        employees.push(employee); // Add the employee object to the employees array

        addMore = confirm('Do you want to add another employee?'); // Ask the user if they want to add another employee
    }

    displayEmployees(employees); // Display the employee data in a table
    logAggregatedData(); // Log aggregated data (placeholder function)
    return employees; // Return the employees array
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    const totalSalaries = employeesArray.reduce((acc, employee) => acc + employee.salary, 0); // Calculate the total salaries
    const averageSalary = (totalSalaries / employeesArray.length).toFixed(2); // Calculate the average salary and format it to 2 decimal places
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`); // Log the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length); // Generate a random index
    const randomEmployee = employeesArray[randomIndex]; // Select a random employee
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`); // Log the random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    const employeeTable = document.querySelector('#employee-table'); // Get the employee table element

    employeeTable.innerHTML = ''; // Clear the employee table

    for (let i = 0; i < employeesArray.length; i++) { // Loop through the employee data
        const currentEmployee = employeesArray[i]; // Get the current employee

        const newTableRow = document.createElement("tr"); // Create a new table row element

        const firstNameCell = document.createElement("td"); // Create a new table cell for the first name
        firstNameCell.textContent = currentEmployee.firstName; // Set the text content to the employee's first name
        newTableRow.append(firstNameCell); // Append the first name cell to the table row

        const lastNameCell = document.createElement("td"); // Create a new table cell for the last name
        lastNameCell.textContent = currentEmployee.lastName; // Set the text content to the employee's last name
        newTableRow.append(lastNameCell); // Append the last name cell to the table row

        const salaryCell = document.createElement("td"); // Create a new table cell for the salary
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", { // Format the salary as currency
            style: "currency",
            currency: "USD"
        });
        newTableRow.append(salaryCell); // Append the salary cell to the table row

        employeeTable.append(newTableRow); // Append the table row to the employee table
    }
}

const trackEmployeeData = function() {
    const employees = collectEmployees(); // Collect employee data

    console.table(employees); // Log the employee data in a table format

    displayAverageSalary(employees); // Display the average salary

    console.log('=============================='); // Log a separator line

    getRandomEmployee(employees); // Select and display a random employee

    employees.sort(function(a, b) { // Sort the employees by last name
        if (a.lastName < b.lastName) { // Compare last names
            return -1; // Return -1 if a's last name is less than b's
        } else { // Otherwise
            return 1; // Return 1
        }
    });

    displayEmployees(employees); // Display the sorted employee data in a table
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData); // Add a click event listener to the button

// The function logAggregatedData needs to be defined to avoid errors
const logAggregatedData = function() {
    // Placeholder function to avoid errors
}
