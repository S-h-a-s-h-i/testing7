// document.addEventListener("DOMContentLoaded", function(){
// const isLoggedIn = localStorage.getItem("isLoggedIn");
// if(isLoggedIn !== "true"){
// window.location.href = "login.html";
// }
// });


// LOGIN KE LIYE REDIRECT KAR RAHA HAI


// Script loaded after page is ready
document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     FIND FRIEND FORM HANDLING
     ========================= */

  const searchForm = document.querySelector(".search-box");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // page reload stop

      const inputs = searchForm.querySelectorAll("input");
      let isEmpty = false;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          isEmpty = true;
        }
      });

      if (isEmpty) {
        alert("कृपया सभी जानकारी भरें (All fields required)");
        return;
      }

      // Demo success message
      alert(
        "Friend Search Started 🔍\n\n" +
        "यह अभी demo version है।\n" +
        "Future में real data connect किया जाएगा।"
      );

      // Optional: clear form
      searchForm.reset();
    });
  }

  /* =========================
     MENU CLICK SAFETY (OPTIONAL)
     ========================= */

  const menuLinks = document.querySelectorAll("nav a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Only visual feedback (no logic change)
      menuLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  /* =========================
     HAMBURGER MENU TOGGLE
     ========================= */
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  // Create overlay if it doesn't exist
  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  if (hamburger && nav) {
    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    // Close menu when a link is clicked
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

});

// YE CHANGES HUYE HAI

document.addEventListener("DOMContentLoaded", function () {

  const findFriendBtn = document.getElementById("findFriendBtn");
  if (findFriendBtn) {
    findFriendBtn.onclick = function () {
      window.location.href = "findfriend.html";
    };
  }

  const addStudentBtn = document.getElementById("addStudentBtn");
  if (addStudentBtn) {
    addStudentBtn.onclick = function () {
      window.location.href = "addstudent.html";
    };
  }

});

// PROFILE JAVASCRIPT

