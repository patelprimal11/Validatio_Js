



    let username =document.getElementById("username")
    // let mobile=document.getElementById("mobile").value
    // let email=document.getElementById("email").value
    // let password=document.getElementById("password").value
    const user=username.value
    
    

    const user_rgx=/^[a-zA-Z0-9]{4,10} $/;
    const mobile_rgx=/^[6-9]\d{9}$/
    const email_rgx=/^[a-zA-Z0-9]+(?:[.%_+][a-zA-Z0-9]+)*@\.[a-zA-Z]{2,} $/
    const password_rgx=/^(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/


