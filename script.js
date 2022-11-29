



// // ajax and api
// function ajax(){
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4&&this.status==200){
//             var response=JSON.parse(this.responseText);
//             var output="";
//             for(var i=0;i<response.length;i++){
//                 // output +="<li>"+response[i].id+response[i].title+"</li>";
//                 output +=`<tr>
//                 <td>${response[i]+id}</td>
//                 <td>${response[i]+title}</td>
//                 <td>${response[i]+completed}</td>
//                 </tr>`;
//             }
//             document.getElementById('api').innerHTML=output;
//         }
//     }
//     xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
//     xhttp.send();
// }

// // promise
// callback
function validate(callback){
    var fixedusername=/admin/;
    var fixedpassword=/12345/;
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var usernameerror=document.getElementById("usernameerror");
    var passworderror=document.getElementById("passworderror");

    var x;
    var y;
    // username name and password
    if(username.value.trim()==""){
        usernameerror.innerHTML="Username cannot be empty";
        usernameerror.style.color="red";
            x=0;
    } if(password.value.trim()==""){
        passworderror.innerHTML="Password cannot be empty";
        passworderror.style.color="red";
            y=0;
    }
    // username
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
    // password
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
    // function call
    if(x==1&&y==1){
            var z=callback();
            if(z==true){
                return true;
            }
    }
    else{
        return false;
    }
}
function check(){
    return true;
}





// table
fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
return data.json();
}).then((objectData)=>{
    let tableData="";
    objectData.map((values)=>{
        tableData+= `<tr> 
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><input type='checkbox'></td>
        
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})


// var weather=false;
const checkbox=new Promise(function(resolve,reject){
    if(value.completed>=5){
        const datedetails={
            
        }
        resolve(datedetails)

    }
    else{
        reject("select minimum 5 values")
    } 
})

dating
.then(function(date){
    console.log('date details:',date);

})
.catch(function(err){
    console.log(err)
})