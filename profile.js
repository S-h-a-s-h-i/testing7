/* Profile Page Logic */

document.addEventListener("DOMContentLoaded", () => {
    /* --- Active Navigation Link --- */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove("active");
        
        // Add active class if href matches current page
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("active");
        }
    });

    /* --- Load Profile Data --- */
    // Using default values if localStorage is empty
    const userName = localStorage.getItem("userName") || "Rahul Kumar";
    const userEmail = localStorage.getItem("userEmail") || "rahul@gmail.com";
    const userCourse = localStorage.getItem("userCourse") || "BCA";
    const userYear = localStorage.getItem("userYear") || "2024";

    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const courseEl = document.getElementById("course");
    const yearEl = document.getElementById("year");

    if (nameEl) nameEl.innerText = userName;
    if (emailEl) emailEl.innerText = userEmail;
    if (courseEl) courseEl.innerText = userCourse;
    if (yearEl) yearEl.innerText = userYear;
});

/* --- Logout Function --- */
function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.clear();
        window.location.href = "login.html";
    }
}
