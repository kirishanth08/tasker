function signIn() {
    window.location.href = "nextpage.html";
}


function sig() {
    window.location.href = "signup.html";
}


function login() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
      // If username and password match, proceed to next page
      window.location.href = "nextpage.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }