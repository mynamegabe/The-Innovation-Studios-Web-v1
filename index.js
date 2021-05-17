function popsignup() {
  document.getElementById("logodiv").style.display="none";
  document.getElementById("signuppop").style.display="inline-block";
}


function login() {
  document.getElementById("signuppop").style.display="none";
  document.getElementById("logodiv").style.display="inline-block";
}

function closeform() {
  document.getElementById("logodiv").style.display="none";
  document.getElementById("signuppop").style.display="none";
}

function forgotpass() {
  var fpassmail = prompt("Enter your email");
}
/*
function userlogin() {
  const fs=require('fs')
  var user = document.getElementById("usertext")
  var pass = document.getElementById("userpass")
  const config = readFile('what.json','utf-8',(err,jsonString) =>{
    if (err) {
      console.log("File read failed:",err)
      return
    }
    try {
      const users = JSON.parse(jsonString)
      console.log("Username is:",jsonString)
    } catch(err) {
      console.log('Error parsing JSON string',err)
    }
  })
  var node = document.createElement("h1");
  node.innerText="hello";
  document.getElementById("applist").appendChild(node);
}
*/
function changebio() {
  document.getElementById("biobox").style.display="block";
}

function changebi() {
  var biotext = document.getElementById("bio1").value;
  document.getElementById("biobox").style.display="none";
  document.getElementById("bio").innerText = biotext;
}


function chatbotopen() {
  document.getElementById("wholechatbot").style.bottom="0px";
  setTimeout(function (){document.getElementById("closechat").style.display="block";},1000)

}

function chatbotclose() {
  document.getElementById("wholechatbot").style.bottom="-400px";
  document.getElementById("closechat").style.display="none";
}

function calendarpop() {
  document.getElementById("calpop").style.height="150px";
  var calel = document.getElementsByClassName("calelements");
  console.log(calel.length)
  for (i=0 ; i < calel.length ; i++) {
    calel[i].style.opacity="1";
  }
}
