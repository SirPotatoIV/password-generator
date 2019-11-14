// Define all possible characters that can be used in the password. Separate the characters in arrays by option types the user will get.
// APPEARS THAT THIS STRATEGY WON'T WORK const characterArrays = ["specialCharacters", "numCharacters",];
// Used to store the names of the character types the user has selected. This will be used to figure out what characters characterSelector should use.
const selectedCharTypes = ["specialCharacters", "numCharacters", "lowerCharacters",];
const specialCharacters = ["!", "#", "$", "+", "?", "@", "%",];
const numCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",];
const lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Define a const for each character type that will store the users criteria
// Get users password criteria and store it in the consts
    // Validate that the user has selected at least one character type.
// Create a let that will be a random index selector to select one of the character arrays.
// Create a let that will be a random selector for a character in the randomly selected array.
// APPEARS THAT THIS STRATEGY WON'T WORK const arraySelector = characterArrays[0];
// console.log(arraySelector);

// Create a let that will store the set of randomly selected characters that will amount to a password.
    // Finds the length of the array specialCharacters
    const specialCharactersLength = specialCharacters.length;
    // Creates a random index location for specialCharacters
    const specialIndex = Math.floor(Math.random()*specialCharactersLength);
    // console.log(specialCharactersLength, specialIndex);

    // Finds the length of the array numCharacters
    const numCharactersLength = numCharacters.length;
    // Creates a random index location for numCharacters
    const numIndex = Math.floor(Math.random()*numCharactersLength);
    // console.log(numCharactersLength, numIndex);

    // Finds the length of the array lowerCharacters
    const lowerCharactersLength = lowerCharacters.length;
    // Creates a random index location for lowerCharacters
    const lowerIndex = Math.floor(Math.random()*lowerCharactersLength);
    // console.log(lowerCharactersLength, lowerIndex);

    // Finds the length of the array upperCharacters
    const upperCharactersLength = upperCharacters.length;
    // Creates a random index location for upperCharacters
    const upperIndex = Math.floor(Math.random()*upperCharactersLength);
    // console.log(upperCharactersLength, upperIndex);


// Select characters from arrays and combine them into a password
    // Use a loop to continue selecting characters from different arrays at random and updating the let password.
    // The loop will end when when the length the user selected (should be stored in a const) is reached.
    let passwordLength = 10;
    const loopLength = passwordLength - selectedCharTypes.length;
    console.log("Calculated Number of Loops", loopLength);
    let userPassword = "";
    let randomChar = specialCharacters[specialIndex];
    console.log("Random special Character: ", randomChar);
    let randomNum = numCharacters[numIndex];
    console.log("Random number Character:", randomNum);
    let randomLower = lowerCharacters[lowerIndex];
    console.log("Random number Character:", randomLower);
    let randomUpper = upperCharacters[upperIndex];
    console.log("Random number Character:", randomUpper);
    // Used to see if specialCharacters is a character type picked by the user. Used in the function characterSelector.
    let sc = selectedCharTypes.indexOf("specialCharacters");
    console.log("Does user want a special character?: ", sc);
    let num = selectedCharTypes.indexOf("numCharacters");
    console.log("Does user want a number character?: ", num)
    let low = selectedCharTypes.indexOf("lowerCharacters");
    console.log("Does user want a lower character?: ", low)
    let up = selectedCharTypes.indexOf("upperCharacters")
    console.log("Does user want an upper character?: ", up);
    
    function characterSelector() {
        // The purpose of these ifs is to ensure that one character from each selected character type is selected.
        if(sc > -1) {
            userPassword = userPassword + randomChar;
            console.log(userPassword, "if");
            // i++;
        };
        if(num > -1) {
            userPassword = userPassword + randomNum;
            console.log(userPassword, "if");
            // i++;
        };
        if(num > -1) {
            userPassword = userPassword + randomLower;
            console.log(userPassword, "if");
            // i++;
        };
        // The purpose of this loop is to combine the user required number of characters into userPassword.
        for(i = 0; i < loopLength;) {
            // Finds the length of the array specialCharacters
            const specialCharactersLength = specialCharacters.length;
            // Creates a random index location for specialCharacters
            const specialIndex = Math.floor(Math.random()*specialCharactersLength);
            // console.log(specialCharactersLength, specialIndex);

            // Finds the length of the array numCharacters
            const numCharactersLength = numCharacters.length;
            // Creates a random index location for numCharacters
            const numIndex = Math.floor(Math.random()*numCharactersLength);
            // console.log(numCharactersLength, numIndex);

            // Finds the length of the array lowerCharacters
            const lowerCharactersLength = lowerCharacters.length;
            // Creates a random index location for lowerCharacters
            const lowerIndex = Math.floor(Math.random()*lowerCharactersLength);
            // console.log(lowerCharactersLength, lowerIndex);

            let randomChar = specialCharacters[specialIndex];
            console.log("Random special Character: ", randomChar);
            let randomNum = numCharacters[numIndex];
            console.log("Random number Character:", randomNum);
            let randomLower = lowerCharacters[lowerIndex];
            console.log("Random number Character:", randomLower);

            if(sc > -1 && i < loopLength) {
                userPassword = userPassword + randomChar;
                console.log(userPassword, "Loop 2", i);
                i++;
            };
            if(num > -1 && i < loopLength) {
                userPassword = userPassword + randomNum;
                console.log(userPassword, "Loop 2", i);
                i++;
            };
            if(num > -1 && i < loopLength) {
                userPassword = userPassword + randomLower;
                console.log(userPassword, "Loop 2", i);
                i++;
            };
        }
        console.log("Total loops: ",i ,"and Password Length: ", userPassword.length);
    }


    characterSelector();
// Updated the html of a box (probably a jumbotron) so that the text in said box is the password
