document.getElementById("#myform").addEventListener("submit", function(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    document.getElementById("fullName").innerHTML = "Full Name: " + fname + " " + lname;
    document.getElementById("percentage").innerHTML = "Random Percentage: " + Math.floor(Math.random() * 100) + "%";
  
    // Send form data to email here

  });
  function submitForm() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    
    alert("Input 1: " + input1 + "\nInput 2: " + input2);
  }
  
