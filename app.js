const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
    id: 1,
    title: "Hoodies",
    price: 2000,
    colors: [
        {
            code: "green",
            img: "./img/greenhoodie.png",
        },
        {
            code: "blue",
            img: "./img/bluehoodie.png",
        },
    ],
},
{
    id: 2,
    title: "Shirts",
    price: 2000,
    colors: [
        {
            code: "black",
            img: "./img/blackshirt.png",
        },
        {
            code: "red",
            img: "./img/redshirt.png",
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
