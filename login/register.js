function khoitao(x) {
    document.getElementById("dangky").style.display = "block";
    document.getElementById("dkthanhcong").style.display = "none";
    document.getElementById("thatbai").style.display = "none";

    switch (x) {
        case 1:
            document.getElementById("dangky").style.display = "block";
            document.getElementById("dkthanhcong").style.display = "none";
            document.getElementById("thatbai").style.display = "none";
            break;

        case 2:
            document.getElementById("dangky").style.display = "none";
            document.getElementById("dkthanhcong").style.display = "block";
            document.getElementById("thatbai").style.display = "none";
            setTimeout(function(){window.location = "login.html";}, 2000)
            break;

        case 3:
            document.getElementById("dangky").style.display = "none";
            document.getElementById("dkthanhcong").style.display = "none";
            document.getElementById("thatbai").style.display = "block";
            break;

        default:
        break;
    }
}

function dkform() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var passcf = document.getElementById("passcf");
    var listUser = localStorage.getItem("listuser") ? JSON.parse(localStorage.getItem("listuser")) : []
    listUser.push({
        username : user.value,
        password : pass.value
    })

    if(user.value != null ){
        if(pass.value != null ){
        if (user.value.length < 8) {
        alert("Tài khoản phải nhiều hơn 8 ký tự");
        user.focus();
        user.style.background = "yellow";
        pass.style.background = "none";
        passcf.style.background = "none";
        return false;
    } 
    if (pass.value.length < 7 && pass.value == passcf.value) {
        alert("Mật khẩu phải nhiều hơn 6 ký tự");
        pass.focus();
        pass.style.background = "yellow";
        user.style.background = "none";
        passcf.style.background = "none";
        return false;
    } if (pass.value == passcf.value && user.value.length > 8) {
        document.getElementById("showuser").innerHTML = user.value;
        document.getElementById("showpass").innerHTML = pass.value;
        user.focus();
        pass.focus();
        localStorage.setItem("listuser", JSON.stringify(listUser));
        khoitao(2);
    } if(pass.value != passcf.value) {
        alert("Mật khẩu bạn nhập không trùng khớp");
        passcf.focus();
        passcf.style.background = "yellow";
        pass.style.background = "none";
        user.style.background = "none";
        return false;
    }
    }else{
        alert("Mật khẩu không được để trống");
        pass.focus();
        pass.style.background = "yellow";
        user.style.background = "none";
        passcf.style.background = "none";
        return false;
    }
    } else {
        alert("Tài khoản không được để trống");
        user.focus();
        user.style.background = "yellow";
        pass.style.background = "none";
        passcf.style.background = "none";
        return false;
    }
}
// const button = document.getElementById("checkdk");
// button.addEventListener("click", dkform);


