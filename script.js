var fullname = document.getElementById("Flname");
var email = document.getElementById("Email");
var emailval = document.getElementById("Email").value;
var msg = document.getElementById("textbox");
var sbtn = document.querySelector("#subbtn");

var fullnameErr = document.getElementById("fullnameErr");
var emailErr = document.getElementById("emailErr");
var msgErr = document.getElementById("msgErr");

fullname.addEventListener('keydown', function (event) {
    fullnameErr.style.display = "block";
    if (event.key === ' ') {
        event.preventDefault();
    }
});

email.addEventListener('keydown', function (event) {
    emailErr.style.display = "block";
    if (event.key === ' ') {
        event.preventDefault();
    }
});

msg.addEventListener('keydown', function (event) {
    msgErr.style.display = "block";
    if (msg.value.length>=1) {
        console.log("pass");
    }
    else if(event.key === (' ')) {
        event.preventDefault();
    }
});

function checkfullname() {
    var value = fullname.value.trim();
    if (value.length === 0 || value !== fullname.value) {
        fullnameErr.textContent = "Empty input or Extra spaces are not allowed";
        fullnameErr.style.display = "block";
        return false;
    }
    else if(!(value.length>=2) || !(value.length<60)){
        fullnameErr.textContent = "Full name must be 2 to 60 characters long";
        fullnameErr.style.display = "block";
        return false;
    }
    else {
        fullnameErr.textContent = "";
        fullnameErr.style.display = "none";
        return true;
    }
}
fullname.addEventListener('input', checkfullname);

function checkmsg() {
    // var value = msg.value.trim();
    if ((msg.value) == '') {
        msgErr.textContent = "Empty input or Extra spaces are not allowed at start";
        msgErr.style.display = "block";
        return false;
    } else {
        msgErr.textContent = "";
        msgErr.style.display = "none";
        return true;
    }
}
msg.addEventListener('input', checkmsg);

function validateEmailfunc() {
    var value = email.value.trim();
    if (value.length === 0 || value !== email.value) {
        emailErr.textContent = "Empty input or Extra spaces are not allowed at start";
        emailErr.style.display = "block";
        return false;
    }
    else if(value.length>=1){
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(value);
        if (isValid) {
            console.log("true email");
            emailErr.style.display = "none";
            emailErr.textContent = "";
            return true;
        }
        else{
            emailErr.textContent = "Enter a valid E-mail";
            emailErr.style.display = "block";
            console.log("false email");
            return false;
        }
    }else {
        emailErr.textContent = "";
        emailErr.style.display = "none";
        return true;
    }
}
email.addEventListener('input', validateEmailfunc);


function validateForm() {
    let valid = true;
    return valid;
}
function validateForm() {
    let valid = true;
    var valid1 = validateEmailfunc() && valid; 
    var valid2 = checkfullname() && valid;
    var valid3 = checkmsg() && valid;
    return valid =  valid1 && valid2 && valid3;
}

document.getElementById('cusform').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateForm()) {
        document.getElementById("submitted").innerText = "CHECK ERRORS AND FILL NECESSARY INPUTS BEFORE SUBMITTING!";
        document.getElementById("submitted").style.display = "block";
    }
    else {
        document.getElementById("submitted").innerText = "Form Submitted!";
        document.getElementById("submitted").style.display = "block";
        // alert("done");
    }
});