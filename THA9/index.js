var seat_left = document.querySelector(".seat_left");

var seat_selected = document.querySelector(".seat_selected");

const seat = document.querySelectorAll(".box").forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('boxclicked')) {
            item.classList.remove('boxclicked');
            seat_selected.value -= 1;
            seat_left.value = parseInt(seat_left.value) + 1;

        } else {
            item.classList.add('boxclicked');
            seat_left.value -= 1;
            seat_selected.value = parseInt(seat_selected.value) + 1;

        }

    })
})