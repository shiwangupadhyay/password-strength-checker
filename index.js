const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

const submitButton = document.querySelector("button");

password.addEventListener("input",function(){
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    var digit = 0;
    var letters = 0;
    var specialChars = 0;
    for(var i = 0;i<passwordLength;i++){
        var character = passwordValue[i];
        if(!isNaN(character)){
            digit++;
        }else if(/^[A-Za-z]$/.test(character)){
            letters++;
        }else{
            specialChars++;
        }
    }
    var upperCase = 0;
    for(var i = 0;i<passwordLength;i++){
        code = passwordValue.charCodeAt(i);
        if(code >= 65 && code<= 90){
            upperCase++;
        }else{
            continue;
        }
    }


    var strengthValue = "";

    if(password === 0){
        strengthValue= '';
    }else if(digit == 0 && specialChars == 0 && upperCase == 0){
        strengthValue = "Weak(password must be of 8 letters,contains a digit, a special character and an uppercase alphabate)";
        strength.style.color = "red";
    }else if(passwordLength <= 7 && (digit>0 || specialChars > 0 || upperCase >0)){
        strengthValue = "Medium(password must be of 8 letters,contains a digit, a special character and an uppercase alphabate)";
        strength.style.color = "yellow";
    }else if(passwordLength>7 && digit>0 && specialChars > 0 && upperCase >0){
        strengthValue = "Strong";
        strength.style.color = "green";
    }else{
        strengthValue = "Medium(password must be of 8 letters,contains a digit, a special character and an uppercase alphabate)"
        strength.style.color = "yellow";
    }
    strength.textContent = strengthValue;
    message.style.display = "block";
});

submitButton.addEventListener("click",function(){
    const passwordType = password.getAttribute("type");

    if(passwordType === "password"){
        password.setAttribute("type","text");
    }else{
        password.setAttribute("type","password");
    }
});