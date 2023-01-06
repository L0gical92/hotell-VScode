const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
hamburger.onclick = function () {
    navBar.classList.toggle("active");
}
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
const subject = document.getElementById('subject');
subject?.addEventListener("change", function () {
    if (this.value == "Existing-booking") {
        document.getElementById("dateRange").style.display = "none";
        document.getElementById("bookingNr").style.display = "block";
    } else if (this.value == "New-booking") {
        document.getElementById("bookingNr").style.display = "none";
        document.getElementById("dateRange").style.display = "block";
    }else{
        document.getElementById("dateRange").style.display = "none";
        document.getElementById("bookingNr").style.display = "none";
    }
});
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("contactForm").style.display = "none"; 
    document.getElementById("confirmationMSG").style.display = "block"; 
});