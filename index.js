
let container = document.getElementById("container");
let body = document.body;
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.display = "contents";


function header1(){

    let header_b = document.createElement("div")
    header_b.style.display = "flex";

    let headLogo = document.createElement("img")
    headLogo.src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0";
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
    for (let i = 0; i < options.length; i++){
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
    languages.style.marginRight = "190pt";


    let headLogo2 = document.createElement("img")
    headLogo2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/OOjs_UI_icon_menu.svg/2048px-OOjs_UI_icon_menu.svg.png";
    headLogo2.style.height = "50px";
    headLogo2.style.marginTop = "30pt";

    

    header_b.appendChild(headLogo);
    header_b.appendChild(optionBox);
    header_b.appendChild(languages);
    header_b.appendChild(headLogo2);
    return header_b;
}

 
function lineA(){
    
    let line1 = document.createElement("div");
    line1.style.backgroundColor = "#202124";
    line1.style.width = "100%";
    line1.style.height = "1px";
    line1.style.marginBottom = "20px";
    return line1;
}

function header2(){

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
    for (let i = 0; i < options2.length; i++){
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
 
function lineB(){
    
    let line2 = document.createElement("div");
    line2.style.backgroundColor = "#202124";
    line2.style.width = "100%";
    line2.style.height = "1px";
    line2.style.marginBottom = "2%";
    return line2;
}

function tittleA(){
    let tittle1 = document.createElement("a")
    tittle1.text = "MÓN MỚI";
    tittle1.style.fontWeight = "bold";
    tittle1.style.fontSize = "20pt";
    tittle1.style.marginBottom = "10%";
    return tittle1;
}

function buildItemCrd(name, price, imgUrl, description){
    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "max-width": "300px",
        "margin": "auto",
        "text-align": "center",
        "font-family": "arial",
    });
    itemCard.innerHTML = `<img src=${imgUrl} alt="Denim Jeans" style="width:100%">
    <h1>${name}</h1>
    <p>${price}</p>
    <p>${description}</p>
    <p><button>Thêm</button></p>`
    
    return itemCard;
}



let foodItems1 = [
    {
        name: "1 GÀ CUỘN BẮC KINH",
        price: "39.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=LDqyE4",
        description: "01 Gà Cuộn Bắc Kinh"
    },
    {
        name: "2 GÀ CUỘN BẮC KINH",
        price: "74.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/2-Kwaffle.jpg?v=LDqyE4",
        description: "02 Gà Cuộn Bắc Kinh"
    },
    {
        name: "GÀ CUỘN BẮC KINH HD",
        price: "89.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Kwaffle-hd.jpg?v=LDqyE4",
        description: "01 Gà Cuộn Bắc Kinh + 01 miếng Gà rán (OR/ HS/ NSC) + 01 Khoai tây chiên (vừa) hoặc 01 Khoai tây nghiền (vừa) & 01 Bắp cải trộn (vừa)"
    },
    {
        name: "2 Bánh Khoai Tây Chiên",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/2-Hash-Browns.jpg?v=LDqyE4",
        description: "2 Bánh khoai tây chiên"
    },
    {
        name: "3 Bánh Khoai Tây Chiên",
        price: "25.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/3-Hash-Browns.jpg?v=LDqyE4",
        description: "3 Bánh khoai tây chiên"
    },
    {
        name: "4 Bánh Khoai Tây Chiên",
        price: "31.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/4-Hash-Browns.jpg?v=LDqyE4",
        description: "4 Bánh khoai tây chiên"
    },
    {
        name: "6 Bánh Khoai Tây Chiên",
        price: "46.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/6-Hash-Browns.jpg?v=LDqyE4",
        description: "6 Bánh khoai tây chiên"
    },
];

function tittleB(){
    let tittle2 = document.createElement("a")
    tittle2.text = "COMBO 1 NGƯỜI";
    tittle2.style.fontWeight = "bold";
    tittle2.style.fontSize = "20pt";
    tittle2.style.marginBottom = "10%";
    return tittle2;
}

let foodItems2 = [
    {
        name: "Combo Gà Rán",
        price: "87.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=LDqyE4",
        description: "2 Miếng Gà +1 Khoai tây chiên vừa / 2 Gà Miếng Nuggets + 1 Lipton vừa"
    },
    {
        name: "Combo Mì Ý",
        price: "87.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/D3-new.jpg?v=LDqyE4",
        description: "1 Mì Ý Xốt Cà Gà Viên + 1 Miếng Gà+ 1 Lon Pepsi Can"
    },
    {
        name: "Combo Salad Hạt",
        price: "78.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/D4-new.jpg?v=LDqyE4",
        description: "1 Miếng Gà + 1 Salad Hạt + 1 Lon Pepsi"
    },
    {
        name: "Combo Burger",
        price: "89.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/D5.jpg?v=LDqyE4",
        description: "1 Burger Zinger/Burger Gà Quay Flava/Burger Tôm + 1 Miếng Gà Rán + 1 Lon Pepsi"
    },
];

function tittleC(){
    let tittle3 = document.createElement("a")
    tittle3.text = "THỨC UỐNG & TRÁNG MIỆNG";
    tittle3.style.fontWeight = "bold";
    tittle3.style.fontSize = "20pt";
    tittle3.style.marginBottom = "10%";
    return tittle3;
}

let foodItems3 = [
    {
        name: "1 BÁNH TRỨNG",
        price: "18.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/1-eggtart.jpg?v=LDqyE4",
        description: "1 Bánh Trứng"
    },
    {
        name: "4 BÁNH TRỨNG",
        price: "58.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/4-eggtart.jpg?v=LDqyE4",
        description: "4 Bánh Trứng"
    },
    {
        name: "2 VIÊN KHOAI MÔN KIM SA",
        price: "26.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/2-taro.jpg?v=LDqyE4",
        description: "2 Viên Khoai Môn Kim Sa"
    },
    {
        name: "3 VIÊN KHOAI MÔN KIM SA",
        price: "34.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/3-taro.jpg?v=LDqyE4",
        description: "3 Viên Khoai Môn Kim Sa"
    },
    {
        name: "5 VIÊN KHOAI MÔN KIM SA",
        price: "54.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/5-taro.jpg?v=LDqyE4",
        description: "5 Viên Khoai Môn Kim Sa"
    },
    {
        name: "2 THANH BÍ PHÔ MAI",
        price: "28.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/2-Pumcheese.jpg?v=LDqyE4",
        description: "2 Thanh Bí Phô Mai"
    },
    {
        name: "3 THANH BÍ PHÔ MAI",
        price: "38.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/3-Pumcheese.jpg?v=LDqyE4",
        description: "3 Thanh Bí Phô Mai"
    },
    {
        name: "5 THANH BÍ PHÔ MAI",
        price: "58.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/5-Pumcheese.jpg?v=LDqyE4",
        description: "5 Thanh Bí Phô Mai"
    },
    {
        name: "Pepsi Lon",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Pepsi-Can.jpg?v=LDqyE4",
        description: "Pepsi Lon"
    },
    {
        name: "7Up Lon",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/7Up-Can.jpg?v=LDqyE4",
        description: "7Up Lon"
    },
    {
        name: "Aquafina 500ml",
        price: "15.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Aquafina-500ml.jpg?v=LDqyE4",
        description: "Aquafina 500ml"
    },
    {
        name: "Trà Đào",
        price: "24.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Peach-Tea.jpg?v=LDqyE4",
        description: "Trà Đào"
    },
    {
        name: "Pepsi Black Lime Lon",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/pepsi-lime-can.jpg?v=LDqyE4",
        description: "Pepsi Black Lime Lon"
    },
    {
        name: "Milo Hộp",
        price: "20.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/milo-box-hd.jpg?v=LDqyE4",
        description: "Milo Hộp"
    },
    {
        name: "Mirinda Cam Lon",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Mirinda-Orange-Can.jpg?v=LDqyE4",
        description: "Mirinda Cam Lon"
    },
    {
        name: "Trà Chanh Lipton (Lớn)",
        price: "17.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Lipton.jpg?v=LDqyE4",
        description: "Trà Chanh Lipton (Lớn)"
    },
    {
        name: "Trà Chanh Lipton (Vừa)",
        price: "10.000₫",
        imgUrl: "https://static.kfcvietnam.com.vn/images/items/lg/Lipton.jpg?v=LDqyE4",
        description: "Trà Chanh Lipton (Vừa)"
    },
];

let newHeadera = header1();
let newLinea = lineA();
let newHeaderb = header2();
let newLineb = lineB();
let newTittlea = tittleA()
let newTittleb = tittleB()
let newTittlec = tittleC()
container.appendChild(newHeadera);
container.appendChild(newLinea);
container.appendChild(newHeaderb);
container.appendChild(newLineb);
container.appendChild(newTittlea);

let listCardFood = document.createElement("div")
listCardFood.style.display = "flex";
listCardFood.style.flexWrap = "Wrap";



foodItems1.forEach(item => {
    let card = buildItemCrd(item.name, item.price, item.imgUrl, item.description);
    // card.style.display = "grid";
    // card.style.gridGap = "1rem";
    // card.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    listCardFood.appendChild(card);
});
container.appendChild(listCardFood);
foodItems2.forEach(item => {
    let card = buildItemCrd(item.name, item.price, item.imgUrl, item.description);
    // card.style.display = "grid";
    // card.style.gridGap = "1rem";
    // card.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    listCardFood.appendChild(card);
});
container.appendChild(newTittlec);
foodItems3.forEach(item => {
    let card = buildItemCrd(item.name, item.price, item.imgUrl, item.description);
    // card.style.display = "grid";
    // card.style.gridGap = "1rem";
    // card.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    listCardFood.appendChild(card);
});