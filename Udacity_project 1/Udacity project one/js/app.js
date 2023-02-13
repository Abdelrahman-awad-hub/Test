let myList = document.querySelector("#navigation ul");

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("header .logo").onclick = function () {
    scrollToTop();
};

document.querySelector(".scrollTop").onclick = function () {
    scrollToTop();
};

function scrollTopVisibility() {
    if (window.pageYOffset <= 200) {
        document.querySelector(".scrollTop").style.display = "none";
    } else {
        document.querySelector(".scrollTop").style.display = "flex";
    }
}

data.forEach(function (section) {
    let li = document.createElement("li");
    let myLink = document.createElement("a");
    li.className = `${section.id}`;
    li.dataset.target = `${section.id}`;
    li.innerText = section.sectionName;

    myLink.append(li);
    myList.append(myLink);

    li.onclick = function () {
        window.scrollTo({
            top:
                window.document.querySelector("#" + this.dataset.target)
                    .offsetTop - document.querySelector("header").clientHeight,
            behavior: "smooth",
        });
    };
});

function getYPosition() {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    return top;
}
let MySections = document.querySelectorAll("section");
let myLis = document.querySelectorAll("#navigation li");

function liActive() {
    let current;
    MySections.forEach(function (section) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (
            window.pageYOffset +
                document.querySelector("header").clientHeight >=
            sectionTop - window.innerHeight / 3
        ) {
            current = section.id;
        }
    });

    myLis.forEach(function (list) {
        list.classList.remove("active");
        if (list.classList.contains(current)) {
            list.classList.add("active");
        }
    });
}

liActive();
scrollTopVisibility();
window.onscroll = function () {
    liActive();
    scrollTopVisibility();
};
// start home section filling data

let homeSection = document.querySelector("#home");

let addCart = document.createElement("button").cloneNode(true);
let icon = document.createElement("i");
icon.className = "fa-solid fa-cart-plus";
addCart.innerText = "Add to cart ";
let btn = addCart.cloneNode(true);
data[0].products.forEach(function (product, index) {
    let myProducts = document.createElement("div");
    myProducts.className = "product";

    let info = document.createElement("div");
    info.className = "productInfo";

    let productName = document.createElement("h2");
    let description = document.createElement("p");
    let price = document.createElement("span");

    productName.innerText = product.name;
    description.innerText = product.description;
    price.innerText = `$${product.price}`;

    info.append(productName);
    info.append(description);
    info.append(price);
    info.append(addCart);
    addCart.append(icon);
    myProducts.append(info);

    let productImage = document.createElement("div");
    let myImage = document.createElement("img");
    productImage.className = "productImage";
    myImage.setAttribute("src", `images/${product.image}`);

    productImage.append(myImage);
    myProducts.append(productImage);

    homeSection.append(myProducts);
});

// End home section filling data

// start Products section filling data

let productSection = document.getElementById("products");
let sectionName = document.createElement("h2");
sectionName.innerText = data[1].sectionName;
productSection.append(sectionName);

// create product categories
let categories = document.createElement("div");
categories.className = "categories";

data[1].categories.forEach(function (ele) {
    let category = document.createElement("div");
    let categoryName = document.createElement("h3");
    categoryName.innerText = ele.name;
    let productCards = document.createElement("div");

    category.className = "category";
    productCards.className = "productCards";
    // create product card
    ele.products.forEach(function (product) {
        let card = document.createElement("div");
        let imgDiv = document.createElement("div");
        let cardImage = document.createElement("img");
        let cardInfo = document.createElement("div");
        let productName = document.createElement("h3");
        let color = document.createElement("h3");
        let productColor = document.createElement("p");
        let productPrice = document.createElement("span");
        let addCart = document.createElement("button").cloneNode(true);
        let icon = document.createElement("i");

        icon.className = "fa-solid fa-cart-plus";
        addCart.innerText = "Add to cart ";
        card.className = "card";
        imgDiv.className = "imgDiv";
        cardImage.className = "cardImage";
        cardInfo.className = "cardInfo";

        if (product.name === "Shirt") {
            imgDiv.classList.add("rotate");
        }
        cardImage.setAttribute("src", `images/${product.image}`);
        productName.innerText = product.name;
        color.innerText = "Color : ";
        productColor.innerText = product.color;
        productPrice.innerText = product.price;

        imgDiv.append(cardImage);
        card.append(imgDiv);
        cardInfo.append(productName);
        cardInfo.append(color);
        cardInfo.append(productColor);
        cardInfo.append(productPrice);
        addCart.append(icon);
        cardInfo.append(addCart);
        // cardInfo.append(btn);
        card.append(cardInfo);

        category.append(categoryName);
        productCards.append(card);
        category.append(productCards);
        categories.append(category);
    });
});

productSection.append(categories);

// End products section

// Start Our Customers Review section

let reviewSection = document.querySelector("#reviews");

data[2].customersReview.forEach(function (review) {
    let sectionName = document.createElement("h2");
    let reviewCard = document.createElement("div");
    let customerName = document.createElement("h3");
    let customersReview = document.createElement("p");
    let reviewDate = document.createElement("h4");
    let customerImage = document.createElement("img");

    reviewCard.className = "reviewCard";
    sectionName.className = "sectionName";

    sectionName.innerText = "Our Customers Review";
    customerName.innerText = review.customerName;
    customersReview.innerText = review.customersReview;
    reviewDate.innerText = review.date;
    customerImage.setAttribute("src", `images/${review.image}`);

    reviewCard.append(customersReview);
    reviewCard.append(customerName);
    reviewCard.append(reviewDate);
    reviewCard.append(customerImage);
    reviewSection.append(sectionName);
    reviewSection.append(reviewCard);
});

let footer = document.querySelector("#footer");
let footerList = document.createElement("ul");
let p = document.createElement("p");
p.innerText = "Developed By Abdelrahman";

data.forEach(function (ele) {
    let li = document.createElement("li");
    li.innerText = ele.sectionName;
    li.className = `${ele.id}`;
    li.dataset.target = `${ele.id}`;
    footerList.append(li);
    li.onclick = function () {
        window.scrollTo({
            top:
                window.document.querySelector("#" + this.dataset.target)
                    .offsetTop - document.querySelector("header").clientHeight,
            behavior: "smooth",
        });
    };
});

footer.append(footerList);
footer.append(p);
