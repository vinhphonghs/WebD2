
import data from "./data.json" assert {type: "json"};
let container = document.getElementById("container");
let body = document.body;
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.display = "contents";


function header1() {

    let header_b = document.createElement("div")
    header_b.style.display = "flex";

    let headLogo = document.createElement("img")
    headLogo.src = "https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0";
    headLogo.style.height = "100px"
    headLogo.style.marginTop = "10px";
    headLogo.style.marginBottom = "10px";
    headLogo.style.marginLeft = "35px";
    headLogo.style.marginRight = "35px";

    let options = [
        "Thực đơn",
        "Khuyến mãi",
        "Hệ thống nhà hàng",
    ];
    let optionBox = document.createElement("div");
    optionBox.style.display = "flex";
    optionBox.style.justifyContent = "space-between";
    optionBox.style.marginRight = "40%";
    for (let i = 0; i < options.length; i++) {
        let optionButton = document.createElement("button");
        optionButton.innerHTML = options[i];
        optionButton.style.backgroundColor = "white";
        optionButton.style.color = "black";
        optionButton.style.border = "none";
        optionButton.style.fontSize = "17pt";
        optionButton.style.fontWeight = "bold";
        optionButton.style.paddingTop = "20px";
        optionButton.style.marginRight = "15px";
        optionBox.appendChild(optionButton);
    }

    let languages = document.createElement("a")
    languages.text = "English";
    languages.style.fontSize = "15pt"
    languages.style.fontWeight = "bold";
    languages.style.marginTop = "50pt";
    // languages.style.marginRight = "190pt";

    let headLogo2 = document.createElement("img")
    headLogo.src = "https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0";
    headLogo2.style.height = "50px";
    headLogo2.style.marginTop = "30pt";


    let dialogCart = document.createElement("dialog")
    dialogCart.id = "fastfood"
    dialogCart.innerHTML = `
        <form>
        <p>
          <label>
            Payment:
            <select>
              <option value="default">Choose…</option>
              <option>Tiền mặt</option>
              <option>payment Card</option>
              <option>Other...</option>
            </select>
          </label>
        </p>
        <div>
          <button value="cancel" formmethod="dialog">Cancel</button>
          <button id="confirmBtn" value="default">Thanh toán</button>
        </div>
      </form>
    `
    let iconCart = document.createElement("i")
    iconCart.style.fontSize = "36px";
    iconCart.className = "fas fa-shopping-cart";
    iconCart.style.height = "50px";
    iconCart.style.marginTop = "30pt";
    // <i class='fas fa-shopping-cart' style='font-size:36px'></i>

    const confirmBtn = dialogCart.querySelector("#confirmBtn");

    iconCart.addEventListener("click", () => {
        dialogCart.showModal();
    });

    confirmBtn.addEventListener("click", (event) => {
        thanhToan();
    });


    let headLogo4 = document.createElement("img")
    headLogo2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/OOjs_UI_icon_menu.svg/2048px-OOjs_UI_icon_menu.svg.png";
    headLogo2.style.height = "50px";
    headLogo2.style.marginTop = "30pt";


    header_b.appendChild(headLogo);
    header_b.appendChild(optionBox);
    header_b.appendChild(languages);
    header_b.appendChild(headLogo2);
    header_b.appendChild(dialogCart);
    header_b.appendChild(iconCart);
    header_b.appendChild(headLogo4);
    return header_b;
}

function thanhToan()
{
    let total = 0;
    for(let i = 0; i < listOfCart.length; i++)
    {
        let indexFood = data.Food.findIndex(value => value.id == listOfCart[i].id)
        if(indexFood != -1){
            total += parseInt(data.Food[indexFood].price) * parseInt(listOfCart[i].quantity);
        }
    }
    alert(total);
    listOfCart = [];
}

function lineA() {

    let line1 = document.createElement("div");
    line1.style.backgroundColor = "#202124";
    line1.style.width = "100%";
    line1.style.height = "1px";
    line1.style.marginBottom = "20px";
    return line1;
}

function header2() {

    let header_b2 = document.createElement("div")


    let options2 = [
        "MÓN MỚI",
        "COMBO 1 NGƯỜI",
        "COMBO NHÓM",
        "GÀ RÁN - GÀ QUAY",
        "BURGER - CƠM - MÌ Ý",
        "THỨC ĂN NHẸ",
        "THỨC UỐNG & TRÁNG MIỆNG",
    ];
    let optionBox2 = document.createElement("div");
    optionBox2.style.display = "flex";
    optionBox2.style.justifyContent = "space-between";
    optionBox2.style.marginLeft = "5%";
    optionBox2.style.marginTop = "1%";
    optionBox2.style.marginRight = "10%";
    optionBox2.style.marginBottom = "1%";
    for (let i = 0; i < options2.length; i++) {
        let optionButton2 = document.createElement("button");
        optionButton2.innerHTML = options2[i];
        optionButton2.style.backgroundColor = "white";
        optionButton2.style.color = "black";
        optionButton2.style.border = "none";
        optionButton2.style.fontWeight = "bold";
        optionButton2.style.fontSize = "18pt";


        optionBox2.appendChild(optionButton2);
    }

    header_b2.appendChild(optionBox2);
    return header_b2;
}

function lineB() {

    let line2 = document.createElement("div");
    line2.style.backgroundColor = "#202124";
    line2.style.width = "100%";
    line2.style.height = "1px";
    line2.style.marginBottom = "2%";
    return line2;
}

function titlleA() {
    let title1 = document.createElement("h2")
    title1.textContent = "MÓN MỚI";
    title1.style.fontSize = "25pt";
    title1.style.fontWeight = "bold";
    title1.style.marginLeft = "80px";
    title1.style.marginBottom = "0px";

    return title1;
}

