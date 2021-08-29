// registration page validation

function ValidateEmail(mail) 
{
 

    var re = /\S+@\S+\.\S+/;
    return re.test(mail);

    
   
}

function ValidateUserName(username){
    if(username!=null){
        return true
    }
    return false  
}

function validatepassword(password){
    if (password==null || password.length<6)
    {  
        alert("password length must be greater then 6");
        return false;
    }
    return true;
        
    
}

function passandcp(password,confirm_password){
    if(password!=confirm_password){
        alert("password and confirm password doesn't match")
        return false;
    }
     return true
}

function regvalidate(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var confirm_password=document.getElementById("cpass").value;


    console.log(username,email,password,confirm_password);

    console.log(ValidateEmail(email))

    if(ValidateUserName(username) && validatepassword(password) && ValidateEmail(email) && passandcp(password,confirm_password)){
        sessionStorage.setItem("stored_userName", username);
        sessionStorage.setItem("stored_passWord", password);


        window.location.href="index.html";

       
    }
 
};