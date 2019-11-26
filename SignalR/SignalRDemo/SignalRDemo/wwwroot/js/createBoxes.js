export function createBoxes(boxCount) {
    const urls = {
        0: "/images/royalmailboxSm.jpg",
        1: "/images/royalmailboxSm.jpg",
        2: "/images/royalmailboxSm.jpg",
        3: "/images/KFCchickenSm.jpg",
    };
    console.log("Hello from CreateBOX")
    let parentEl = document.getElementById("box-container");
    let size = parseInt(boxCount);
    console.log(size);

    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }

    for (let i = 0; i < size; i++) {
        let imgBoxElem = document.createElement("img");
        imgBoxElem.src = urls[i % 4];
        imgBoxElem.classList.add("w3-circle");
        imgBoxElem.alt = "Box";
        parentEl.appendChild(imgBoxElem);
    }


}