let stock3 = JSON.parse(localStorage.getItem("stock2")) || [];
if(stock3.length == 0){

}else{
stock3.forEach(products)

    function products(stck){
        // alert(stck.sr)
    const node1 = document.createElement("div");
    node1.classList.add("light", "column");
    node1.id = `cardss${stck.sr}`;
    const node = document.createElement("div");
    node.classList.add("light", "product");
    node.id = `card${stck.sr}`;


    const img = document.createElement("div");
    img.classList.add("col1", "prod-img");
    img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;


    const descp = document.createElement("div");
    descp.classList.add("col3", "prod-descp");descp.classList.add("col3", "prod-descp");
    descp.innerHTML=`<h2 id="prod-name">${stck.name}</h2>
    <p class="price">₹${stck.price}</p>
    <p id="prod-descp">${stck.descp}</p>
    <br>
    <p class="specs" id="specs${stck.sr}">Show Specifications<p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<button class="btn1" id=${stck.sr}><a href="">Add To Cart</a></button>
    <a href="buy.html" id="buy${stck.sr}"><button class="btn1" >Buy Now</button></a>`;

    const table = document.createElement("div");
    table.classList.add("col");
    table.id = `table${stck.sr}`;
    table.innerHTML = `<table>
    <colgroup>
        <col span="1" style="background-color: #666 ">
        <col span="1" style="background-color: #eee" >
    </colgroup>
    
    <tr>
    <th>Dimensions</th>
    <td>${stck.dimensions}</td>
    </tr>
    <tr>
    <th>Weight	</th>
    <td>${stck.weight}</td>
    </tr>
    <tr>
    <th>Build	</th>
    <td>${stck.build}</td>
    </tr>
    <tr>
    <th>Display Type</th>
    <td>${stck.displayType}</td>
    </tr>
    <tr>
    <th>Screen Size</th>
    <td>${stck.screenSize}</td>
    </tr>
    <th>Resolution</th>
    <td>${stck.resolution}</td>
    </tr>
    <tr>
    <th>Protection</th>
    <td>${stck.protection}</td>
    </tr>
    <tr>
    <th>OS</th>
    <td>${stck.os}</td>
    </tr>
    <tr>
    <th>Chipset</th>
    <td>${stck.Chipset}</td>
    </tr>
    <tr>
    <th>Main Cameras</th>
    <td>${stck.mainCameras}</td>
    </tr>
    <tr>
    <th>Selfie Camera</th>
    <td>${stck.selfieCamera}</td>
    </tr>
    <tr>
    <th>Battery</th>
    <td>${stck.battery}</td>
    </tr>
    </table>
    <p class="specs hide" id="hide${stck.sr}">Hide Specs</p>`



    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);
    node1.appendChild(node);
    node1.appendChild(table);

    document.getElementById("smartphone").appendChild(node1); 
    


};
}



let cart2= new Array();
stock3.forEach(function(stck){
document.getElementById(`${stck.sr}`).addEventListener('mousedown', function(e){
    
    document.getElementById(`${stck.sr}`).innerHTML = 'Added to cart'
    
    let cartarr = 
        {
            sr : `${stck.sr}`,
            name: `${stck.name}`,
            price:  `${stck.price}`,
            codeName: `${stck.codeName}`,
            descp: `${stck.descp}`,
            serialNumber: `${stck.serialNumber}`,
            buy: `${stck.buy}`
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
    c.innerHTML = `<a href="cart.html">Cart <sup class="super">(${cart3.length})</sup></a>`;
    var hover = document.getElementById("hover");
    hover.style.display = "block";

    
    
})
stock3.forEach(function(stck){
    document.getElementById(`specs${stck.sr}`).addEventListener('click', function(e){
        document.getElementById(`specs${stck.sr}`).innerHTML = '';
        var show = document.getElementById(`table${stck.sr}`);
        console.log('Yo');
        show.style.display = "block";

        e.preventDefault()
    })
});
stock3.forEach(function(stck){
    document.getElementById(`hide${stck.sr}`).addEventListener('click', function(e){
        document.getElementById(`specs${stck.sr}`).innerHTML = 'Show Specifications';
        var show = document.getElementById(`table${stck.sr}`);
        show.style.display = "none";

        e.preventDefault()
    })
});


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
                serialNumber: `${stck.serialNumber}`,
                buy: `${stck.buy}`
                
            }
        
        
        buy.push(buyarr);
        console.log(buy);
        localStorage.setItem("buy1", JSON.stringify(buy));
        
    })
});
console.log(cart2);


