

   const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  class Employee {
   FirstName: string;
   LastName: string;
   Age: number;
   PhoneNumber: string;
   State: string;
   ZipCode: string;
   Occupation: string;
   HourlyWage: number;
   Hours: number;
   Credentials: string[];

   constructor(firstName: string, lastName: string, age: number, phoneNumber: string, state: string, zipCode: string, occupation: string, hourlyWage: number, hours: number, credentials = []) {
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

   calculateWeeklyWage(hours=this.Hours): number {
     return this.HourlyWage * hours;
   }

   addCerts(...args) {
     for (let i = 0; i < args.length; i++) {
       this.Credentials.push(args[i]);
     }
   }

   getAllInfo(): string {
    return ` \n <br> \n
    <strong>First Name:</strong> ${this.FirstName} \n <br> \n
    <strong>Last Name:</strong> ${this.LastName} \n <br> \n
    <strong>Age:</strong> ${this.Age} \n <br> \n
    <strong>Phone Number:</strong> ${this.PhoneNumber} \n <br> \n
    <strong>State:</strong> ${this.State} \n <br> \n
    <strong>Zip Code:</strong> ${this.ZipCode} \n <br> \n
    <strong>Occupation:</strong> ${this.Occupation} \n <br> \n
    <strong>Credentials:</strong> ${this.Credentials.join(", ")} \n <br> \n
    <strong>Hourly Wage:</strong> $${numberWithCommas(this.HourlyWage)} \n <br> \n
    <strong>Default Weekly Wage:</strong> $${numberWithCommas(this.calculateWeeklyWage(this.Hours))} \n <br> \n
    `
  }

  getFirstLastOccupationWage(): string {
    return ` \n <br> \n
    <strong>First Name:</strong> ${this.FirstName} \n <br> \n
    <strong>Last Name:</strong> ${this.LastName} \n <br> \n
    <strong>Occupation:</strong> ${this.Occupation} \n <br> \n
    <strong>Hourly Wage:</strong> $${numberWithCommas(this.HourlyWage)} \n <br> \n
    `
  }

  getFirstAgeState(): string {
    return ` \n <br> \n
    <strong>First Name:</strong> ${this.FirstName} \n <br> \n
    <strong>Age:</strong> ${this.Age} \n <br> \n
    <strong>State:</strong> ${this.State} \n <br> \n
    `
  }
}

interface EmployeeOptions {
  FirstName: string, 
  LastName: string,
  Age?: number;
  PhoneNumber?: string;
  State?: string;
  ZipCode?: string;
  Occupation?: string;
  HourlyWage?: number;
  Hours?: number;
  Credentials?: string[];
}

function getEmployee (employeeObject: EmployeeOptions) {
  return new Employee(employeeObject.FirstName, employeeObject.LastName, employeeObject.Age, employeeObject.PhoneNumber, employeeObject.State, employeeObject.ZipCode, employeeObject.Occupation, employeeObject.HourlyWage, employeeObject.Hours, employeeObject.Credentials);
}

let employeeA: Employee = new Employee("Bob", "Smith", 20, "860-555-5555", "CT", "06103", "Engineer", 40, 70);
employeeA.addCerts("Java Boot Camp", "BA: Latin");
let employeeB: Employee = new Employee("Jane", "Jones", 30, "860-123-4567", "CT", "06103", "Manager", 50, 60, ["BS: Economics"]);
let employeeC: Employee = new Employee("Mike", "Roberts", 40, "860-987-6543", "CT", "06103", "Director", 60, 50);
let employeeD: Employee = new Employee("Kate", "Williams", 50, "860-867-5309", "CT", "06103", "Engineer", 70, 40, ["MBA", "Six Sigma"]);

console.log(getEmployee(employeeA));
console.log(getEmployee(employeeC));
console.log(getEmployee({FirstName: employeeD.FirstName, LastName: employeeD.LastName, Age: employeeD.Age, PhoneNumber: employeeD.PhoneNumber}));
console.log(getEmployee({FirstName: "Jane", LastName: "Jones"}));

 function sayHello(person: string): string {
  return "Hello, " + person;
 }
 var user = "Super Student";
 
 document.getElementById("para").innerHTML = sayHello(user);

 document.getElementById("employeeA").innerHTML = `
 ${employeeA.getAllInfo()}
 <strong>Weekly Wage For 40 Hours:</strong>$${numberWithCommas(employeeA.calculateWeeklyWage(40))}
 \n <br> \n
 \n <br> \n
 \n <hr> \n
 ${employeeA.getFirstLastOccupationWage()}
 \n <br> \n
 \n <hr> \n
${employeeA.getFirstAgeState()}
 \n <br> \n
 `
 document.getElementById("employeeB").innerHTML = `
 ${employeeB.getAllInfo()}
 <strong>Weekly Wage For 40 Hours:</strong>$${numberWithCommas(employeeB.calculateWeeklyWage(40))}
 \n <br> \n
 \n <br> \n
 \n <hr> \n
${employeeB.getFirstLastOccupationWage()}
\n <br> \n
\n <hr> \n
${employeeB.getFirstAgeState()}
 \n <br> \n
 `
 document.getElementById("employeeC").innerHTML = `
 ${employeeC.getAllInfo()}
 <strong>Weekly Wage For 40 Hours:</strong>$${numberWithCommas(employeeC.calculateWeeklyWage(40))}
 \n <br> \n
 \n <br> \n
 \n <hr> \n
 ${employeeC.getFirstLastOccupationWage()}
 \n <br> \n
 \n <hr> \n
 ${employeeC.getFirstAgeState()}
 \n <br> \n
 `
 document.getElementById("employeeD").innerHTML = `
 ${employeeD.getAllInfo()}
 <strong>Weekly Wage For 40 Hours:</strong>$${numberWithCommas(employeeD.calculateWeeklyWage(40))}
 \n <br> \n
 \n <br> \n
 \n <hr> \n
 ${employeeD.getFirstLastOccupationWage()}
 \n <br> \n
 \n <hr> \n
 ${employeeD.getFirstAgeState()}
 \n <br> \n
 `
 