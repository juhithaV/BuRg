function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
  if(pw == "") {  
     alert("fill the password");
  }  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
 
}  
