

let stock = new Array()
stock = [
    {   sr : 1,
        name: "Samsung Galaxy S22 Ultra",
        price: 100999,
        codeName: "s22",
        descp: "The smoothest in the Galaxy. Galaxy S22 Ultra's Pro-grade Camera corrects shake at a 58% wider angle and delivers fast motion sampling to detect movements quickly and precisely, for steady-state clarity in each frame.Super HDR adjusts your shots for epic details and hues displaying 64x more color even in tricky shadows or back-lit shots.",
        serialNumber: 234,
        buy: "https://www.samsung.com/in/smartphones/galaxy-s22-ultra/buy/",
        dimensions: "163.3 x 77.9 x 8.9 mm (6.43 x 3.07 x 0.35 in)",
        weight:"228 g / 229 g (mmWave) (8.04 oz)",
        build: "Glass front (Gorilla Glass Victus+), glass back (Gorilla Glass Victus+), aluminum framed",
        displayType: "Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)",
        screenSize : "6.8 inches, 114.7 cm2 (~90.2% screen-to-body ratio)" ,
        resolution: "1440 x 3088 pixels (~500 ppi density)",
        protection : "Corning Gorilla Glass Victus+",
        os: "Android 12, One UI 4.1",
        Chipset: "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
        mainCameras: `108 MP, f/1.8, 23mm (wide), 1/1.33", 0.8µm, PDAF, Laser AF, OIS<br>
        10 MP, f/4.9, 230mm (periscope telephoto), 1/3.52", 1.12µm, dual pixel PDAF, OIS, 10x optical zoom<br>
        10 MP, f/2.4, 70mm (telephoto), 1/3.52", 1.12µm, dual pixel PDAF, OIS, 3x optical zoom<br>
        12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF, Super Steady video`,
        selfieCamera: `40 MP, f/2.2, 26mm (wide), 1/2.82", 0.7µm, PDAF`,
        battery : `Li-Ion 5000 mAh, non-removable`,
    },
    {   sr : 2,
        name: "Google Pixel 6 Pro",
        price: 59800,
        codeName: "6pro",
        descp: "Google Pixel 6 Pro, enables seamless multitasking and prolonged operations on the go. The device also promises detailed images and flawless visuals for you to amp up your selfie game. It further gets IP68 water-resistant and dustproof ratings for extra safety.",
        serialNumber: 234,
        buy: "https://www.amazon.in/Google-Pixel-Sorta-Sunny-Storage/dp/B09HZ939TR/ref=sr_1_7?adgrpid=1214960841653447&hvadid=75935183776244&hvbmt=bb&hvdev=c&hvlocphy=155464&hvnetw=o&hvqmt=b&hvtargid=kwd-75935415328384%3Aloc-90&keywords=pixel%2B6%2B128gb%2Bprice&qid=1666180509&qu=eyJxc2MiOiIzLjAwIiwicXNhIjoiMi4xNiIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-7&th=1",
        dimensions: "1163.9 x 75.9 x 8.9 mm (6.45 x 2.99 x 0.35 in)",
        weight:"210 g (7.41 oz)",
        build: "Glass front (Gorilla Glass Victus), glass back (Gorilla Glass Victus), aluminum frame",
        displayType: "LTPO AMOLED, 120Hz, HDR10+",
        screenSize : "6.7 inches, 110.6 cm2 (~88.9% screen-to-body ratio)" ,
        resolution: "1440 x 3120 pixels, 19.5:9 ratio (~512 ppi density)",
        protection : "Corning Gorilla Glass Victus",
        os: "Android 12, upgradable to Android 13",
        Chipset: "Google Tensor (5 nm)",
        mainCameras: `50 MP, f/1.9, 25mm (wide), 1/1.31", 1.2µm, Dual Pixel PDAF, Laser AF, OIS<br>
        48 MP, f/3.5, 104mm (telephoto), 1/2", 0.8µm, PDAF, OIS, 4x optical zoom<br>
        12 MP, f/2.2, 17mm, 114˚ (ultrawide), 1.25µm`,
        selfieCamera: `1.1 MP, f/2.2, 20mm (ultrawide), 1.22µm`,
        battery : `Li-Ion 5003 mAh, non-removable`,
        
    },
    {   sr : 3,
        name: "Apple iPhone 14 Pro Max",
        price: 129900,
        codeName: "14pro",
        descp:"The iPhone 14 Pro Max is the best of the bunch, conquering basic and advanced features alike, earning the phone our Editors' Choice award.",
        serialNumber: 234,
        buy: "https://www.apple.com/in/shop/buy-iphone/iphone-14-pro",
        dimensions: "160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)",
        weight:"240 g (8.47 oz)",
        build: "Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame",
        displayType: "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        screenSize : "6LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)" ,
        resolution: "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)",
        protection : "Ceramic Shield glass",
        os: "iOS 16, upgradable to iOS 16.0.3",
        Chipset: "Apple A16 Bionic (4 nm)",
        mainCameras: `48 MP, f/1.8, 24mm (wide), 1/1.28", 1.22µm, dual pixel PDAF, sensor-shift OIS<br>
        12 MP, f/2.8, 77mm (telephoto), 1/3.5", PDAF, OIS, 3x optical zoom<br>
        12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55", 1.4µm, dual pixel PDAF<br>
        TOF 3D LiDAR scanner (depth)`,
        selfieCamera: `12 MP, f/1.9, 23mm (wide), 1/3.6", PDAF, OIS (unconfirmed)<br>
        SL 3D, (depth/biometrics sensor)`,
        battery : `Li-Ion 4323 mAh, non-removable (16.68 Wh)`,
    },
    {   sr : 4,
        name: "OnePlus 10 Pro",
        price: 61999,
        codeName: "oneplus10pro",
        descp: "OnePlus 10 Pro is yet another premium flagship offering from the brand. The smartphone promises seamless visuals and detailed portraits. It continues the OnePlus legacy with a powerful processor configuration backed by a massive 8GB RAM. Moreover, a 5000mAh battery with 80W Super VOOC Charging capability ensures prolonged usage.", 
        serialNumber: 234,
        buy: "https://www.oneplus.in/oneplus-10-pro",
        dimensions: "163 x 73.9 x 8.6 mm (6.42 x 2.91 x 0.34 in)",
        weight:"201 g (7.09 oz)",
        build: "Glass front (Gorilla Glass Victus), glass back (Gorilla Glass 5), aluminum frame",
        displayType: "LTPO2 Fluid AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 800 nits (HBM), 1300 nits (peak)",
        screenSize : "LTPO2 Fluid AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 800 nits (HBM), 1300 nits (peak)" ,
        resolution: "1440 x 3216 pixels, 20:9 ratio (~525 ppi density)",
        protection : "Corning Gorilla Glass Victus",
        os: "Android 12, OxygenOS 12.1 (International), ColorOS 12.1 (China)",
        Chipset: "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
        mainCameras: `48 MP, f/1.8, 23mm (wide), 1/1.43", 1.12µm, multi-directional PDAF, Laser AF, OIS<br>
        8 MP, f/2.4, 77mm (telephoto), 1.0µm, PDAF, OIS, 3.3x optical zoom<br>
        50 MP, f/2.2, 14mm, 150˚ (ultrawide), 1/2.76", 0.64µmo`,
        selfieCamera: `32 MP, f/2.2, (wide), 1/2.74", 0.8µm`,
        battery : `Li-Po 5000 mAh, non-removable`,
    },
    {   sr : 5,
        name: "Asus Zenfone 9",
        price: 64990,
        codeName: "zenfone9",
        descp: "Asus Zenfone 9 promises quick and seamless functioning, thanks to its robust chipset from the Qualcomm Snapdragon family backed by an 8GB RAM and an Octa-core CPU. Topping it all is a Fast Charging enabled Li-Polymer battery. However, as per as the price is concerned Asus provides only Dual cameras on the backside.",
        serialNumber: 234,
        buy: "https://www.amazon.com/ASUS-ZenFone-2400x1080-Unlocked-AI2202-8G128G-BK/dp/B0BBPJ6TNC",
        dimensions: "146.5 x 68.1 x 9.1 mm (5.77 x 2.68 x 0.36 in)",
        weight:"169 g (5.96 oz)",
        build: "Glass front (Gorilla Glass Victus), plastic back, aluminum frame",
        displayType: "Super AMOLED, 120Hz, HDR10+, 1100 nits (peak)",
        screenSize : "5.9 inches, 84.4 cm2 (~84.6% screen-to-body ratio)" ,
        resolution: "1080 x 2400 pixels, 20:9 ratio (~445 ppi density)",
        protection : "Corning Gorilla Glass Victus",
        os: "Android 12, ZenUI",
        Chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
        mainCameras: `50 MP, f/1.9, 23.8mm (wide), 1/1.56", 1.0µm, PDAF, gimbal OIS<br>
        12 MP, f/2.2, 14.4mm, 113° (ultrawide), 1/2.93", 1.4µm, AF`,
        selfieCamera: `12 MP, f/2.5, 27.5mm (standard), 1/2.93", 1.22µm, dual pixel PDAF`,
        battery : `Li-Po 4300 mAh, non-removable`,
    },
    {   sr : 6,
        name: "Xiaomi 12 Pro",
        price: 58999,
        codeName: "mi12pro",
        descp: `The Pro version of Xiaomi Mi 12, assures a promising user experience in the long run. Its high-ended features, like an 8GB RAM, Triple cameras on the backside and 4600mAh quick charging enabled battery are quite an impressive deal. Out of all, the most promising part is the 120W Hyper Charging compatibility, which makes the smartphone completely ready for the day in just 18minutes. `,
        serialNumber: 234,
        buy: "https://www.mi.com/in/buy/product/xiaomi-12-pro-5g",
        dimensions: "163.6 x 74.6 x 8.2 mm (6.44 x 2.94 x 0.32 in)",
        weight:"204 g or 205 g (7.20 oz)",
        build: "Glass front (Gorilla Glass Victus), glass back, aluminum frame",
        displayType: "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 1000 nits (HBM), 1500 nits (peak)",
        screenSize : "6.73 inches, 109.4 cm2 (~89.6% screen-to-body ratio)" ,
        resolution: "1440 x 3200 pixels, 20:9 ratio (~521 ppi density)",
        protection : "Corning Gorilla Glass Victus",
        os: "Android 12, MIUI 13",
        Chipset: "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
        mainCameras: `50 MP, f/1.9, 24mm (wide), 1/1.28", 1.22µm, Dual Pixel PDAF, OIS<br>
        50 MP, f/1.9, 48mm (telephoto), PDAF, 2x optical zoom<br>
        50 MP, f/2.2, 115˚ (ultrawide)`,
        selfieCamera: `32 MP, f/2.5, 26mm (wide), 0.7µm`,
        battery : `Li-Po 4600 mAh, non-removable`,
    },
    {   sr : 7,
        name: "Asus Rog Phone 6 Pro",
        price: 89999,
        codeName: "rog6pro",
        descp: `The ROG Phone 6 Pro is the latest incarnation of world-beating gaming phone. It harnesses the brute gaming power of the latest Qualcomm® Snapdragon® 8+ Gen 1 Mobile Platform, with a new class leading GameCool 6 thermal system that lets you smash every barrier and break every limit, and a 165 Hz display for a revolutionary visual experience.`,
        serialNumber: 234,
        buy: "https://rog.asus.com/in/phones/rog-phone-6-pro-model/",
        dimensions: "173 x 77 x 10.3 mm (6.81 x 3.03 x 0.41 in)",
        weight:"239 g (8.43 oz)",
        build: `Glass front (Gorilla Glass Victus), glass back (Gorilla Glass 3), aluminum frame<br>
        2" OLED display (on the back)<br>
        Pressure sensitive zones (Gaming triggers)`,
        displayType: "AMOLED, 1B colors, 165Hz, HDR10+, 800 nits (typ), 1200 nits (peak)",
        screenSize : "6.78 inches, 109.5 cm2 (~82.2% screen-to-body ratio)" ,
        resolution: "6.78 inches, 109.5 cm2 (~82.2% screen-to-body ratio)",
        protection : "Corning Gorilla Glass Victus",
        os: "Android 12",
        Chipset: "Corning Gorilla Glass Victus",
        mainCameras: `50 MP, f/1.9, (wide), 1/1.56", 1.0µm, PDAF<br>
        13 MP, f/2.2, (ultrawide)<br>
        5 MP, (macro)`,
        selfieCamera: `12 MP, 28mm (wide)`,
        battery : `Li-Po 6000 mAh, non-removable`,
    },
    {   sr : 8,
        name: "Nothing Phone 1",
        price: 29999,
        codeName: "nothingphone1",
        descp: "Nothing Phone 1 is all set to raise the bar with its robust class of configurations. It will enable users to play games, perform multitasking and capture beautiful shots in variable lighting conditions. Moreover, its other features like an OLED display, vast internal space and a fingerprint sensor make this smartphone even more practical for users.",
        serialNumber: 234,
        buy: "https://www.flipkart.com/nothing-phone-1-5g-black-128-gb/p/itmf1b0b0b5decdc?pid=MOBGCYGPFEGDMYQR&cmpid=product.share.pp&_refId=PP.0dc7590a-9d0a-4c49-9bc3-cd975d33bb55.MOBGCYGPFEGDMYQR&_appId=CL",
        dimensions: "159.2 x 75.8 x 8.3 mm (6.27 x 2.98 x 0.33 in)",
        weight:"193.5 g (6.84 oz)",
        build: `Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), aluminum frame<br>
        Multiple LED lights on the back (notifications, charging progress, camera fill light)<br>
        Blinking red light on the back (video recording indicator)`,
        displayType: "OLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 700 nits (peak)",
        screenSize : "6.55 inches, 103.6 cm2 (~85.8% screen-to-body ratio)" ,
        resolution: "1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
        protection : "Corning Gorilla Glass 5",
        os: "Android 12, Nothing OS 1.1.4",
        Chipset: "Qualcomm SM7325-AE Snapdragon 778G+ 5G (6 nm)",
        mainCameras: `50 MP, f/1.9, 24mm (wide), 1/1.56", 1.0µm, PDAF, OIS<br>
        50 MP, f/2.2, 114˚ (ultrawide), 1/2.76", 0.64µm, AF`,
        selfieCamera: `16 MP, f/2.5, (wide), 1/3.1", 1.0µm`,
        battery : `Li-Ion 4500 mAh, non-removable (17.42 Wh)`,
    },
    
   
   
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
    <p class="price">₹${stck.price}</p>
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

