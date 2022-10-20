let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];
function removeDuplicateObjectFromArray(array, key) {
    var check = {};
    var res = [];
    array.forEach(element => {
        if(!check[element[key]]) {
            check[element[key]] = true;
            res.push(element);
        }
    });
    return res;
}
let cart2 =removeDuplicateObjectFromArray(cart1, 'sr');
console.log(cart2);
if(cart2.length == 0){
    alert("Cart is Empty");
    window.location = "home.html";
}else{
cart2.forEach(product)

    function product(crt){
        // alert(crt.sr)
    const node = document.createElement("div");
    node.classList.add("light", "product");
    node.id = `card${crt.sr}`;


    const img = document.createElement("div");
    img.classList.add("col1", "prod-img");


    img.innerHTML= `<img src='./Images/${crt.codeName}.jfif' alt="">`;
    // img.appendChild(imgImg);

    const descp = document.createElement("div");
    descp.classList.add("col3", "prod-descp");
    descp.innerHTML=`<h2 id="prod-name">${crt.name}</h2>
    <p class="price">₹${crt.price}</p>
    <p id="prod-descp">${crt.descp}</p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<a href="" id=${crt.sr}><button class="btn1" >Remove from Cart</button></a>
    <a href="buy.html" id="buy${crt.sr}"><button class="btn1" >Buy Now</button></a>`;


    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);

    document.getElementById("smartphone").appendChild(node); 

    var c = document.getElementById("cartz");
    c.innerHTML = `<a href="cart.html">Cart <sup class="super">(${cart2.length})</sup></a>`;
    


};
}

let buy= new Array();
cart1.forEach(function(stck){
    document.getElementById(`buy${stck.sr}`).addEventListener('click', function(e){        
        let buyarr = 
            {
                sr : `${stck.sr}`,
                name: `${stck.name}`,
                price:  `${stck.price}`,
                codeName: `${stck.codeName}`,
                descp: `${stck.descp}`,
                serialNumber: `${stck.serialNumber}`,
                buy: `${stck.buy}`
                
            }
        
        
        buy.push(buyarr);
        console.log(buy);
        localStorage.setItem("buy1", JSON.stringify(buy));
        
    })
});

cart1.forEach(function(stck){
    document.getElementById(`${stck.sr}`).addEventListener('click', function(e){
       
        document.getElementById(`card${stck.sr}`).remove();
        const cart3 = cart1.filter(file => file.sr != `${stck.sr}`);
        // console.log(cart3) ;
        cart1 = cart3;
        localStorage.setItem("cart1", JSON.stringify(cart3));      
    })
});
var items = document.getElementById("buyy");
items.innerHTML = `<button class="btn2 ">Proceed to Buy (${cart1.length} items)</button>`
document.getElementById("buyy").addEventListener('mousedown', function(e){
    localStorage.setItem("buy1", JSON.stringify(cart1));
    // alert(cart1)
        
})