const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function (evt) {
    evt.preventDefault(); // stops page reload

    alert("Thank you for subscribing!");

    // optional: clear input after submit
    form.reset();
});
