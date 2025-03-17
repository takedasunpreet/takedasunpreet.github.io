document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("activeTabCart"); // 最初にクラスを削除
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("openCart") === "true") {
        document.body.classList.add("activeTabCart"); // カートを開く
    }
});

let iconCart = document.querySelector(".icon-cart");
let closeBtn = document.querySelector(".cartTab .close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".a");
let listProductHTML1 = document.querySelector(".c");
let listProductHTML2= document.querySelector(".e");
let listProductHTML3= document.querySelector(".g");
let listProductHTML4= document.querySelector(".included");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");

let listProducts = [];
let listProducts1 = [];
let listProducts2= [];
let listProducts3= [];
let listProducts5= [];
let listProducts6= [];
let carts = [];
let totalQuality = 0; 
let totalPrice = 0; 
let maru="〇";
let desc1="";
let ma="";
let ma1="";
let ma2="";
let ma3="";
let ma4="";
let ma5="";
let storedData;
let existingProduct;


/*localStorage.removeItem("listProducts5");*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is running on:", window.location.pathname);

    if (window.location.pathname.includes("shop.html")) {
        setupShop();
    } else if (window.location.pathname.includes("code2.html")) {
        setupCart();
    }else if(window.location.pathname.includes("detail.html")){
        setuptem();
    }else if(window.location.pathname.includes("comment.html")){
        setupcom();
    }else if(window.location.pathname.includes("recipe.html")){
        setupre();
    }else if(window.location.pathname.includes("re-chai.html")){
        setupchai();
    }else if(window.location.pathname.includes("checkout.html")){
        setupcheck();
    }else if(window.location.pathname.includes("about.html")){
        setupabout();
    }
});

const initApp5 = async () => {
    try {
        const response = await fetch("products5.js");
        const data = await response.json();

        // `localStorage` に既存データがあるか確認
        let storedData = localStorage.getItem("listProducts5");
        let listProducts5 = storedData ? JSON.parse(storedData) : [];

        // `fetch` で取得したデータと `localStorage` のデータを統合
        data.forEach(product => {
            let existingProduct = listProducts5.find(p => p.id === product.id);
            if (!existingProduct) {
                listProducts5.push(product);
            }
        });

        console.log("ローカルストレージに保存するデータ:", listProducts5);

        // `localStorage` に保存
        localStorage.setItem("listProducts5", JSON.stringify(listProducts5));

        // listProducts5 を返す
        return listProducts5;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};

const addCartToMemory = () => {
    localStorage.setItem("cart", JSON.stringify(carts));
    carts = JSON.parse(localStorage.getItem("cart"));
    console.log(carts);
};

function setupShop() {

    iconCart.addEventListener("click", () => {
        body.classList.toggle("activeTabCart");
    });

    closeBtn.addEventListener("click", () => {
        body.classList.toggle("activeTabCart");
    });

    const addDataToHTML = () => {
        listProductHTML.innerHTML = ""; 
        if (listProducts.length > 0) {
            listProducts.forEach(product => {
                let newProduct = document.createElement("div");
                newProduct.classList.add("b");
                newProduct.dataset.id = product.id;
    
                newProduct.innerHTML = `
                    <a href="detail.html?id=${product.id}">
                    <img src="${product.image}" alt="">
                </a>
                    <h2>${product.name}</h2>
                    <div class="price">￥${product.price}</div>
                    <button class="addCart">カートに入れる</button>
                `;
                
                listProductHTML.appendChild(newProduct); 
            });
        }
    };
    
    const addDataToHTML1 = () => {
        listProductHTML1.innerHTML = ""; 
        if (listProducts1.length > 0) {
            listProducts1.forEach(product => {
                let newProduct = document.createElement("div");
                newProduct.classList.add("d");
                newProduct.dataset.id = product.id;
    
                newProduct.innerHTML = `
                    <a href="detail.html?id=${product.id}">
                    <img src="${product.image}" alt="">
                </a>
                    <h2>${product.name}</h2>  
                    <div class="price">￥${product.price}</div>
                    <button class="addCart">カートに入れる</button>
                `;
    
                listProductHTML1.appendChild(newProduct);  
            });
        }
    };
    
    const addDataToHTML2 = () => {
        listProductHTML2.innerHTML = "";  // 初期化
        if (listProducts2.length > 0) {
            listProducts2.forEach(product => {
                let newProduct = document.createElement("div");
                newProduct.classList.add("f");
                newProduct.dataset.id = product.id;
    
                newProduct.innerHTML = `
                <a href="detail.html?id=${product.id}">
                    <img src="${product.image}" alt="">
                </a>
                    <h2>${product.name}</h2>
                    <div class="price">￥${product.price}</div>
                    <button class="addCart">カートに入れる</button>
                `;
                
                listProductHTML2.appendChild(newProduct); 
            });
        }
    };
    
    const addDataToHTML3 = () => {
        listProductHTML3.innerHTML = "";  // 初期化
        if (listProducts3.length > 0) {
            listProducts3.forEach(product => {
                let newProduct = document.createElement("div");
                newProduct.classList.add("h");
                newProduct.dataset.id = product.id;
    
                newProduct.innerHTML = `
                <a href="detail.html?id=${product.id}">
                    <img src="${product.image}" alt="">
                </a>
                    <h2>${product.name}</h2>  
                    <div class="price">￥${product.price}</div>
                    <button class="addCart">カートに入れる</button>
                `;
                listProductHTML3.appendChild(newProduct);  
            });
        }
    };

   listProductHTML.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("addCart")) {
            let productId = positionClick.parentElement.dataset.id;
            addToCart(productId);
        }
    });

    listProductHTML1.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("addCart")) {
            let productId = positionClick.parentElement.dataset.id;
            addToCart(productId);
        }
    });
    
    listProductHTML2.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("addCart")) {
            let productId = positionClick.parentElement.dataset.id;
            addToCart(productId);
        }
    });

    listProductHTML3.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("addCart")) {
            let productId = positionClick.parentElement.dataset.id;
            addToCart(productId);
        }
    });

    const addToCart = (productId) => {
        let positionThisProductInCart = carts.findIndex(value => value.productId == productId);
        if (carts.length <= 0) {
            carts = [{ productId: productId, quantity: 1 }];
        } else if (positionThisProductInCart < 0) {
            carts.push({ productId: productId, quantity: 1 });
        } else {
            carts[positionThisProductInCart].quantity += 1;
        }
        console.log("中期",carts);
        addCartToHTML();
        addCartToMemory();
    };

    

    const addCartToHTML = () => {
        listCartHTML.innerHTML="";
        let totalQuality=0;
        let totalPrice = 0; 
        if (carts.length > 0) {
            carts.forEach(cart => {
                totalQuality += cart.quantity;
                console.log(totalQuality);
                let newCart = document.createElement("div");
                newCart.classList.add("items");
                newCart.dataset.id = cart.productId;
    
                // 全ての商品のリストを統合
                let combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);
                // 統合されたリストから商品を探す
                let positionProduct = combinedProducts.findIndex((value) => value.id == cart.productId);
    
                // 統合されたリストから商品情報を取得
                let info = combinedProducts[positionProduct];
    
                newCart.innerHTML = `
                <div class="image">
                    <img src="${info.image}" alt="">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalPrice">
                    ￥${info.price * cart.quantity}
                </div>
                <div class="quantity">
                    <span class="minus">－</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">＋</span>
                </div>`;
                
                listCartHTML.appendChild(newCart);

                let sun=info.price * cart.quantity
                totalPrice += sun; 
            });
        }
        iconCartSpan.innerText = totalQuality;
        document.getElementById("totalAmount").textContent = totalPrice;
    };

    listCartHTML.addEventListener("click", (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains("minus") || positionClick.classList.contains("plus")) {
            let productId = positionClick.parentElement.parentElement.dataset.id;
            let type = "minus";
            if (positionClick.classList.contains("plus")) {
                type = "plus";
            }
            changeQuantity(productId, type);
        }
    });

    const changeQuantity = (productId, type) => {
        let positionItemInCart = carts.findIndex((value) => value.productId == productId);
        if (positionItemInCart >= 0) {
            switch (type) {
                case "plus":
                    carts[positionItemInCart].quantity += 1;
                    break;
                default:
                    let valueChange = carts[positionItemInCart].quantity - 1;
                    if (valueChange > 0) {
                        carts[positionItemInCart].quantity = valueChange;
                    } else {
                        carts.splice(positionItemInCart, 1);
                    }
                    break;
            }
        }
        addCartToMemory();
        addCartToHTML();
    }  

    const initApp = () => {
        fetch("products.js")
            .then(response => response.json())
            .then(data => {
                listProducts = data;
                console.log("初期",listProducts);
                addDataToHTML();

                if(localStorage.getItem("cart")){
                    carts=JSON.parse(localStorage.getItem("cart"));
                    addCartToHTML();
                }
            })
    }
    initApp();

    const initApp1 = () => {
        fetch("products1.js")
            .then(response => response.json())
            .then(data => {
                listProducts1 = data;
                console.log("初期",listProducts1);
                addDataToHTML1();

                if(localStorage.getItem("cart")){
                    carts=JSON.parse(localStorage.getItem("cart"));
                    addCartToHTML();
                }
            })
    }
        initApp1();

        const initApp2 = () => {
            fetch("products2.js")
                .then(response => response.json())
                .then(data => {
                    listProducts2 = data;
                    console.log("初期",listProducts2);
                    addDataToHTML2();
                    if(localStorage.getItem("cart")){
                        carts=JSON.parse(localStorage.getItem("cart"));
                        addCartToHTML();

                        if(localStorage.getItem("cart")){
                            carts=JSON.parse(localStorage.getItem("cart"));
                            addCartToHTML();
                        }
        }})
            }
            initApp2();

            const initApp3 = () => {
                fetch("projects3.js")
                    .then(response => response.json())
                    .then(data => {
                        listProducts3 = data;
                        console.log("初期",listProducts3);
                        addDataToHTML3();

                        if(localStorage.getItem("cart")){
                            carts=JSON.parse(localStorage.getItem("cart"));
                            addCartToHTML();
                        }
                    })
            }
                initApp3();
    }



function setupCart(){

    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;

    
}

function setuptem() {
    let iconbutton = document.querySelector(".btn10 button");


    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    // totalQualityを計算
    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }

    // ヘッダーのカートアイコンに反映
    iconCartSpan.innerText = totalQuality;

    iconCart.addEventListener("click", () => {
        body.classList.toggle("activeTabCart");
    });
    closeBtn.addEventListener("click", () => {
        body.classList.toggle("activeTabCart");
    });

    let ad = document.querySelector(".included .content button");
let productId = new URLSearchParams(window.location.search).get('id');
let combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);
let product = combinedProducts.find((value) => value.id == productId);

const Addcl = () => {
    productId = new URLSearchParams(window.location.search).get('id');
    combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);
    product = combinedProducts.find((value) => value.id == productId);
    console.log("これっすね", carts);
};

ad.addEventListener("click", (event) => {
    addDataTo();
});

const addDataTo = () => {
    let cartItem = carts.find(cart => cart.productId == productId);

    if (!cartItem) {
        carts.push({ productId: productId, quantity: 1 });
    } else {
        cartItem.quantity += 1;
    }

    console.log("中期12", carts);
    addCartToHT();
    addCartToMemory();
};

const addCartToHT = () => {
    let totalQuality = 0;
    let totalPrice = 0; 
    listCartHTML.innerHTML = ""; // 初期化（重複防止）

    if (carts.length > 0) {
        carts.forEach(cart => {
            let product = combinedProducts.find(p => p.id == cart.productId);
            if (!product) return;

            totalQuality += cart.quantity;

            let newCart = document.createElement("div");
            newCart.classList.add("items");
            newCart.dataset.id = cart.productId;

            newCart.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="name">
                    ${product.name}
                </div>
                <div class="totalPrice">
                    ￥${product.price * cart.quantity}
                </div>
                <div class="quantity">
                    <span class="minus">－</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">＋</span>
                </div>`;

            listCartHTML.appendChild(newCart);

            totalPrice += product.price * cart.quantity;
        });
    }

    iconCartSpan.innerText = totalQuality;
    document.getElementById("totalAmount").textContent = totalPrice;
};

listCartHTML.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains("minus") || positionClick.classList.contains("plus")) {
        let productId = positionClick.parentElement.parentElement.dataset.id;
        let type = "minus";
        if (positionClick.classList.contains("plus")) {
            type = "plus";
        }
        changeQuantity(productId, type);
    }
});

const changeQuantity = (productId, type) => {
    let positionItemInCart = carts.findIndex((value) => value.productId == productId);
    if (positionItemInCart >= 0) {
        switch (type) {
            case "plus":
                carts[positionItemInCart].quantity += 1;
                break;
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHT();
}  




    const initApp = () => {
        fetch("products.js")
            .then(response => response.json())
            .then(data => {
                listProducts = data;
                console.log("初期1", listProducts);
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                    addCartToHT();
                }
                initApp4();
            });
    };
    initApp();

    const initApp1 = () => {
        fetch("products1.js")
            .then(response => response.json())
            .then(data => {
                listProducts1 = data;
                console.log("初期", listProducts1);
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                    addCartToHT();
                }
                initApp4();
            });
    };
    initApp1();

    const initApp2 = () => {
        fetch("products2.js")
            .then(response => response.json())
            .then(data => {
                listProducts2 = data;
                console.log("初期", listProducts2);
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                    addCartToHT();
                }
                initApp4();
            });
    };
    initApp2();

    const initApp3 = () => {
        fetch("projects3.js")
            .then(response => response.json())
            .then(data => {
                listProducts3 = data;
                console.log("初期", listProducts3);
                Addcl();
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                    addCartToHT();
                }
                initApp4();
                
            });
    };
    initApp3();
}


document.addEventListener("DOMContentLoaded",async function () {
    let listProducts5 = await initApp5();
    console.log("始動されましたよ");
    console.log("ここにlocalのデータあり→",listProducts5);
    let productId = new URLSearchParams(window.location.search).get('id');
    let product = listProducts5.find((value) => value.id == productId);
    console.log("この商品⇒",product);

    const reviews = product.review;
    console.log("これレビュー",reviews.length);
    let ratingValue = 0;
    
    if (reviews.length > 1) {
        let sunpreet = 0;
        for (let set = 0; set < reviews.length; set++) {
            sunpreet += Number(reviews[set].star);
        }  
        ratingValue = sunpreet / reviews.length;  
    } else {
        ratingValue = reviews[0].star; 
    }

    ratingValue = Math.round(ratingValue);

        const radioButtons = document.querySelectorAll(".star10 input[type='radio'],.come-box  .star11 input[type='radio'],.come-box2  .star11 input[type='radio'],.come-box2  .star11 input[type='radio']");
        radioButtons.forEach(button => {
            button.disabled = true;
        });
    
    document.getElementById("date10").textContent = product.review[0].datee;
    document.getElementById("title-hairu0").textContent = product.review[0].review1;
    document.getElementById("naiyou1").textContent = product.review[0].come;
    document.getElementById("rating-num").textContent = ratingValue;

    if(reviews.length == 2){
        document.getElementById("date11").textContent = product.review[1].datee;
        document.getElementById("title-hairu1").textContent = product.review[1].review1;
        document.getElementById("naiyou2").textContent = product.review[1].come;
        
    }else if(reviews.length == 3){
        document.getElementById("date11").textContent = product.review[1].datee;
        document.getElementById("title-hairu1").textContent = product.review[1].review1;
        document.getElementById("naiyou2").textContent = product.review[1].come;
    
        document.getElementById("date12").textContent = product.review[2].datee;
        document.getElementById("title-hairu2").textContent = product.review[2].review1;
        document.getElementById("naiyou3").textContent = product.review[2].come;
    }

    let stars = document.querySelectorAll(".star10 input");
     stars.forEach(star => {
        if (parseInt(star.value) == ratingValue) {
            star.checked = true; 
        }
        console.log(star.checked);
    });

    let stars1 = document.querySelectorAll(".come-box .star11 input");
    stars1.forEach(star => {
        if (parseInt(star.value) == product.review[0].star) {
            star.checked = true;  
        }
        console.log(star.checked);
    });

    let stars2 = document.querySelectorAll(".come-box1 .star11 input");
    stars2.forEach(star => {
        console.log("aaaaaaaaaa",star.value);
        if (parseInt(star.value) == product.review[1].star) {
            star.checked = true;  
        }
        console.log(star.checked);
    });

    let stars3 = document.querySelectorAll(".come-box2 .star11 input");
          stars3.forEach(star => {
        if (parseInt(star.value) == product.review[2].star) {
            star.checked = true;  
        }
        console.log(star.checked);
    });
    
});


const initApp4 = () => {
    let ma="";
    let ma1="";
    let ma2="";
    let ma3="";
    let ma4="";
    let ma5="";
    let maru="〇";
    let desc1="";
    let addtocartbutton = document.querySelector(".content .addcart button");

let productId = new URLSearchParams(window.location.search).get('id');
console.log("商品ID:", productId);
document.querySelector(".btn10 button").addEventListener("click", function() {
    window.location.href = `comment.html?id=${productId}`;
});


// 複数の商品リストを統合
let combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);

// 統合されたリストから商品を探す（filterではなくfindを使用）
let product = combinedProducts.find((value) => value.id == productId);
console.log("ああああああああああああ",product);



if (product) {
    document.querySelector(".name").textContent = product.name;
    document.querySelector(".price").textContent = `￥${product.price}`;
    document.querySelector(".image10 img").src = product.image;
    maru = product.cir;
    desc1=product.description;
    ma=product.naiyou;
    ma1=product.name1;
    ma2=product.ingridient;
    ma3=product.hozon;
    ma4=product.syou;
    ma5=product.com;
} 
console.log(ma1);
console.log(ma2);
console.log(ma3);
console.log(ma4);
console.log(ma5);
console.log(ma);
document.getElementById("marubatu").textContent = maru;
document.getElementById("des").textContent = desc1;
document.getElementById("nai").textContent = ma;
document.getElementById("name").textContent = ma1;
document.getElementById("ingr").textContent = ma2;
document.getElementById("pre").textContent = ma3;
document.getElementById("date").textContent = ma4;
document.getElementById("company").textContent = ma5;

document.querySelector(".addCart").addEventListener("click", () => {
    let productId = new URLSearchParams(window.location.search).get('id');
    addToCart(productId);
});


}

function setupcom(){
    let backButton = document.querySelector(".btn1 button");
    let backButton1 = document.querySelector(".btn2 button");
    let today = new Date();
    let product;
    let combinedProducts;

    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;

    const initApp = () => {
        fetch("products.js")
            .then(response => response.json())
            .then(data => {
                listProducts = data;
                console.log("初期", listProducts);
                initApp4();

                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                }
            });
    };
    initApp();

    const initApp1 = () => {
        fetch("products1.js")
            .then(response => response.json())
            .then(data => {
                listProducts1 = data;
                console.log("初期", listProducts1);
                initApp4();
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                }
            });
    };
    initApp1();

    const initApp2 = () => {
        fetch("products2.js")
            .then(response => response.json())
            .then(data => {
                listProducts2 = data;
                console.log("初期", listProducts2);
                initApp4();
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                }
            });
    };
    initApp2();

    const initApp3 = () => {
        fetch("projects3.js")
            .then(response => response.json())
            .then(data => {
                listProducts3 = data;
                console.log("初期", listProducts3);
                initApp4();
                if (localStorage.getItem("cart")) {
                    carts = JSON.parse(localStorage.getItem("cart"));
                }
            });
    };
    initApp3();

    const initApp4 = () => {

    let productId = new URLSearchParams(window.location.search).get('id');
    console.log("商品ID:", productId);


    combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);

// 統合されたリストから商品を探す（filterではなくfindを使用）
product = combinedProducts.find((value) => value.id == productId);
console.log(product);


if (product) {
    document.querySelector(".image11 img").src = product.image;
}

backButton.addEventListener("click", function() {
    window.location.href = `detail.html?id=${productId}`; 
});
}



// 初回実行
initApp5();


backButton1.addEventListener("click", function () {
    let productId = new URLSearchParams(window.location.search).get("id");

    let sehj = document.getElementById("area").value;
    let saki = document.getElementById("area1").value;
    let sahj = document.querySelector('input[name="rate4"]:checked');
    let todayFormatted = new Date().toISOString().split("T")[0];

    console.log(todayFormatted);
    console.log(sehj);
    console.log(saki);
    console.log(sahj.id.replace("rate-4-", ""));

    // `localStorage` からデータを取得
    storedData = localStorage.getItem("listProducts5");
    let listProducts5 = storedData ? JSON.parse(storedData) : [];

    // `productId` に該当する商品を取得
    let product5 = listProducts5.find((value) => value.id == productId);

    console.log("このidに入れるんよね", product5);

    if (confirm("本当にレビューを投稿しますか？")) {
        if (sehj === "" || saki === "" || !sahj) {
            alert("評価、コメント、本文３つとも全部記入してください");
        } else {
            if (product5) {
                let reviewData = {
                    review1: sehj,
                    come: saki,
                    star: sahj.id.replace("rate-4-", ""),
                    datee: todayFormatted,
                };

                if (!product5.review) {
                    product5.review = [];
                }

                // レビューを追加
                product5.review.push(reviewData);

                // `localStorage` にデータを保存
                localStorage.setItem("listProducts5", JSON.stringify(listProducts5));

                console.log("Updated product with review:", product5);

                // レビュー投稿後にページをリロード
                window.location.href = `detail.html?id=${productId}`;
            }
        }
    }
});

}

function setupre(){

    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;

    let listProductHTML = document.querySelector(".a");
let list=document.querySelector(".chaa");
let listProducts = [];

const addDataToHTML = () => {
    listProductHTML.innerHTML = "";  // 初期化
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement("div");
            newProduct.classList.add("b");
            newProduct.dataset.id = product.id;

            newProduct.innerHTML = `
            <a href="re-detail.html?id=${product.id}">
                <div class="photo">
            <img src="${product.image}" alt="">
          </div>
            <div class="name1">
                <div class="name2">
                <h4>${product.name10}</h4>
                <p>${product.name11}</p>
                </div>
                <div class="tag">
                    <div class="tag-time">
                        <h4><span><i class="fi fi-rr-clock-three"></i></span>調理</h4>
                    </div>
                    <div class="tag-ingre">
                        <h4><span><i class="fi fi-rs-recipe-book"></i></span>このレシピで使う商品</h4>
                    </div>
                </div>
                <div class="tag1">
                    <div class="time1">
                        <p>${product.time10}</p>
                    </div>
                    <div class="ingre1">
                        <p>${product.ingre10}</p>
                    </div>
                </div>
                </div>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

const initApp4 = () => {

    let productId = new URLSearchParams(window.location.search).get('id');
    console.log("商品ID:", productId);
    console.log(listProducts);

    let product = listProducts.find((value) => value.id == productId);
    console.log("このレシピね⇒",product);

    if (product) {
        document.querySelector(".bi span").textContent=product.name11;
        document.querySelector(".name21 h4").textContent = product.name10;
        document.querySelector(".name21 p").textContent = product.name11;
        document.querySelector(".image20 img").src = product.image1;
        document.querySelector(".zai1 p").textContent=product.ingre11;
        document.querySelector(".syo12 p").textContent=product.time10;
        document.querySelector(".bi2 p").textContent=product.nani;
        document.querySelector(".dir1 p").textContent = product.direction1;
        document.querySelector(".dir2 p").textContent = product.direction2;
        document.querySelector(".dir3 p").textContent = product.direction3;
        document.querySelector(".dir4 p").textContent = product.direction4;
        document.querySelector(".dir5 p").textContent = product.direction5;
        document.querySelector(".dir6 p").textContent = product.direction6;
        document.querySelector(".dir7 p").textContent = product.direction7;
        document.querySelector(".blah p").textContent = product.chefnote;
        document.querySelector(".caro2 p").textContent = product.karori;
        document.querySelector(".Fat2 p").textContent = product.sisitu;
        document.querySelector(".caro3 p").textContent = product.tannsui;
        document.querySelector(".Fat3 p").textContent = product.tannpaku;
    }

}

const initApp = () => {
    fetch("recipe1.js")
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            console.log("初期",listProducts);
            addDataToHTML();
        })
}
initApp();

const initApp1 = () => {
    fetch("recipe1.js")
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            console.log("初期",listProducts);
            initApp4();
        })
}
initApp1();

list.addEventListener("click", function() {
    window.location.href = `re-chai.html`; 
});
}

function setupchai(){
    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;
}

function setupcheck(){
    

    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;

    let combinedProducts;
    let listCartHTML1 = document.querySelector(".mango2");
    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    const initApp = () => {
        fetch("products.js")
            .then(response => response.json())
            .then(data => {
                listProducts = data;
                console.log("初期", listProducts);
                initApp4();
            });
    };
    initApp();

    const initApp1 = () => {
        fetch("products1.js")
            .then(response => response.json())
            .then(data => {
                listProducts1 = data;
                console.log("初期", listProducts1);
                initApp4();
            });
    };
    initApp1();

    const initApp2 = () => {
        fetch("products2.js")
            .then(response => response.json())
            .then(data => {
                listProducts2 = data;
                console.log("初期", listProducts2);
                initApp4();
            });
    };
    initApp2();

    const initApp3 = () => {
        fetch("projects3.js")
            .then(response => response.json())
            .then(data => {
                listProducts3 = data;
                console.log("初期", listProducts3);
                initApp4();
            });
    };
    initApp3();

    const initApp4 = () => {
    combinedProducts = listProducts.concat(listProducts1, listProducts2, listProducts3);
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb",combinedProducts);
    addCartToHT();
    }

    const addCartToHT = () => {

        let totalQuality = 0;
        let totalPrice = 0; 
        let totaltax = 0;
        let totaltax1 = 0;
        let totaltax2 = 0;
        listCartHTML1.innerHTML = ""; 
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaa",combinedProducts);
    
        if (carts.length > 0) {
            carts.forEach(cart => {
                let product = combinedProducts.find(p => p.id == cart.productId);
                console.log("cccccccccccccccc",product);
                if (!product) return;
    
                totalQuality += cart.quantity;
    
                let newCart = document.createElement("div");
                newCart.classList.add("items");
                newCart.dataset.id = cart.productId;
    
                newCart.innerHTML = `
                <div class="display">
                    <div class="image111">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="name111">
                        ${product.name}
                    </div>
                    <div class="totalPrice111">
                        ￥${product.price * cart.quantity}
                    </div>
                    <div class="tax">
                        ￥${(product.price*cart.quantity)*0.1}
                    </div>
                    <div class="quantity111">
                        ${cart.quantity}
                    </div>
                    </div>
                    <hr class="ere">`;
    
                listCartHTML1.appendChild(newCart);
    
                totalPrice += product.price * cart.quantity;
                totaltax += (product.price*cart.quantity)*0.1;
            });
        }
        
        totaltax1 = totaltax+0; 
        totaltax2=total+totaltax1;
        iconCartSpan.innerText = totalQuality;
        document.querySelector(".tax1 span").textContent = "￥"+totalPrice;
        document.querySelector(".tax3 span").textContent = "￥"+totaltax1;
        document.querySelector(".tax4 span").textContent = "￥"+totaltax;
        document.querySelector(".tax5 h4").textContent = "￥"+totaltax2;
    };

    
    
}

function setupabout(){
    if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
    }

    totalQuality = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuality += cart.quantity;
        });
    }


    iconCartSpan.innerText = totalQuality;
}