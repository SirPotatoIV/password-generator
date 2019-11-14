// Define all possible characters that can be used in the password. Separate the characters in arrays by option types the user will get.
const specialCharacters = ["!", "#", "$", "+", "?", "@", "%",];
const numCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",];
// Define a const for each character type that will store the users criteria
// Get users password criteria and store it in the consts
    // Validate that the user has selected at least one character type.
// Create a let that will be a random index selector to select one of the character arrays.
// Create a let that will be a random selector for a character in the randomly selected array.
const characterIndex = Math.floor(Math.random()*specialCharacters.length);
console.log(specialCharacters.length, characterIndex);

// Create a let that will store the set of randomly selected characters that will amount to a password.
// Select characters from arrays and combine them into a password
    // Use a loop to continue selecting characters from different arrays at random and updating the let password.
    // The loop will end when when the length the user selected (should be stored in a const) is reached.
    const passwordLength = 8;
    let userPassword = "";
    let randomChar = specialCharacters[characterIndex];
    console.log(randomChar);
    
    function characterSelector() {
        // The purpose of this loop is to combine the user required number of characters into userPassword.
        for(i = 0; i < passwordLength; i++) {
            // The purpose of this loop is to ensure that one character from each selected character type is selected.
            for(i = i; i < 4; i++) {
                userPassword = userPassword + randomChar;
                console.log(userPassword, "Loop 1");
            }
                userPassword = userPassword + randomChar;
                console.log(userPassword, "Loop 2");
        }
    }

    characterSelector();
// Updated the html of a box (probably a jumbotron) so that the text in said box is the password
