const btnModal = document.getElementById("btnModal");
const modal3 = document.getElementById("modal3");
const close3 = document.getElementById("close3");

btnModal.addEventListener("click", () => {
    modal3.style.display = "block";
});

close3.addEventListener("click", () => {
    modal3.style.display = "none";
});