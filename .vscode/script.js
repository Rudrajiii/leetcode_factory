const h1 = document.querySelector('h1');
const textContent = h1.textContent;
h1.innerHTML = "";

let makeArray = textContent.split("");

function fillUpColor(){
for (let i = 0; i < makeArray.length; i++) {
    const span = document.createElement("span");
    span.textContent = makeArray[i];
    h1.appendChild(span);
    if(i > 0){
        setInterval(() => {
        span.style.color = `rgb(${Math.floor(Math.random() * 256)},
                                   ${Math.floor(Math.random() * 256)},
                                   ${Math.floor(Math.random() * 256)})`;
        span.style.transition = "all 900ms";
        span.style.border = "none";
    }, 500 * (i));
    }else{
        span.style.display = "none";
    }
}
}
fillUpColor();

