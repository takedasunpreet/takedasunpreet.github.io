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