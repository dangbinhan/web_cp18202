var dm = [{ id: 1, tendm: "Shirts", hinh: "img/cat-1.jpg", link: "Shirts.html" },
    { id: 1, tendm: "Jeans", hinh: "img/cat-2.jpg", link: "Jeans.html" },
    { id: 1, tendm: "Swimwear", hinh: "img/cat-3.jpg", link: "Swimwear.html" },
    { id: 1, tendm: "Sleepwear", hinh: "img/cat-4.jpg", link: "Sleepwear.html" },
    { id: 1, tendm: "Sportswear", hinh: "img/cat-5.jpg", link: "Sportswear.html" },
    { id: 1, tendm: "Jumpsuits", hinh: "img/cat-6.jpg", link: "Jumpsuits.html" },
    { id: 1, tendm: "Blazers", hinh: "img/cat-7.jpg", link: "Blazers.html" },
    { id: 1, tendm: "Jackets", hinh: "img/cat-8.jpg", link: "Jackets.html" },
    { id: 1, tendm: "Shoes", hinh: "img/cat-9.jpg", link: "Shoes.html" }
]
var sp = [
    {
        type: 1,
        tensp: "Colorful Stylish Shirt",
        hinh: "img/product-1.jpg",
        gia: 200,
        giacu: 250,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 2,
        tensp: "Colorful Stylish Shirt 2",
        hinh: "img/product-2.jpg",
        gia: 100,
        giacu: 50,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 1,
        tensp: "Colorful Stylish Shirt 3",
        hinh: "img/product-3.jpg",
        gia: 100,
        giacu: 100,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 2,
        tensp: "Colorful Stylish Shirt 4",
        hinh: "img/product-4.jpg",
        gia: 100,
        giacu: 0,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 2,
        tensp: "Colorful Stylish Shirt 5",
        hinh: "img/product-5.jpg",
        gia: 150,
        giacu: 100,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 1,
        tensp: "Colorful Stylish Shirt 6",
        hinh: "img/product-6.jpg",
        gia: 300,
        giacu: 0,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 1,
        tensp: "Colorful Stylish Shirt 7",
        hinh: "img/product-7.jpg",
        gia: 600,
        giacu: 700,
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    },
    {
        type: 2,
        tensp: "Colorful Stylish Shirt 8",
        hinh: "img/product-8.jpg",
        gia: 500,
        giacu: 0,
        // showgia: getshowgia(this.gia, this.giacu)
        showgia: function() {
            return getshowgia(this.gia, this.giacu)
        }
    }

]

function getshowgia(x, y) {
    var kq = "";
    if (x < y) {
        kq = `<h6>$<span>` + x + `</span></h6>
        <h6 class="text-muted ml-2"><del>$` + y + `</del></h6>`;
    } else {
        kq = `<h6>$<span>` + x + `</span></h6>`;
    }
    return kq;
}

function loaddm() {
    var kq = "";
    for (let i = 0; i < dm.length; i++) {

        kq += '<a href="' + dm[i]["link"] + '" class="nav-item nav-link">' + dm[i]["tendm"] + '</a>';

    }
    document.getElementById("loaddm").innerHTML = kq;
}

function loaddata() {
    loaddm();
    loaddssp(1);
    loaddssp(2);
}

function loaddssp(x) {
    var kq = ""; //xu hướng
    var kq2 = ""; // mới
    for (let i = 0; i < sp.length; i++) {
        if (sp[i].type == 1) {
            //template string (es6)
            kq += `<div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src="${sp[i].hinh}" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">` + sp[i].tensp + `</h6>
                        <div class="d-flex justify-content-center">
                            ` + sp[i].showgia() + `
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a onclick="addtocart(this)" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>`;
        } else {
            kq2 += `<div class="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div class="card product-item border-0 mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" src="` + sp[i].hinh + `" alt="">
            </div>
            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">` + sp[i].tensp + `</h6>
                <div class="d-flex justify-content-center">
                ` + sp[i].showgia() + `
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                <a onclick="addtocart(this)" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    </div>`;
        }
    }
    // Show dữ liệu
    if (x == 1) {
        document.getElementById("loaddssp").innerHTML = kq;
    } else {
        document.getElementById("sanphammoi").innerHTML = kq2;
    }

}
var giohang = [];

function addtocart(x) {
    var btn = x.parentElement.parentElement; //ông nội
    var hinh = btn.children[0].children[0].src;
    var ten = btn.children[1].children[0].innerHTML;
    var dongia = btn.children[1].children[1].children[0].children[0].innerHTML;
    var soluong = 1;
    var item = { hinh, ten, dongia, soluong };
    giohang.push(item);
    console.log(giohang);
    document.getElementById("soluong_items").innerText = giohang.length;


}