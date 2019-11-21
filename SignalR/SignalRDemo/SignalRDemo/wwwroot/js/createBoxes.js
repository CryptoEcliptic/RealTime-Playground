export function createBoxes() {
    const urls = {
        0 :"/images/royalmailboxSm.jpg",
        1 :"/images/royalmailboxSm.jpg",
        2 :"/images/royalmailboxSm.jpg",
        3 :"/images/KFCchickenSm.jpg",
    };
    //console.log("Hello from CreateBOX")
    let parentEl = document.getElementById("box-container");
    let childrenCount = parseInt(parentEl.children.length)
    let index = childrenCount % 4;
    console.log(index);
    if (childrenCount > 24) {
        while (parentEl.firstChild) {
            parentEl.removeChild(parentEl.firstChild);
        }
    } else {
        let imgBoxElem = document.createElement("img");
        imgBoxElem.src = urls[index];
        imgBoxElem.classList.add("w3-circle");
        imgBoxElem.alt = "Box";
        parentEl.appendChild(imgBoxElem);
    }
    
}