// // let r = strArray.filter(word=> word.includes("Pleasei"));
// let stock4 = JSON.parse(localStorage.getItem("stock2")) || [];
// if(stock4.length == 0){

// }else{
// let searchss= new Array();
// stock4.forEach(search)
// function search(stck){
//     document.getElementById("search-button").addEventListener('mousedown',function(e){
//         // alert('hi')
//         var input = document.getElementById("search");
//         // console.log(input.value);
//         if(stck.name.match(input.value) ){
//             console.log(stck.name);
//             let searcher = 
//             {
//                 sr : `${stck.sr}`,
//                 name: `${stck.name}`,
//                 price:  `${stck.price}`,
//                 codeName: `${stck.codeName}`,
//                 descp: `${stck.descp}`,
//                 serialNumber: `${stck.serialNumber}`
                
//             }
        
        
//         searchss.push(searcher);
//         console.log(searchss);
//         localStorage.setItem("search", JSON.stringify(searchss));

//         }
     
//         // searchss = []
//     let searched = [];
//     // localStorage.setItem("search", JSON.stringify(searched));
//     // showSearch();
//         e.preventDefault();

    
//     })
    
    


// };
// }
// document.getElementById("search-button").addEventListener("mouseup",function(e){
//     showSearch();

//     e.preventDefault();
// })
// function showSearch(){
// let search3 = JSON.parse(localStorage.getItem("search")) || [];
// if(search3.length == 0){
//     return alert("no result");
// }else{

//     search3.forEach(productt)

//     function productt(stck){
//         // alert("hi")
//     const node = document.createElement("div");
//     node.classList.add("light", "product");
//     node.id = `cardz${stck.sr}`;


//     const img = document.createElement("div");
//     img.classList.add("col1", "prod-img");
//     img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;


//     const descp = document.createElement("div");
//     descp.classList.add("col3", "prod-descp");
//     descp.innerHTML=`<h2 id="prod-name">${stck.name}</h2>
//     <p class="price">$${stck.price}</p>
//     <p id="prod-descp">${stck.descp}</p>`;


//     const readMore = document.createElement("div");
//     readMore.classList.add("read-more");
//     readMore.innerHTML=`<button class="btn1" id=${stck.sr}><a href="">Add To Cart</a></button>
//     <a href="buy.html" id="buy${stck.sr}"><button class="btn1" >Buy Now</button></a>`;


//     node.appendChild(img);
//     node.appendChild(descp);
//     descp.appendChild(readMore);
//     var e = document.getElementById("new1");
//     e.innerHTML='';
//     document.getElementById("new1").appendChild(node); 
    

//         console.log(search3)
//     };
//     }
// };

let searchss= new Array();
let stock4 = JSON.parse(localStorage.getItem("stock2")) || [];
        // var searchButton = document.getElementById("search-button");
        // searchButton.onclick = function() {
    document.getElementById("search-button").addEventListener("mousedown", function(){
        search(searched)
       
        });

        // localStorage.setItem("search", JSON.stringify(searchss));
// console.log(searchss)

    
// let search3 = searchss;
// let search3 = JSON.parse(localStorage.getItem("search")) || [];

    // alert(searchss)
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
                serialNumber: `${stck.serialNumber}`
                
            }
            searchss.push(searcher);
            // alert('hi');
            console.log(searchss);
            
            
        }
    };
    // console.log(searchss);
    // return searchss

    // console.log(searchss);
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
    // cross.id ="search-button1"
    // cross.innerHTML=`<span class="material-symbols-outlined">
    // close
    // </span>`
    // alert('hi');
    search3.forEach(productt)

    function productt(stck){
        // alert("hi")
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













