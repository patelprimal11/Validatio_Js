
function primal() {
  



  let username = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let conformpassword = document.getElementById("conformpassword").value
  



  const user_rgx = /^[a-zA-Z0-9]{4,10}$/;
  const mobile_rgx = /^[6-9]\d{9}$/
  // const email_rgx = /^[a-zA-Z0-9]+(?:[.%_+][a-zA-Z0-9]+)*@\.[a-zA-Z]{2,} $/
  const email_rgx=/^\S+@\S+\.\S+$/
  const password_rgx = /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/
  
  let valid=true
  document.querySelectorAll('.error').forEach((ele)=>{ele.textContent=""
  })

  if (!user_rgx.test(username)) {

  //  let error= document.getElementById("usererror")
  let error=document.querySelectorAll('.error')[0]
    error.textContent = "Enter valid Username !"
    document.getElementById("usererror").style.color = "red"
  return false
  
    

  }
 
  if (!mobile_rgx.test(mobile)) {
    // valid=false
    let erro=document.querySelectorAll('.error')[1]
    // let error=document.getElementById("mobileerror")
    erro.textContent =  "Enter 10 Digit of Mobile Number !"
    erro.style.color="red"
    // document.getElementById("mobileerror").style.color = "red"
    return false
   
  }

  if (!email_rgx.test(email)) {
    let err=document.querySelectorAll('.error')[2]
    // let er = document.getElementById("mailerror")
    err.textContent =  "Enter valid Email !"
    err.style.color = "red"
    return false
  
  }
  if (!password_rgx.test(password)) {
    let e= document.getElementById("passworderror")
    e.textContent = "Enter valid Password !"
    e.style.color = "red"
    return false
    
  }

  if (conformpassword !== password) {
    let erroo = document.getElementById("conformpassworderror")
    erroo.textContent = "Repeat the Password !"
    erroo.style.color = "red"
    return false
    

  }


if(valid=true){
  alert("success")
}
 
}