function playCraps() {
    //this is a one line comment
    /*this is the function to play craps in game.html
    Rules for craps
    Roll two Dice
    add up to 7 or 11, you lose!
    if they are doubbles and even, you win!
    Eveything else is a push
    Jacobey West
    6/6/2024

    Adding checkCreds() function for input validation on string.html page
       2. Make variable containing first name + space + last name
    3. Check for how many characters, >= 20 present error
        1. less than 20, good entry
    4. Check to see if zip code is accurate
    5. Good Name & Zip. give secret message add creative like font image etc omment on every line of code
Jacobey West
    6/20/2024
    */
    console.log("playCraps() started");
    //roll the dice
    //dice 1
    var die1 = Math.floor(Math.random() * 6) + 1; //This declares a variable, makes the variable with a random number and .floor rounded the result down, +1 after the *6(which indicates that it is a 6 sided dice) add 1 to the result, ensuring it's a 0% chance to roll a 0 and break the game.
    console.log(die1); //Logs the result of dice 1
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1; //Puts the result of dice 1 onto the page in the die1res tag on Game.html
    //dice 2
    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;
    //This adds the dice together
    var sum = die1 + die2; //This says add dice 1 and dice 2
    console.log(sum); //This logs the total ammount inside of the console
    document.getElementById("sumRes").innerHTML = "sum result = " + sum; //Puts the total on the page
    //look for a loss (two pipes || means or)
    if (sum == 7 || sum == 11) {  //This says if the sum equals 7 or 11 then you(Ref to next line)
        console.log("loss"); //Lose
        //Puts it into the page, saying your victory state
        document.getElementById("gameRes").innerHTML = "You lost to the blade runner!";
    } else if (die1 == die2 && die1 % 2 == 0) { //looks for a win ensuring that dice one and 2 are equal, and an even number. Equal expressed bt "==" and even expressed by "% 2" (Fully% 2 ==0 "this just says the remainder is 0")
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You got angry and flipped the board, declaring victory. But the Runner thinks you cheated.";
    } else {     //everything else is a push meaning that anything that is not a modulus of 2(meaning how many times 2 can go in) and is not equal to 7 or 11 is a tie
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "He jiggled the board as you rolled, the Runner says the game is a tie";
    }
}

function checkCreds() {
    //input validation code from week 5
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of login";

    //makes required variables
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //extract required variables(Variables required for the program to live, then throw an error at me till I give it revision therapy)
    firstName = document.getElementById("fName").value;
    console.log("the first name was entered as: " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("the last name was entered as: " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("the zip code was entered as: " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is: " + fullName);

    fullNameLength = fullName.length;
    console.log("The variable fullName has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode);
    console.log("The actual zip code number is  " + zipCodeNumb);

    //testing 2 tests, full name and zipcode
    //"!" means "does not"
    if (fullNameLength > 20 || fullNameLength < 2) { //Set minimum and maximum characters for fullNameLength
        console.log("Invalid full name"); //Error message for console
        document.getElementById("loginStatus").innerHTML = "Invalid fufll name"; //display error message
    } else if (zipCode.length != 5) { //"!" means "does not", this line is checking to see if zipCode length does not equal 5, if it doesn't equal 5 it will spit out an error
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
    } else { //Checks, if no errors are present then give sucessful message
        alert("User credintals passed, welcome to the site, " + fullName); //Opens top bar menu alerting the user that they have passed credential login
        document.getElementById("loginStatus").innerHTML = "credintals passed";
    }
}
//For assignment 7
function startFun() {
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true; //Disables respective button
    document.getElementById("stopButton").disabled = false; //Enables respective button upon trigger condition
    document.getElementById("myMarquee").start();//Allows Marquee to move
}
//For assignment 7
function stopFun() {
    console.log("stopFun() stopped"); //Helps us troubble shoot by displaying what's working in logs
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();//Makes Marquee stop
}

//For Palindromw checker
function checkPalin() {
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value; //Makes what is entered into "palin" input a value
    console.log("entStr is: + entStr");
    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");//Wherever a space is it'll remove it and turn it into no txt, meaning it no longer has spaces, race car -> racecar. When I tested my code I replaced the spaces with a space, which is comical to say the least.
    console.log("entStr with no space is: " + entStrNoSpace);


    //create new revArray variable and reverse the string
    var revStr;
    const revArray = []; //Creates an array with the letters
    var length = entStrNoSpace.length - 1;
    console.log("String length is " + length);

    //Input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]); //in the revArray thhis puts letter in reverse
    }

    //Convert to a string froma an array
    revStr = revArray.join("");
    console.log("Reversed text is " + revStr);

    //Compare revArray to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);

    //write to palendrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome, try a different entry"
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is not</b> a palindrome!"
    }
    console.log("Palindrome check process complete")
} //A bug here seems to be that everything has to be either lowercase or upper case, for example, "Mom" is not a palindrome, but "mom" is. A solution to this could be simply making everything capitalized. Just thought that that part was intresting.

//Assignment 11.1 Play sound Related functions
function ShrekophoneSound(){
    console.log("ShrekophoneSound() started");
    mySound = new sound("ShrekophoneSound.mp3");
    mySound.play();
}
//sound for 12.1
function alarmSounds(){
    console.log("alarmSounds() started");
    mySound = new sound("timerSound.mp3");
    mySound.play();
}

function sound(srcFile){
    console.log("sound function started with " + srcFile + " source file.");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    document.body.appendChild(this.sound); 
    this.play = function (){
        this.sound.play();
    }
    this.stop = function (){//Finally found the issue, had play here instead of stop
        this.sound.pause();
    }
}


//Code for 12.1 putting it all together
function startTimer(){
    console.log("startTimer() started");
var steps = document.getElementById("secInput").value; //Gets values for the number of alarm steps(How many seconds)

//set up the countdown time
var currtime = steps;
    for(var i = 0; i <= steps; i++) //Declares steps
    setTimeout(function(){
        if(currtime != 0){
            document.getElementById("timeLeft").innerHTML = currtime;        //While this portion was being trouble shot I was able to figure it out, I'm pretty proud of that, cheers!
        } else { //says "If currtime does equal(!=), because of the else, it'll play the alarmSounds
            document.getElementById("timeLeft").innerHTML = "Time is up!-CALL 911 NOW!!!";  //When currtime = 0 it will display this instead
            alarmSounds(); //choses alarm sound, in this case "CALL 911 NOW!!"
        }

        console.log(currtime); //Logs current time
        currtime--;
    }, i*1000)//Multiplies input by 1000ms, conversion i * 1second

}