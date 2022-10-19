

let stock = new Array()
stock = [
    {   sr : 1,
        name: "Samsung Galaxy S22 Ultra",
        price: 500,
        codeName: "s22",
        descp: "The smoothest in the Galaxy. Galaxy S22 Ultra's Pro-grade Camera corrects shake at a 58% wider angle and delivers fast motion sampling to detect movements quickly and precisely, for steady-state clarity in each frame.Super HDR adjusts your shots for epic details and hues displaying 64x more color even in tricky shadows or back-lit shots.",
        serialNumber: 234,
        buy: "https://www.samsung.com/in/smartphones/galaxy-s22-ultra/buy/"
        
    },
    {   sr : 2,
        name: "Google Pixel 6 Pro",
        price: 500,
        codeName: "6pro",
        descp: "Google Pixel 6 Pro, enables seamless multitasking and prolonged operations on the go. The device also promises detailed images and flawless visuals for you to amp up your selfie game. It further gets IP68 water-resistant and dustproof ratings for extra safety.",
        serialNumber: 234,
        buy: "https://www.amazon.in/Google-Pixel-Sorta-Sunny-Storage/dp/B09HZ939TR/ref=sr_1_7?adgrpid=1214960841653447&hvadid=75935183776244&hvbmt=bb&hvdev=c&hvlocphy=155464&hvnetw=o&hvqmt=b&hvtargid=kwd-75935415328384%3Aloc-90&keywords=pixel%2B6%2B128gb%2Bprice&qid=1666180509&qu=eyJxc2MiOiIzLjAwIiwicXNhIjoiMi4xNiIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-7&th=1"
        
    },
    {   sr : 3,
        name: "Apple iPhone 14 Pro Max",
        price: 500,
        codeName: "14pro",
        descp:"The iPhone 14 Pro Max is the best of the bunch, conquering basic and advanced features alike, earning the phone our Editors' Choice award.",
        serialNumber: 234,
        buy: "https://www.apple.com/in/shop/buy-iphone/iphone-14-pro"
        
    },
    {   sr : 4,
        name: "OnePlus 10 Pro",
        price: 500,
        codeName: "oneplus10pro",
        descp: "OnePlus 10 Pro is yet another premium flagship offering from the brand. The smartphone promises seamless visuals and detailed portraits. It continues the OnePlus legacy with a powerful processor configuration backed by a massive 8GB RAM. Moreover, a 5000mAh battery with 80W Super VOOC Charging capability ensures prolonged usage.", 
        serialNumber: 234,
        buy: "https://www.oneplus.in/oneplus-10-pro"
        
    },
    {   sr : 5,
        name: "Asus Zenfone 9",
        price: 500,
        codeName: "zenfone9",
        descp: "Asus Zenfone 9 promises quick and seamless functioning, thanks to its robust chipset from the Qualcomm Snapdragon family backed by an 8GB RAM and an Octa-core CPU. Topping it all is a Fast Charging enabled Li-Polymer battery. However, as per as the price is concerned Asus provides only Dual cameras on the backside.",
        serialNumber: 234,
        buy: "https://www.amazon.com/ASUS-ZenFone-2400x1080-Unlocked-AI2202-8G128G-BK/dp/B0BBPJ6TNC"
        
    },
    {   sr : 6,
        name: "Xiaomi 12 Pro",
        price: 500,
        codeName: "mi12pro",
        descp: `The Pro version of Xiaomi Mi 12, assures a promising user experience in the long run. Its high-ended features, like an 8GB RAM, Triple cameras on the backside and 4600mAh quick charging enabled battery are quite an impressive deal. Out of all, the most promising part is the 120W Hyper Charging compatibility, which makes the smartphone completely ready for the day in just 18minutes. `,
        serialNumber: 234,
        buy: "https://www.mi.com/in/buy/product/xiaomi-12-pro-5g"
        
    },
    {   sr : 7,
        name: "Asus Rog Phone 6 Pro",
        price: 500,
        codeName: "rog6pro",
        descp: `The ROG Phone 6 Pro is the latest incarnation of world-beating gaming phone. It harnesses the brute gaming power of the latest Qualcomm® Snapdragon® 8+ Gen 1 Mobile Platform, with a new class leading GameCool 6 thermal system that lets you smash every barrier and break every limit, and a 165 Hz display for a revolutionary visual experience.`,
        serialNumber: 234,
        buy: "https://rog.asus.com/in/phones/rog-phone-6-pro-model/"
        
    },
    {   sr : 8,
        name: "Nothing Phone 1",
        price: 500,
        codeName: "nothingphone1",
        descp: "Nothing Phone 1 is all set to raise the bar with its robust class of configurations. It will enable users to play games, perform multitasking and capture beautiful shots in variable lighting conditions. Moreover, its other features like an OLED display, vast internal space and a fingerprint sensor make this smartphone even more practical for users.",
        serialNumber: 234,
        buy: "https://www.flipkart.com/nothing-phone-1-5g-black-128-gb/p/itmf1b0b0b5decdc?pid=MOBGCYGPFEGDMYQR&cmpid=product.share.pp&_refId=PP.0dc7590a-9d0a-4c49-9bc3-cd975d33bb55.MOBGCYGPFEGDMYQR&_appId=CL"
        
    }
   
];
localStorage.setItem("stock1", JSON.stringify(stock));

