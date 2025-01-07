function validateForm() {
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Validate name
  if (name == "") {
      alert("Name must be filled out");
      return false;
  }
  
  // Validate email
  if (email == "") {
      alert("Email must be filled out");
      return false;
  } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address");
          return false;
      }
  }
  
  // Validate message
  if (message == "") {
      alert("Message must be filled out");
      return false;
  }

  // If all validations pass
  return true;
}
