function GetValues()
{
    let userInput = document.getElementById("tboxWord").value;
    if(!IsValidEntry(userInput))
    {
        alert("Invalid entry, please try again");
        return;
    }

    let isPalindrome = IsPalindrome(userInput);
    DisplayResult(userInput, isPalindrome);
    
}

function IsValidEntry(userInput) 
{
    return userInput.length > 1;
}

function IsPalindrome(userInput)
{
    let reversedWord = "";
    if(userInput.includes(" "))
    {
        userInput = userInput.replace(/\s/g, '');
    }

    for(let i = userInput.length-1; i >= 0; i--)
    {
        reversedWord += userInput[i];
    }

    return userInput.toLowerCase() == reversedWord.toLowerCase();
}

function DisplayResult(word, result)
{
    let output = "is a palindrome";
    document.getElementById("msg").classList.add("resultbg");
    if(!result)
    {
        output = "is NOT a palindrome";
    }
    document.getElementById("msg").innerHTML=`${ word } ${ output }`;
    document.getElementById("alert").classList.remove("invisible");
}
