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
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
