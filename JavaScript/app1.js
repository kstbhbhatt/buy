let stock3 = JSON.parse(localStorage.getItem("stock2")) || [];
if(stock3.length == 0){

}else{
stock3.forEach(products)

    function products(stck){
        // alert(stck.sr)
    const node = document.createElement("div");
    node.classList.add("light", "product");
    node.id = `card${stck.sr}`;


    const img = document.createElement("div");
    img.classList.add("col1", "prod-img");

    // const imgImg = document.createElement('img');
    // imgImg.src = `./Images/${stck.codeName}.jfif`;
    img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;
    // img.appendChild(imgImg);

    const descp = document.createElement("div");
    descp.classList.add("col3", "prod-descp");
    descp.innerHTML=`<h2 id="prod-name">${stck.name}</h2>
    <p class="price">$${stck.price}</p>
    <p id="prod-descp">${stck.descp}</p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<button class="btn1" id=${stck.sr}><a href="">Add To Cart</a></button>
    <a href="buy.html" id="buy${stck.sr}"><button class="btn1" >Buy Now</button></a>`;


    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);

    document.getElementById("smartphone").appendChild(node); 
    


};
}
let cart2= new Array();
stock3.forEach(function(stck){
document.getElementById(`${stck.sr}`).addEventListener('mousedown', function(e){
    // alert(`${stck.sr}`);
    document.getElementById(`${stck.sr}`).innerHTML = 'Added to cart'
    
    let cartarr = 
        {
            sr : `${stck.sr}`,
            name: `${stck.name}`,
            price:  `${stck.price}`,
            codeName: `${stck.codeName}`,
            descp: `${stck.descp}`,
            serialNumber: `${stck.serialNumber}`
        }
    
    
    cart2.push(cartarr);
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
    let cart3 =removeDuplicateObjectFromArray(cart2, 'sr');
    console.log(cart3);
    // console.log(cart2);
    localStorage.setItem("cart1", JSON.stringify(cart3));

    var c = document.getElementById("cartz");
    c.innerHTML = `<a href="cart.html">Cart <sup>(${cart3.length})</sup></a>`;

    
    
})



});
let buy= new Array();
stock3.forEach(function(stck){
    document.getElementById(`buy${stck.sr}`).addEventListener('click', function(e){        
        let buyarr = 
            {
                sr : `${stck.sr}`,
                name: `${stck.name}`,
                price:  `${stck.price}`,
                codeName: `${stck.codeName}`,
                descp: `${stck.descp}`,
                serialNumber: `${stck.serialNumber}`
                
            }
        
        
        buy.push(buyarr);
        console.log(buy);
        localStorage.setItem("buy1", JSON.stringify(buy));
        
    })
});
console.log(cart2);


