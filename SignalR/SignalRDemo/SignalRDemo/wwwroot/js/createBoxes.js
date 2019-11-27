export async function createBoxes(boxCount) {
    const urls = {
        0: "/images/royalmailboxSm.jpg",
        1: "/images/royalmailboxSm.jpg",
        2: "/images/royalmailboxSm.jpg",
        3: "/images/KFCchickenSm.jpg",
    };
    console.log("Hello from CreateBOX")
    let parentEl = document.getElementById("box-container");
    let size = parseInt(boxCount);

    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
//<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    
    for (let i = 0; i < size; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.setAttribute("data-toggle", "modal");
        btn.setAttribute("data-target", "#exampleModal");
        let imgBoxElem = document.createElement("img");
        imgBoxElem.src = urls[i % 4];
        imgBoxElem.classList.add("w3-circle");
        imgBoxElem.alt = "Box";
        btn.appendChild(imgBoxElem);
        parentEl.appendChild(btn);
    }
}
