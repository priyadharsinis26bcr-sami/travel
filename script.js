
// Destination Search
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    let searchValue = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".destination-card");

    cards.forEach(function (card) {
        let destination = card.querySelector("h3")
                              .textContent.toLowerCase();

        if (destination.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Booking Form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;

    let message = document.getElementById("message");

    message.innerHTML =
        "Thank you, " + name + "! Your booking enquiry for " +
        place + " has been submitted successfully.";

    alert(
        "Booking Details\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Destination: " + place + "\n" +
        "Travel Date: " + date + "\n" +
        "Travellers: " + people
    );

    bookingForm.reset();
});
