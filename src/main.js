
//login page validation

function logvalidate(){
    
  
    var user=document.getElementById('username').value;
    var password=document.getElementById("password").value;

    var storedName = sessionStorage.getItem('stored_userName');
    var storedPw =sessionStorage.getItem('stored_passWord');

   console.log(storedName,storedPw);
  


    if(user==storedName && password==storedPw)
    {
        alert("welcome");
    }
    else{
        alert("Invalid username or password");
    }
 


}



