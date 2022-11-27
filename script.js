function validate(callback){
var fixedusername=/admin/;
var fixedpassword=/12345/;
var username=document.getElementById("username");
var password=document.getElementById("password");
var usernameerror=document.getElementById("usernameerror");
var passworderror=document.getElementById("passworderror");
var x;
var y;
if(username.value.trim()==""){
    usernameerror.innerHTML="Username cannot be empty";
    usernameerror.style.color="red";
        x=0;
} if(password.value.trim()==""){
    passworderror.innerHTML="Password cannot be empty";
    passworderror.style.color="red";
        y=0;
}
if(username.value.trim()!=""){

    if(username.value.length<6){
        if(fixedusername.test(username.value)){
            x=1;
            usernameerror.innerHTML="";
        }else{
            x=0;
            usernameerror.style.color="red";
        usernameerror.innerHTML="Invalid user name";
        }

    }
    else{
        x=0;
        usernameerror.style.color="red";
        usernameerror.innerHTML="Invalid user name";
   }
}
if(password.value.trim()!=""){
    console.log(password.value.length);
    if(password.value.length<6){
        if(fixedpassword.test(password.value)){
            y=1;

            passworderror.innerHTML="";
        }else{
            passworderror.style.color="red";
            passworderror.innerHTML="Invalid password";
            y=0;
        }


    }else{
        y=0;
        passworderror.style.color="red";
        passworderror.innerHTML="Invalid password";
    }
}
}