#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let mypin = 503503;

let pinAnswer = await inquirer.prompt(
[
{
name: "pin",
message: "enter your pin",
type: "number"
}
]
);

// yahan hum se pin number poucha ja raha hai. agar correct hai toh 'if' ki condition run hojay gi
// agar wrong pin number hai toh 'else' ki condition run hojay gi

if (pinAnswer.pin === mypin) {
  // if true condition
console.log("correct pin code!!!");

 let operationAns = await inquirer.prompt(
[
{
name:"operation",
message:"please select option",
type:"list",
choices:["withdraw", "fast cash", "check balance"]
}
]
);
//1) if user select withdraw.
//2) enter your amount.(1000)       Rs,10000-1000 =9000
//3) the remaning balance is (9000)
//4) agar user mojuda balance se ziyada amount withdraw krwana chahta hai toh usy show ho 'insufficient balance
//5)
if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
[
{
name: "amount",
message:"enter your amount",
type:"number",
}
]
    );
if (amountAns.amount <= myBalance) {
  let balance = myBalance -amountAns.amount;
  console.log (`the remaning balance is ${balance}`);
//console.log("your remaning balance is:" + myBalance);
} else {
  console.log("you have insufficient balance");
}
}
//if user select fast cash.
else if (operationAns.operation ==="fast cash") {
  let fastcashAns = await inquirer .prompt([
{
name: "amount",
type: "list",
choices: ["1000","3000", "5000", "15000"],
}
  ]);
if (fastcashAns.amount <= myBalance) {
  let balance2 = myBalance - fastcashAns.amount;
console.log(`your remaning balance is ${balance2}`);
}else{
  console.log("you have insufficient amout");
}
}else if (operationAns.operation=== "check balance") {
  console.log(myBalance);
} else if (operationAns.operation === "check balance") {
console.log(myBalance);
}

}else {
  console.log("incorrect pin number please try again!"); //false condition

};
  







   
