let searchss= new Array();
let stock4 = JSON.parse(localStorage.getItem("stock2")) || [];
    document.getElementById("search-button").addEventListener("mousedown", function(){
        search(searched)
       
    });




function search(callback){
    searchss.splice(0, searchss.length);
    stock4.forEach(search)
    function search(stck){
        var input = document.getElementById("search");

        // console.log(input.value);
        
        if(stck.name.toLowerCase().match(input.value.toLowerCase()) ){
            // console.log(stck.name);
            let searcher = 
            {
                sr : `${stck.sr}`,
                name: `${stck.name}`,
                price:  `${stck.price}`,
                codeName: `${stck.codeName}`,
                descp: `${stck.descp}`,
                serialNumber: `${stck.serialNumber}`,
                buy:  `${stck.buy}`
                
            }
            searchss.push(searcher);

            console.log(searchss);
            
            
        }
    };
    callback();
    return searchss
}





function searched(){
    
    let search3 = searchss
if(search3.length == 0){
    // alert();
}
else{
    
    var searchButton1 = document.getElementById("search-button");
    searchButton1.onmouseup = function() {
        var f = document.getElementById("new1");
    f.innerHTML='';
    var cross = document.getElementById("search-button");
    
    search3.forEach(productt)

    function productt(stck){
    const node = document.createElement("div");
    node.classList.add("light", "card");
    node.id = `card${stck.sr}`;


    const img = document.createElement("div");
    img.classList.add("card-img");
    img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;


    const descp = document.createElement("div");
    descp.classList.add("card-descp");
    descp.innerHTML=`<h2>${stck.name}</h2>
    <p class="price">$${stck.price}</p>
    <p class="descp">${stck.descp}</p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<a href="products.html#card${stck.sr}"><button class="btn1">Read More.</button></a>`;


    node.appendChild(img);
    node.appendChild(descp);
    descp.appendChild(readMore);
    var e = document.getElementById("new");
    e.innerHTML='';
    document.getElementById("new1").appendChild(node); 
    

        console.log(searchss)
        
       
    };
    // document.getElementById("search-button1").addEventListener("click", reload);
    //     function reload(){
    //         // alert("hi")
    //            window.location.reload();
    //        }
    }
    
    };

}













