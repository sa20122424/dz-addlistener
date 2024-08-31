let incrementButton = document.getElementById("btn+");
let decrementButton = document.getElementById("btn-");
let h1 = document.querySelector("h1");
let box = document.querySelector(".boox")
box.style.display = "flex"
box.style.alignItems = "center"
box.style.justifyContent = "center"
box.style.gap = "30px"
box.style.marginTop = "350px"
incrementButton.style.width = "100px"
incrementButton.style.padding = "10px"
incrementButton.style.backgroundColor = "green"
incrementButton.style.color = "white"
incrementButton.style.fontSize = "20px"
incrementButton.style.border  = "none" 

decrementButton.style.width = "100px"
decrementButton.style.padding = "10px"
decrementButton.style.backgroundColor = "red"
decrementButton.style.color = "white"
decrementButton.style.fontSize = "20px"
decrementButton.style.border  = "none"
let count = 0;


function Count() {
    h1.textContent = count;
}


incrementButton.addEventListener("click", () => {
    count++;
    Count();
});

decrementButton.addEventListener("click", () => {
    count--;
    Count();
});