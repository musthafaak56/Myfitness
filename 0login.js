//check //getitem //redirect to home
function login(){
    //1. fetch the input details from login page
    membId=memId2.value;
    password=passWord2.value;
    

    if(membId in localStorage)
    {
        memString=localStorage.getItem(membId);
        memObj=JSON.parse(memString);

        // console.log(memObj.pword);
        
        //compare password
        if(password==memObj.pword)
        {
            alert('Login Successful');
            window.location="./1home.html";
            localStorage.setItem("userS",memString)
        }
        else
        {
            alert('Incorrect Password')
        }
    }
    else
    {
        alert('Incorrect Membership Id');
    }
}
function showpassword(){
    const passwordInput=document.getElementById("passWord2");;
    console.log(`Before if`,passwordInput);
    console.log(`Before if type`,passwordInput.type);
    if(passwordInput.type==="password")
    {
        passwordInput.type="text";
        console.log(`After if`,passwordInput);
        // document.getElementById("showBtn").textContent = `show`;
        showBtn.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`;
    }
    else
    {
        passwordInput.type="password";
        // document.getElementById("showBtn").textContent = `hide`;
        showBtn.innerHTML=`<i class="fa-regular fa-eye">`;
    }
}
