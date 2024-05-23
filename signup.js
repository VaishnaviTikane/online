
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
  
    // Perform your signup logic here, for now, let's simulate a successful signup
    // Replace this with your actual signup logic
    var isSignupSuccessful = true;
  
    if (isSignupSuccessful) {
      // Display a success message and a login button in a pop-up
      var popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = "<p>SUCCESSFULLY CREATED AN ACCOUNT</p><button onclick=\"loginNow()\">LOGIN NOW</button>";
  
      document.body.appendChild(popup);
    }
  });
  
  function loginNow() {
    // Redirect to the login page
    window.location.href = "login.html"; // Replace with the actual login page URL
  }
  