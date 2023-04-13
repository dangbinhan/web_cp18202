function khoitao(x) {
    document.getElementById("dangnhap").style.display = "block";
    document.getElementById("thanhcong").style.display = "none";
    document.getElementById("thatbai").style.display = "none";

    switch (x) {
        case 1:
            document.getElementById("dangknhap").style.display = "block";
            document.getElementById("thanhcong").style.display = "none";
            document.getElementById("thatbai").style.display = "none";
            break;

        case 2:
            document.getElementById("dangnhap").style.display = "none";
            document.getElementById("thanhcong").style.display = "block";
            document.getElementById("thatbai").style.display = "none";
            setTimeout(function () { window.location = "trangchu.html"; }, 2000)
            break;

        case 3:
            document.getElementById("dangnhap").style.display = "none";
            document.getElementById("dkthanhcong").style.display = "none";
            document.getElementById("thatbai").style.display = "block";
            break;

        default:
            break;
    }
}

function check() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    if (pass.value == null) {
        if (user.value == null) {
            alert("Tài khoản không được để trống");
            user.focus();
            user.style.background = "yellow";
            pass.style.background = "none";
            return false;
        } else {
        alert("Mật khẩu không được để trống");
        pass.focus();
        pass.style.background = "yellow";
        user.style.background = "none";
        return false;
        }
    }
        else {
            if (user.value == localStorage.getItem("user", user) && pass.value == localStorage.getItem("pass", pass)) {
                document.getElementById("showuser").innerHTML = user.value;
                document.getElementById("showpass").innerHTML = pass.value;
                khoitao(2);
            } else {
                alert("Tên tài khoản hoặc mật khẩu không tồn tại !!");
                user.focus();
                user.style.background = "yellow";
            }
        }   
}

function loadtrang() {
    alert("Đang chuyển sang trang đăng ký ! Vui lòng đợi ..")
    setTimeout(function () { 
        window.location = "register.html"; }, 1000)
}
// const buttonElement = document.getElementById("dangky");
// buttonElement.addEventListener("click", loadtrang);




