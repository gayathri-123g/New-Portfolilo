// Smooth scrolling
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if(this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Form alert
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Recruiter will contact you soon!");
});
