function autogenerate() {
    var length = document.getElementById('passLength').value;
    var characters = "";
    
    var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var specail = "!@#$%^&*()";
    
    var upr = document.getElementById("upperCase").checked;
    var lwr = document.getElementById("lowerCase").checked;
    var numb =  document.getElementById("numbers").checked;
    var spcl =  document.getElementById("specailCharacters").checked;

    if (!upr && !lwr && !numb && !spcl) {
        document.getElementById("passInput").value = "Select At Least One Check Box!";
        return; 
    }

    if (upr) {
        characters += uppCase;
    }
    if (lwr) {
        characters += lowCase;
    }
    if (numb) {
        characters += num;
    }
    if (spcl) {
        characters += specail;
    }
        
    var password = "";

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * characters.length);
        password += characters.charAt(random);
    }

    document.getElementById("passInput").value = password;
}

function updatePassLength() {
    var length = document.getElementById('passLength').value;
    document.getElementById('passLengthDisplay').textContent = length;
}