// WEBSITE PAR REDIRECT KARNA HAI
function loginUser() {
    const username = document.getElementById("Email or Mobile Number").value;
    const password = document.getElementById("Password / OTP").value;
    if (email === "admin@example.com" && password === "12345") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "Projects1/index.html";
    } else {
        alert("invalid email or password")
    }

}

localStorage.setItem("isLoggedIn", "true");
console.log("Login Saved:", localStorage.getItem("isLoggedIn"));

// LOGOUT JS KA CODE HAI

// Login success hone par
function loginUser() {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", "Rahul Kumar");
    localStorage.setItem("userEmail", "rahul@gmail.com");
    localStorage.setItem("userCourse", "BCA");
    localStorage.setItem("userYear", "2nd Year");
    window.location.href = "index.html"
}
// window.location.href = "index.html";  website ka main page

// FORM KO SELECT KARNA
const loginForm = document.getElementById("loginForm");
const message = document.getElementById('message');

// JAB FORM SUBMIT HO TO KYA KAREIN
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // PAGE REFRESH HONE SE RAKHNA
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // SIMULATION:= IF EMAIL AND PASSWORD IS CORRECT
        const correctEmail = "admin@example.com";
        const correctPass = "12345";

        // CHECK IT (EMAIL AND PASSWORD)
        if (email === correctEmail && password === correctPass) {
            message.style.color = "black";
            message.textContent = "Login Successful! Welcome...";

            // YAHA SE USER REDIRECT HOKAR DASHBOARD PAR JAYEGA
            window.location.href = "index.html";
        }
        else {
            message.style.color = "black";
            message.textContent = "Invalid Email or Password/OTP...";
        }
    });
}

// PASSWORD SHOW/HIDE TOGGLE LOGIC
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

if (togglePassword && passwordField) {
    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye / eye slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}
