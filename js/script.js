var link = document.querySelector(".feedback > .btn");

var popup = document.querySelector(".feedback-form-section");

var close = popup.querySelector(".feedback-cross");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-form-section-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-form-section-show");
});