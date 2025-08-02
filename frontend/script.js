// For SignUp Page
function saveUserDetails() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const referralCode = "REF" + Math.floor(Math.random() * 1000000);
    const totalRaised = Math.floor(Math.random() * 10000); // dummy donation amount
  
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("referralCode", referralCode);
    localStorage.setItem("totalRaised", totalRaised);
  
    window.location.href = "dashboard.html";
  }
  