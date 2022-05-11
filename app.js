let diceBtn = document.getElementById("randomBtn");
let adviceText = document.getElementById("adviceText");
let adviceId = document.getElementById("adviceNum");

window.addEventListener("onload", updateAdvice());

diceBtn.addEventListener("click", function clicked() {
    window.location.reload(true);
    updateAdvice();
});


function updateAdvice() {
    let url = "https://api.adviceslip.com/advice";
    fetch(url, { cache: "no-cache" }).then(response => response.text()).then(data => {
        let slipObj = JSON.parse(data).slip;
        adviceText.innerHTML = `"${slipObj.advice}"`;
        adviceId.innerHTML = slipObj.id;
    })
}