let stock2 = JSON.parse(localStorage.getItem("stock1")) || [];

// let newItem = {
//     sr : 11,
//         name: "Oppo1",
//         price: 700,
//         codeName: "s22",
//         serialNumber: 456

// }
// stock2.push(newItem);
// let newItem1 = {
//     sr : 12,
//         name: "Oppo2",
//         price: 700,
//         codeName: "s22",
//         serialNumber: 456

// }
// stock2.push(newItem1);
localStorage.setItem("stock2", JSON.stringify(stock2));

let stock3 = JSON.parse(localStorage.getItem("stock2")) || [];
if(stock3.length == 0){

}else{
stock3.forEach(type)

    function type(stck){
        // alert(stck.sr)
    const node = document.createElement("div");
    node.classList.add("card");
    node.id = `card${stck.sr}`;


    const img = document.createElement("div");
    img.classList.add("card-img");

    // const imgImg = document.createElement('img');
    // imgImg.src = `./Images/${stck.codeName}.jfif`;
    img.innerHTML= `<img src='./Images/${stck.codeName}.jfif' alt="">`;
    // img.appendChild(imgImg);

    const descp = document.createElement("div");
    descp.classList.add("card-descp");
    descp.innerHTML=`<a href=""><h2>${stck.name}</h2></a> 
    <p class="price">$${stck.price}</p>
    <p class="descp">${stck.descp}</p>`;


    const readMore = document.createElement("div");
    readMore.classList.add("read-more");
    readMore.innerHTML=`<a href="products.html#card${stck.sr}"><button class="btn1">Read More.</button></a>`;


    node.appendChild(img);
    node.appendChild(descp);
    node.appendChild(readMore);

    document.getElementById("new").appendChild(node); 
    
// node.innerHTML = `

//     <div class="card-img" >
//         <img src="./Images/s22.jfif" alt="">
//     </div>
//     <div class="card-descp">
//         <a href=""><h2>${stck.name}</h2></a> 
//         <p class="price">$400</p>
//         <p class="descp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur reiciendis dolor saepe, porro fugiat alias ipsa suscipit. Officia, magnam. </p>
//     </div>
//     <div class="read-more">
//         <button class="btn1"><a href="">Read More.</a></button>
//     </div>
// `;

// const textnode = document.createTextNode(`${stck.name}`);
// node.appendChild(textnode); 
// document.getElementById("new").appendChild(node);  
// const para = document.getElementsById('new');
// para.innterHTML =`<h1>${stck.name}</h1>`

};
}


// document.getElementById('card1').addEventListener('click', function(e){
//     setTimeout(2000)
//     show();



//     e.preventDefault()
// })      

// document.getElementById('cross').addEventListener('click', function(e){
//     document.getElementById('smartphone').style.display = 'none'



//     e.preventDefault()
// });
// function show(){
//     document.getElementById('smartphone').style.display = 'block'
// }

