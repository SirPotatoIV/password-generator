// Define all possible characters that can be used in the password. Separate the characters in arrays by option types the user will get.
// APPEARS THAT THIS STRATEGY WON'T WORK const characterArrays = ["specialCharacters", "numCharacters",];
// Used to store the names of the character types the user has selected. This will be used to figure out what characters characterSelector should use.
const selectedCharTypes = ["specialCharacters", "numCharacters",];
const specialCharacters = ["!", "#", "$", "+", "?", "@", "%",];
const numCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",];
// Define a const for each character type that will store the users criteria
// Get users password criteria and store it in the consts
    // Validate that the user has selected at least one character type.
// Create a let that will be a random index selector to select one of the character arrays.
// Create a let that will be a random selector for a character in the randomly selected array.
// APPEARS THAT THIS STRATEGY WON'T WORK const arraySelector = characterArrays[0];
// console.log(arraySelector);

// Create a let that will store the set of randomly selected characters that will amount to a password.
    const specialCharactersLength = specialCharacters.length;
    const specialIndex = Math.floor(Math.random()*specialCharactersLength);
    console.log(specialCharactersLength, specialIndex);

    const numCharactersLength = numCharacters.length;
    const numIndex = Math.floor(Math.random()*numCharactersLength);
    console.log(numCharactersLength, numIndex);
// Select characters from arrays and combine them into a password
    // Use a loop to continue selecting characters from different arrays at random and updating the let password.
    // The loop will end when when the length the user selected (should be stored in a const) is reached.
    const passwordLength = 8;
    let userPassword = "";
    let randomChar = specialCharacters[specialIndex];
    console.log("Random special Character: ", randomChar);
    let randomNum = numCharacters[numIndex];
    console.log("Random number Character:", randomNum);
    // Used to see if specialCharacters is a character type picked by the user. Used in the function characterSelector.
    let sc = selectedCharTypes.indexOf("specialCharacters");
    console.log("Does user want a special character?: ", sc);
    let num = selectedCharTypes.indexOf("numCharacters");
    console.log("Does user want a number character?: ", num)
    
    function characterSelector() {
        // The purpose of this loop is to combine the user required number of characters into userPassword.
        for(i = 0; i < passwordLength; i++) {
            // The purpose of this loop is to ensure that one character from each selected character type is selected.
            for(i = i; i < 4;) {
                if(sc > -1) {
                    userPassword = userPassword + randomChar;
                    console.log(userPassword, "Loop 1");
                    i++;
                };
                if(num > -1) {
                    userPassword = userPassword + randomNum;
                    console.log(userPassword, "Loop 1");
                    i++;
                };
            }
                userPassword = userPassword + randomChar;
                console.log(userPassword, "Loop 2");
        }
    }

    characterSelector();
// Updated the html of a box (probably a jumbotron) so that the text in said box is the password
