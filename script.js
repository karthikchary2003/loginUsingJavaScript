let fname=document.getElementById("fname");
let fpassword=document.getElementById("fpassword");
let alertmessage=document.getElementById("alertmessage");
let submit=document.getElementById("submit");
let body =document.getElementById("body");
var n,p;
var x;


let mode= document.getElementById("mode");
let m="dark"
mode.addEventListener("click",function(){
if(m==="dark"){
  body.style.backgroundColor="black";
  mode.style.backgroundColor="black"
  mode.style.color="white"
  mode.innerText="light"
  body.style.color="white"
  m="light";
}else{
  body.style.backgroundColor="white";
  body.style.color="black"
  mode.style.backgroundColor="white"
  mode.style.color="black"
  mode.innerText="dark"
  m="dark";

}

})




fname.addEventListener("input",function(){
     x = fname.value;
   
    if(x.length>=3){
      document.getElementById("sname").innerText="Name: "+x;
      alertmessage.style.display="block";
      alertmessage.style.color="green";
      alertmessage.innerText="good name";
      fname.style.backgroundColor="lightgreen"
      n=true;
    }else{
      if(x.length<3){
        alertmessage.innerText="Enter Valid Name";
        alertmessage.style.display="block";
        alertmessage.style.color="red";
        // fname.style.backgroundColor="crimson"
           fname.style.backgroundColor="white"
        n=false;
      }
    }

})


fpassword.addEventListener("input",function(){
    var y = fpassword.value;
   

    if(y.length===8){
      document.getElementById("spassword").innerText="Password: "+y;
      alertmessagepassword.style.display="block";
      alertmessagepassword.style.color="green";
      alertmessagepassword.innerText="nice password";
          fpassword.style.backgroundColor="lightgreen"
      p=true;
    }else if(y.length>8){
      alertmessagepassword.innerText="password must have only 8 characters";
      alertmessagepassword.style.color="red";
      fpassword.style.backgroundColor="rgb(255, 101, 101)";
      p=false;
    }
    else{
      alertmessagepassword.innerText="Enter valid password";
      alertmessagepassword.style.display="block";
      alertmessagepassword.style.color="red";
      fpassword.style.backgroundColor="white"
    p=false;
    }


})

submit.addEventListener("click",function(e){
    e.preventDefault()
    
    if(n==true && p==true ){
      let showdetails =document.getElementById("showdetails");
      showdetails.style.display="block";
    } if(n==false && p==false ){
      alert("Enter your details")
    }
    else    if(n==false && p==true ){
      alertmessage.innerText="Enter correct name";

    }else    if(n==true && p==false ){
      alertmessagepassword.innerText="password must be 8 characters";
    }
 
})


