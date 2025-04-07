document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    document.querySelector(".search-box button").addEventListener("click", function () {
        let searchQuery = document.querySelector(".search-box input").value.toLowerCase();
        let vehicles = document.querySelectorAll(".card");
        
        vehicles.forEach(vehicle => {
            let title = vehicle.querySelector(".card-title").textContent.toLowerCase();
            if (title.includes(searchQuery)) {
                vehicle.style.display = "block";
            } else {
                vehicle.style.display = "none";
            }
        });
    });
    
    // Booking Confirmation
    document.querySelectorAll(".btn-success").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Your booking request has been received!");
        });
    });
    <script src="Script.js"></script>

    
    // Smooth Scrolling for FAQ
    document.querySelectorAll(".accordion-button").forEach(button => {
        button.addEventListener("click", function () {
            let target = this.getAttribute("data-bs-target");
            document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        });
    });
});

