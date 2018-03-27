// показывает блок со входом и регистрацией
function reg() {
    $("#login").hide();
    $("#logout").css("display", "block");
}

function login() {
    $("#logout").hide();
    $("#login").css("display", "block");
}

function checkValid() {
var errMsg = "";
    //валидность пароля
    var pswd = $("#validPassword").val();
    if (pswd.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/)) {
    } else {
        errMsg+="Пароль слишком простой. "
    }
    // Пароли должны совпадать
    if($("#validPassword").val() != $("#samePassword").val()){
        errMsg+="Пароли должны совпадать. "
    }
    if(errMsg == ""){
        
    } else {
        alert(errMsg);
    }
    
}


