let title = document.getElementById('unilective');
let isClicked = false;

let modal = document.getElementById("modal");
let search = document.getElementById("search");
let close = document.getElementById("closeModal");

title.addEventListener('click', function() {
    if(!isClicked) {
        this.style.color = 'green';
        isClicked = true;
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
        isClicked = false;
    }
});

search.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }