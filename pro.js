const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * 400;
    const y = Math.random() * 200;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

const button = document.getElementById("yesBtn");

button.addEventListener("click", function () {
    alert("good job nigga");
});
