var numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, hours, credentials) {
        if (credentials === void 0) { credentials = []; }
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.PhoneNumber = phoneNumber;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
        this.HourlyWage = hourlyWage;
        this.Hours = hours;
        this.Credentials = credentials;
    }
    Employee.prototype.calculateWeeklyWage = function (hours) {
        if (hours === void 0) { hours = this.Hours; }
        return this.HourlyWage * hours;
    };
    Employee.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            this.Credentials.push(args[i]);
        }
    };
    Employee.prototype.getAllInfo = function () {
        return " \n <br> \n\n    <strong>First Name:</strong> " + this.FirstName + " \n <br> \n\n    <strong>Last Name:</strong> " + this.LastName + " \n <br> \n\n    <strong>Age:</strong> " + this.Age + " \n <br> \n\n    <strong>Phone Number:</strong> " + this.PhoneNumber + " \n <br> \n\n    <strong>State:</strong> " + this.State + " \n <br> \n\n    <strong>Zip Code:</strong> " + this.ZipCode + " \n <br> \n\n    <strong>Occupation:</strong> " + this.Occupation + " \n <br> \n\n    <strong>Credentials:</strong> " + this.Credentials.join(", ") + " \n <br> \n\n    <strong>Hourly Wage:</strong> $" + numberWithCommas(this.HourlyWage) + " \n <br> \n\n    <strong>Default Weekly Wage:</strong> $" + numberWithCommas(this.calculateWeeklyWage(this.Hours)) + " \n <br> \n\n    ";
    };
    Employee.prototype.getFirstLastOccupationWage = function () {
        return " \n <br> \n\n    <strong>First Name:</strong> " + this.FirstName + " \n <br> \n\n    <strong>Last Name:</strong> " + this.LastName + " \n <br> \n\n    <strong>Occupation:</strong> " + this.Occupation + " \n <br> \n\n    <strong>Hourly Wage:</strong> $" + numberWithCommas(this.HourlyWage) + " \n <br> \n\n    ";
    };
    Employee.prototype.getFirstAgeState = function () {
        return " \n <br> \n\n    <strong>First Name:</strong> " + this.FirstName + " \n <br> \n\n    <strong>Age:</strong> " + this.Age + " \n <br> \n\n    <strong>State:</strong> " + this.State + " \n <br> \n\n    ";
    };
    return Employee;
}());
function getEmployee(employeeObject) {
    return new Employee(employeeObject.FirstName, employeeObject.LastName, employeeObject.Age, employeeObject.PhoneNumber, employeeObject.State, employeeObject.ZipCode, employeeObject.Occupation, employeeObject.HourlyWage, employeeObject.Hours, employeeObject.Credentials);
}
var employeeA = new Employee("Bob", "Smith", 20, "860-555-5555", "CT", "06103", "Engineer", 40, 70);
employeeA.addCerts("Java Boot Camp", "BA: Latin");
var employeeB = new Employee("Jane", "Jones", 30, "860-123-4567", "CT", "06103", "Manager", 50, 60, ["BS: Economics"]);
var employeeC = new Employee("Mike", "Roberts", 40, "860-987-6543", "CT", "06103", "Director", 60, 50);
var employeeD = new Employee("Kate", "Williams", 50, "860-867-5309", "CT", "06103", "Engineer", 70, 40, ["MBA", "Six Sigma"]);
console.log(getEmployee(employeeA));
console.log(getEmployee(employeeC));
console.log(getEmployee({ FirstName: employeeD.FirstName, LastName: employeeD.LastName, Age: employeeD.Age, PhoneNumber: employeeD.PhoneNumber }));
console.log(getEmployee({ FirstName: "Jane", LastName: "Jones" }));
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
document.getElementById("employeeA").innerHTML = "\n " + employeeA.getAllInfo() + "\n <strong>Weekly Wage For 40 Hours:</strong>$" + numberWithCommas(employeeA.calculateWeeklyWage(40)) + "\n \n <br> \n\n \n <br> \n\n \n <hr> \n\n " + employeeA.getFirstLastOccupationWage() + "\n \n <br> \n\n \n <hr> \n\n" + employeeA.getFirstAgeState() + "\n \n <br> \n\n ";
document.getElementById("employeeB").innerHTML = "\n " + employeeB.getAllInfo() + "\n <strong>Weekly Wage For 40 Hours:</strong>$" + numberWithCommas(employeeB.calculateWeeklyWage(40)) + "\n \n <br> \n\n \n <br> \n\n \n <hr> \n\n" + employeeB.getFirstLastOccupationWage() + "\n\n <br> \n\n\n <hr> \n\n" + employeeB.getFirstAgeState() + "\n \n <br> \n\n ";
document.getElementById("employeeC").innerHTML = "\n " + employeeC.getAllInfo() + "\n <strong>Weekly Wage For 40 Hours:</strong>$" + numberWithCommas(employeeC.calculateWeeklyWage(40)) + "\n \n <br> \n\n \n <br> \n\n \n <hr> \n\n " + employeeC.getFirstLastOccupationWage() + "\n \n <br> \n\n \n <hr> \n\n " + employeeC.getFirstAgeState() + "\n \n <br> \n\n ";
document.getElementById("employeeD").innerHTML = "\n " + employeeD.getAllInfo() + "\n <strong>Weekly Wage For 40 Hours:</strong>$" + numberWithCommas(employeeD.calculateWeeklyWage(40)) + "\n \n <br> \n\n \n <br> \n\n \n <hr> \n\n " + employeeD.getFirstLastOccupationWage() + "\n \n <br> \n\n \n <hr> \n\n " + employeeD.getFirstAgeState() + "\n \n <br> \n\n ";
