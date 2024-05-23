document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
  
    // Perform your login logic here, for now, let's simulate a successful login
    // Replace this with your actual login logic
    var isLoginSuccessful = true;
  
    if (isLoginSuccessful) {
      // Redirect to a new webpage after successful login
      window.location.href = "seatcheck.html"; // Replace with the actual welcome page URL
    }
  });
  