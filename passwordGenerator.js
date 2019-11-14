// Define all possible characters that can be used in the password. Separate the characters in arrays by option types the user will get.
const specialCharacters = ["!", "#", "$", "+", "?", "@", "%",];
const numCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",];
const lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Define a const for each requirement the user can select.
    // Used to store the names of the character types the user has selected. This will be used to figure out what characters characterSelector should use.
    const selectedCharTypes = ["specialCharacters", "numCharacters", "lowerCharacters", "upperCharacters"];
    let passwordLength = 10;
    const loopLength = passwordLength - selectedCharTypes.length;
    console.log("Calculated Number of Loops", loopLength);

// Get users password criteria and store it in the consts
    // Validate that the user has selected at least one character type.
    
    // STILL NEEDS TO BE CODED!!!!!


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
    
// Select characters from arrays and combine them into a password
    // Use a loop to continue selecting characters from different arrays at random and updating the let password.
    // The loop will end when when the length the user selected (should be stored in a const) is reached.
    let userPassword = "";
    
    function characterSelector() {
        // The purpose of these ifs is to ensure that one character from each selected character type is selected.
        if(sc > -1) {
            userPassword = userPassword + randomChar;
            console.log(userPassword, "if");
        };
        if(num > -1) {
            userPassword = userPassword + randomNum;
            console.log(userPassword, "if");
        };
        if(low > -1) {
            userPassword = userPassword + randomLower;
            console.log(userPassword, "if");
        };
        if(up > -1) {
            userPassword = userPassword + randomUpper;
            console.log(userPassword, "if");
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

            // Finds the length of the array upperCharacters
            const upperCharactersLength = upperCharacters.length;
            // Creates a random index location for upperCharacters
            const upperIndex = Math.floor(Math.random()*upperCharactersLength);
            // console.log(upperCharactersLength, upperIndex);

            let randomChar = specialCharacters[specialIndex];
            console.log("Random special Character: ", randomChar);
            let randomNum = numCharacters[numIndex];
            console.log("Random number Character:", randomNum);
            let randomLower = lowerCharacters[lowerIndex];
            console.log("Random number Character:", randomLower);
            let randomUpper = upperCharacters[upperIndex];
            console.log("Random number Character:", randomUpper);
            
            if(sc > -1 && i < loopLength) {
                userPassword = userPassword + randomChar;
                console.log(userPassword, "Loop", i);
                i++;
            };
            if(num > -1 && i < loopLength) {
                userPassword = userPassword + randomNum;
                console.log(userPassword, "Loop", i);
                i++;
            };
            if(low > -1 && i < loopLength) {
                userPassword = userPassword + randomLower;
                console.log(userPassword, "Loop", i);
                i++;
            };
            if(up > -1 && i < loopLength) {
                userPassword = userPassword + randomUpper;
                console.log(userPassword, "Loop", i);
                i++;
            };

        }
        console.log("Total loops: ",i ,"and Password Length: ", userPassword.length);
    }


    characterSelector();
// Updated the html of a box (probably a jumbotron) so that the text in said box is the password