function titlleB() {
    let title2 = document.createElement("h2")
    title2.textContent = "COMBO 1 NGƯỜI";
    title2.style.marginTop = "5%";
    title2.style.fontSize = "25pt";
    title2.style.fontWeight = "bold";
    title2.style.marginLeft = "80px";

    return title2;
}

function titlleC() {
    let title3 = document.createElement("h2")
    title3.textContent = "THỨC UỐNG & TRÁNG MIỆNG";
    title3.style.marginTop = "5%";
    title3.style.fontSize = "25pt";
    title3.style.fontWeight = "bold";
    title3.style.marginLeft = "80px";

    return title3;
}

class Food {
    /** 
     * @param {number} id
     * @param {number} quantity
     * @param {string} name
     * @param {string} price
     * @param {string} imgUrl
     * @param {string} description
     */
    constructor(id, quantity, name, price, imgUrl, description) {
        this.id = id,
            this.quantity = quantity,
            this.name = name,
            this.price = price,
            this.imgUrl = imgUrl,
            this.description = description
    }
}



const listOfCart = []
/**
 * @param {Food} food 
 */
function btnAddToCart(food) {

    let itemFood
    let indexFood = data.Food.findIndex(value => value.id == food.id)
    // console.log(food);
    if (listOfCart.length == 0) {
        itemFood = {
            "id": food.id,
            "quantity": 1
        }
        listOfCart.push(itemFood);
        data.Food[indexFood].quantity--;
    } else {
        let indexCard = listOfCart.findIndex(value => value.id == food.id)
        if (indexCard != -1) {
            if (data.Food[indexFood].quantity + 1 >= listOfCart[indexCard].quantity) {
                listOfCart[indexCard].quantity++;
                data.Food[indexFood].quantity--;
            } else {
                alert("Sản phẩm hết hàng");
            }
        } else {
            itemFood = {
                "id": food.id,
                "quantity": 1
            }
            listOfCart.push(itemFood);
            data.Food[indexFood].quantity--;
        }

    }
    console.log(listOfCart);
    console.log(data.Food);
}

/**
 * 
 * @param {Food} food
 * @returns 
 */

function buildItemCrd(food) {
    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "max-width": "350px",
        "margin": "20pt",
        "marginLeft": "15pt",
        "marginBottom": "10pt",
        "padding": "10pt",
        "justify-content": "center",
        "text-align": "center",
        "font-family": "arial",
    });
    itemCard.innerHTML = `<img src=${food.imgUrl} alt="fastFood" style="width:100%">
    <h1>${food.name}</h1>
    <p>${food.price}</p>
    <p>${food.description}</p>`


    let btnAddCart = document.createElement("button");
    // console.log(btnAddToCart)
    btnAddCart.textContent = "Thêm";
    btnAddCart.onclick = function () {
        btnAddToCart(food);
    }
    itemCard.appendChild(btnAddCart);


    return itemCard;
}

let newHeadera = header1();
let newLinea = lineA();
let newHeaderb = header2();
let newLineb = lineB();

let newListcardFooda = listCardfooda();
let newListcardFoodb = listCardfoodb();
let newListcardFoodc = listCardfoodc();

let newTitllea = titlleA()
let newTitlleb = titlleB()
let newTitllec = titlleC()

container.appendChild(newHeadera);
container.appendChild(newLinea);
container.appendChild(newHeaderb);
container.appendChild(newLineb);

function listCardfooda() {

    let listCardfood1 = document.createElement("div")
    listCardfood1.style.display = "flex";
    listCardfood1.style.flexWrap = "Wrap";

    return listCardfood1;
}


function listCardfoodb() {
    let listCardfood2 = document.createElement("div")
    listCardfood2.style.display = "flex";
    listCardfood2.style.flexWrap = "Wrap";

    return listCardfood2;
}

function listCardfoodc() {
    let listCardfood3 = document.createElement("div")
    listCardfood3.style.display = "flex";
    listCardfood3.style.flexWrap = "Wrap";

    return listCardfood3;
}

for (let i = 0; i < data.Food.length; i++) {
    let item = data.Food[i];
    let newFood = buildItemCrd(item);
    newListcardFooda.appendChild(newFood);
    // newListcardFooda.style.display = "inline-block";
    newListcardFooda.style.display = "flex";
    newListcardFooda.style.flexWrap = "Wrap";
    newListcardFooda.style.margin = "20px";


}

for (let i = 0; i < data.Combo1.length; i++) {
    let item2 = data.Combo1[i];
    let newFood2 = buildItemCrd(item2);
    newListcardFoodb.appendChild(newFood2);
    // newListcardFoodb.style.display = "inline-block";
    newListcardFoodb.style.display = "flex";
    newListcardFoodb.style.flexWrap = "Wrap";
    newListcardFoodb.style.margin = "20px";
}


for (let i = 0; i < data.Dessert.length; i++) {
    let item3 = data.Dessert[i];
    let newFood3 = buildItemCrd(item3);
    newListcardFoodc.appendChild(newFood3);
    // newListcardFoodc.style.display = "inline-block";
    newListcardFoodc.style.display = "flex";
    newListcardFoodc.style.flexWrap = "Wrap";
    newListcardFoodc.style.margin = "20px";
}

container.appendChild(newTitllea);
container.appendChild(newListcardFooda);
container.appendChild(newTitlleb);
container.appendChild(newListcardFoodb);
container.appendChild(newTitllec);
container.appendChild(newListcardFoodc);
// let listFoodofCart=[]



// /**
//  *
//  * @param {Food} food
//  */
// function addCart(food) {
//     if (listFoodofCart.length == 0) {
//         listFoodofCart.push({
//             "id": food.id,
//             "quantity": 1
//         })
//     }
// }


