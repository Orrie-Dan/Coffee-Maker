const input = require('readline-sync');

function canMakeCoffee() {
    // Get the available resources from the user
    var water = parseInt(input.question("Enter the amount of water available (in ml):"));
    if (isNaN(water)) {
        console.log("Invalid input for water. Please enter a valid number.");
        return;
    }

    var milk = parseInt(input.question("Enter the amount of milk available (in ml):"));
    if (isNaN(milk)) {
        console.log("Invalid input for milk. Please enter a valid number.");
        return;
    }

    var coffeeBeans = parseInt(input.question("Enter the amount of coffee Bean available (in g):"));
    if (isNaN(coffeeBeans)) {
        console.log("Invalid input for coffee beans. Please enter a valid number.");
        return;
    }

    // Define the resources needed for one cup of coffee
    const waterNeededPerCup = 200;  // ml of water for one cup
    const milkNeededPerCup = 50;    // ml of milk for one cup
    const coffeeBeansNeededPerCup = 15;  // grams of coffee beans for one cup

    // Get the number of cups the user needs
    var userInput = parseInt(input.question("How many cups of coffee do you need?"));
    if (isNaN(userInput)) {
        console.log("Invalid input for number of cups. Please enter a valid number.");
        return;
    }

    // Calculate the total resources required for the desired number of cups
    const totalWaterNeeded = userInput * waterNeededPerCup;
    const totalMilkNeeded = userInput * milkNeededPerCup;
    const totalCoffeeBeansNeeded = userInput * coffeeBeansNeededPerCup;

    // Check if there are enough resources to make the desired number of cups
    if (water >= totalWaterNeeded && milk >= totalMilkNeeded && coffeeBeans >= totalCoffeeBeansNeeded) {
        // Calculate the additional cups that can be made
        const extraCupsWater = Math.floor(water / waterNeededPerCup);
        const extraCupsMilk = Math.floor(milk / milkNeededPerCup);
        const extraCupsCoffeeBeans = Math.floor(coffeeBeans / coffeeBeansNeededPerCup);

        // Find the limiting resource
        const maxPossibleCups = Math.min(extraCupsWater, extraCupsMilk, extraCupsCoffeeBeans);

        if (maxPossibleCups > userInput) {
            const extraCups = maxPossibleCups - userInput;
            console.log(`Yes, I can make that amount of coffee (and even ${extraCups} more)`);
        } else {
            console.log("Yes, I can make that amount of coffee");
        }
    } else {
        // Calculate the maximum number of cups that can be made with the available resources
        const maxPossibleCups = Math.min(Math.floor(water / waterNeededPerCup), Math.floor(milk / milkNeededPerCup), Math.floor(coffeeBeans / coffeeBeansNeededPerCup));
        console.log(`No, I can make only ${maxPossibleCups} cups of coffee`);
    }
}

// Run the program
canMakeCoffee();
