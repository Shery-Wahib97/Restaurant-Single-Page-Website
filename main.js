let menu = document.querySelector(".menu");
let closeBTN = document.querySelector(".close");
let resUL = document.querySelector("ul");

menu.addEventListener("click", () => {
    // resUL.classList.add("Active");
    resUL.setAttribute("class", "active");
    menu.classList.add("active")
})

closeBTN.addEventListener("click", () => {
    resUL.removeAttribute("class", "active");
    menu.classList.remove("active")
})


// swiper js code -------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    }

});


// Food Lover Menu ------------------------

const SectionCenter = document.querySelector(".menu-items-container");
const filterBtns = document.querySelectorAll(".btn-cat");

filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const Category = e.currentTarget.dataset.id;
        const menuCategory = theMenu.filter(menuItem => {
            if (menuItem.category == Category) {
                return menuItem;
            }
        });
        if (Category == "all") {
            displayMenusItem(theMenu)
        } else {
            displayMenusItem(menuCategory)
        };

        const btns = Array.from(filterBtns);
        btns.forEach(el => {
            el.addEventListener("click", function (e) {
                btns.forEach((ele) => {
                    ele.classList.remove("active-btn");
                })
                e.currentTarget.classList.add("active-btn")
            })
        });
    })
});


const theMenu = [
    {
        id: 1,
        title: "Our Special PIZZA",
        category: "dinner",
        price: 30,
        img: "./images/menu2.jpeg"
    },

    {
        id: 2,
        title: "pizza",
        category: "lunch",
        price: 25,
        img: "./images/menu5.jpeg"
    },

    {
        id: 3,
        title: "Our Special PIZZA",
        category: "drinks",
        price: 38,
        img: "./images/menu8.jpeg"
    },

    {
        id: 4,
        title: "pizza",
        category: "dinner",
        price: 20,
        img: "./images/menu2.jpeg"
    },

    {
        id: 5,
        title: "Our Special PIZZA",
        category: "lunch",
        price: 22,
        img: "./images/menu5.jpeg"
    },

    {
        id: 6,
        title: "pizza",
        category: "drinks",
        price: 27,
        img: "./images/menu8.jpeg"
    },

    {
        id: 7,
        title: "Our Special PIZZA",
        category: "dinner",
        price: 28,
        img: "./images/menu2.jpeg"
    },

    {
        id: 8,
        title: "pizza",
        category: "lunch",
        price: 26,
        img: "./images/menu5.jpeg"
    },

    {
        id: 9,
        title: "Our Special PIZZA",
        category: "drinks",
        price: 24,
        img: "./images/menu8.jpeg"
    },

    {
        id: 10,
        title: "pizza",
        category: "starter",
        price: 33,
        img: "./images/menu2.jpeg"
    },

    {
        id: 11,
        title: "Our Special PIZZA",
        category: "starter",
        price: 31,
        img: "./images/menu5.jpeg"
    },
]

window.addEventListener("DOMContentLoaded", function () {
    displayMenusItem(theMenu)
});

function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map(function (item) {
        return ` <div class="img-cards">
        <img src= ${item.img} alt="">
        <p class="price">Only on ${item.price} Dolloars</p>
        <p>${item.title}</p>
        </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
}


// Static Counter Number Start -------------------
const counterEl = document.querySelectorAll(".num");

counterEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    increamentCounter();

    function increamentCounter() {
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increament = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increament);

        if (currentNum < dataCeil) {
            counterEl.innerText = currentNum;
            setTimeout(increamentCounter, 70);
        } else {
            counterEl.innerHTML = dataCeil
        }
    }
});



