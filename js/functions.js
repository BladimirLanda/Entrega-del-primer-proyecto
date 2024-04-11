const header = document.querySelector(".header");
const cartIcon = header.firstElementChild;
const leftMenu = document.querySelector(".leftmenu");

cartIcon.addEventListener("click", () => {
    leftMenu.style.left = 0;
});

const lastMenu = document.querySelector(".leftmenu__header");
const lastMenu2 = lastMenu.lastElementChild;

lastMenu2.addEventListener("click", () => {
    leftMenu.style.left = "-100%";
});

//-------------------------------------------------------------

const cartIcon2 = header.lastElementChild;
const rightMenu = document.querySelector(".cart");

cartIcon2.addEventListener("click", () => {
    rightMenu.style.right = 0;
});

const lastCart = document.querySelector(".cart__header");
const lastCart2 = lastCart.lastElementChild;

lastCart2.addEventListener("click", () => {
    rightMenu.style.right = "-100%";
});

//----------------------------------------------------------------
let item;
const carritoAll = document.querySelector(".cart");
const contar = document.querySelector(".icon__badge");
let i = 0;

const bttAgregar = document.querySelectorAll(".cart__add");
bttAgregar.forEach(item => {
    item.addEventListener("click", () => {
        const newDiv = document.createElement("div");
        carritoAll.append(newDiv);
        newDiv.setAttribute("class", "cart__item");

        const newP = document.createElement("p");
        let carritoP = carritoAll.lastElementChild;
        carritoP.append(newP);
        newP.setAttribute("class", "cart__text");
        let carritoPText = carritoP.firstElementChild;
        carritoPText.innerText = "1 producto agregado";

        let itemParent = item.parentElement;
        let itemName = itemParent.firstElementChild;
        let itemAttribute = itemName.getAttribute("alt");

        const newP2 = document.createElement("p");
        carritoP.append(newP2);
        newP2.setAttribute("class", "cart__name");
        let carritoPText2 = carritoP.lastElementChild;
        carritoPText2.innerText = itemAttribute;

        i = i +1;
        contar.innerText = i;
    })
})

//----------------------------------------------------------------------
let productItem;
const product = document.querySelectorAll(".products__item");
product.forEach(productItem => {
    productItem.addEventListener("mouseenter", () => {
        productItem.style.opacity = "0.5";
    } )
    
    productItem.addEventListener("mouseleave", () => {
        productItem.style.opacity = "1";
    })
})
