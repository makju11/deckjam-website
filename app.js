const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
    id: 1,
    title: "Oversized",
    price: 2000,
    colors: [
        {
            code: "gold",
            img: "./img/goldhoodie.png",
        },
        {
            code: "black",
            img: "./img/blackhoodie.png",
        },
    ],
},
{
    id: 2,
    title: "Slim Fit",
    price: 2000,
    colors: [
        {
            code: "black",
            img: "./img/redhoodie7.png",
        },
        {
            code: "red",
            img: "./img/redhoodie9.png",
        },
    ],
},
{
    id: 3,
    title: "Shorts",
    price: 500,
    colors: [
        {
            code: "blue",
            img: "./img/blueshort.png",
        },
        {
            code: "gray",
            img: "./img/grayshort.png",
        },
    ],
},
]

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change current slide

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change choosen product
        chosenProduct = products[index]

        // //change text of current product
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "php"+ chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img
        // currentProductSizes.textContent = chosenProduct.size
        currentProductColors.forEach((colors,index) => {
        colors.style.backgroundColor = chosenProduct.colors[index].code;
        }
        )
        

    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click",() => {
        currentProductSizes.forEach(size =>{
          size.style.backgroundColor="white"
          size.style.color="black"    
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    }
    )
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const exit = document.querySelector(".exit");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
exit.addEventListener("click",()=>{
    payment.style.display="none"
})