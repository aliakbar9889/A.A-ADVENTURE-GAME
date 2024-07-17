#! /user/bin/env node
import inquirer from "inquirer";
// making player class
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuel_increase() {
        this.fuel = 100;
    }
}
//making opponent class
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuel_decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log("\n WELCOME TO A.A ADVENTURE GAME\n");
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "ENTER YOUR NAME"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "SELECT YOUR OPPONENT",
        choices: [
            {
                name: "Skeleton",
                value: "Skeleton"
            },
            {
                name: "Zombie",
                value: "Zombie"
            },
            {
                name: "Alien",
                value: "Alien"
            }
        ]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "WHAT WOULD YOU LIKE TO DO?",
                choices: [
                    {
                        name: "Attack",
                        value: "Attack"
                    },
                    {
                        name: "Drink Portion",
                        value: "Drink Portion"
                    },
                    {
                        name: "Run for Your Life....",
                        value: "Run for Your Life...."
                    }
                ]
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
            }
            if (p1.fuel <= 0) {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, You Win This Game!!!");
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuel_increase;
            console.log(`Your Drink Portion Health Your Fuel is ${p1.fuel}`);
        }
        if (ask.option === "Run for Your Life....") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    // Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "WHAT WOULD YOU LIKE TO DO?",
                choices: [
                    {
                        name: "Attack",
                        value: "Attack"
                    },
                    {
                        name: "Drink Portion",
                        value: "Drink Portion"
                    },
                    {
                        name: "Run for Your Life....",
                        value: "Run for Your Life...."
                    }
                ]
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
            }
            if (p1.fuel <= 0) {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, You Win This Game!!!");
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuel_increase;
            console.log(`Your Drink Portion Health Your Fuel is ${p1.fuel}`);
        }
        if (ask.option === "Run for Your Life....") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
    // Alien
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "WHAT WOULD YOU LIKE TO DO?",
                choices: [
                    {
                        name: "Attack",
                        value: "Attack"
                    },
                    {
                        name: "Drink Portion",
                        value: "Drink Portion"
                    },
                    {
                        name: "Run for Your Life....",
                        value: "Run for Your Life...."
                    }
                ]
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
            }
            if (p1.fuel <= 0) {
                console.log("You Loose, Better Luck Next Time");
                process.exit();
            }
            if (num <= 0) {
                o1.fuel_decrease();
                console.log(`${p1.name} fuel is ${p1.fuel} `);
                console.log(`${o1.name} fuel is ${o1.fuel} `);
                if (o1.fuel <= 0) {
                    console.log("Congratulations, You Win This Game!!!");
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuel_increase;
            console.log(`Your Drink Portion Health Your Fuel is ${p1.fuel}`);
        }
        if (ask.option === "Run for Your Life....") {
            console.log("You Loose, Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
