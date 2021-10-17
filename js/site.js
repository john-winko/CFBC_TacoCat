// Call Hello World
function testPalindrome() {
    // reset visibility
    document.getElementById("resultHeader").classList.add("invisible");

    let rawString = document.getElementById("stringValue").value;
    let result = checkPalindrome(rawString);
    displayResult(result);
}

// Make all lowercase (only works with languages that have a lower case)
function normalizeString(rawString) {
    rawString = rawString.toLowerCase();
    let normalString = "";
    for (let c of rawString) {
        if (c != c.toUpperCase()) { // is a letter
            normalString += c;
        }
    }
    return normalString;
}

// Test first/last letters each iteration, returns false if any set doesn't match
function isPalindrome(testString) {
    let normalString = Array.from(testString);
    while (normalString.length > 1) {
        let start = normalString.shift();
        let end = normalString.pop();
        if (start != end) {
            return false;
        }
    }
    return true;
}

// Returns whether the string is palindrome and provides some custom text by return an object
function checkPalindrome(testString) {
    let returnObj = {};
    let normalString = normalizeString(testString);
    returnObj.isPalindrome = isPalindrome(normalString);
    returnObj.msg = `${returnObj.isPalindrome ? "Yes" : "No"}, &quot;${testString}&quot; is ${returnObj.isPalindrome ? "" : "not "}a palindrom.`;
    returnObj.header = `${returnObj.isPalindrome ? "Well Done!" : "Sorry!"}`;
    return returnObj;
}

// Display result on screen
function displayResult(result) {
    document.getElementById("resultHeader").classList.remove("invisible");
    document.getElementById("resultHeader").innerHTML = result.header;
    document.getElementById("resultMessage").innerHTML = result.msg;
}