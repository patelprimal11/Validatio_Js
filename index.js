document.querySelector("#submit").addEventListener("click",primal());
function primal(){
    // e.preventDefault();

    const username =document.getElementById("username").value;
    const mobile=document.getElementById("mobile").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const con_password=document.getElementById("conformpassword").value


    const user_rgx=/^[a-zA-Z0-9]{4,10} $/;
    const mobile_rgx=/^[6-9]\d{9}$/
    const email_rgx=/^[a-zA-Z0-9]+(?:[.%_+][a-zA-Z0-9]+)*@\.[a-zA-Z]{2,} $/
    const password_rgx=/^(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/


    if(!user_rgx.test(username)){
        

        document.getElementById("usererror").textContent="User name not valid !"
    //    document.getElementById("usererror").style="Display: block"
        alert("user name is not Valid")
    }
    else{
        return true
    }

}