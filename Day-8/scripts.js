let block = document.querySelectorAll(".pixel");

block.forEach( el => {
    el.addEventListener("click", () => {
        el.classList.toggle("change-color");
    });
}); 