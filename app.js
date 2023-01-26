const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

const containersCart = []
const toppingsCart = []
const iceCreamCart = []


function drawCone() {
    template = ``
    containers.forEach(cone => {
        let coneElem = document.getElementById(`creamContainer`)
        template +=
            `<div onclick="addToContainerCart('${cone.name}')" class="card m-3 p-2" style="height: 16rem;">
            <img src="${cone.image}" alt="">
            <div class="card-body">${cone.name}</div>
        </div>`
        coneElem.innerHTML = template

    })
}
function drawCream() {
    template = ``
    iceCream.forEach(cream => {
        let creamElem = document.getElementById(`creamIce`)
        template +=
            `<div onclick="addIceCreamToCart('${cream.name}')" class="card m-3 p-2" style="height: 26vh; width: 16vw;">
            <img src="${cream.image}" alt="">
            <div class="card-body">${cream.name}</div>
        </div>`
        creamElem.innerHTML = template

    })
}



function drawToppings() {
    template = ``
    toppings.forEach(tops => {
        let topElem = document.getElementById(`creamTop`)
        template +=
            `<div onclick="addToppingToCart('${tops.name}')" class="card m-3 p-2" style="height: 16rem;">
            <img src="${tops.image}" alt="">
            <div class="card-body">${tops.name}</div>
        </div>`
        topElem.innerHTML = template
    })
}

function addToContainerCart(name) {
    let Cone = containers.find(cone => cone.name == name)
    console.log(Cone.name)

}
function addIceCreamToCart(name) {
    let Cream = iceCream.find(cone => cone.name == name)
    console.log(Cream.name)

}
function addToppingToCart(name) {
    let tops = toppings.find(cone => cone.name == name)
    console.log(tops.name)

}
drawCone()
drawCream()
drawToppings()