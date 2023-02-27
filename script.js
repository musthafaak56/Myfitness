//setitem redirect to login
function register(){
    uname1=userName.value;
    mid1=membershipId.value;
    pword1=passWord.value;
    vdate1=Math.floor(Math.random()*10)
    amtbal=Math.floor(Math.random()*1000)
    sinceDate=2012+Math.floor(Math.random()*10)



    var gymMemberObj={
        uname: userName.value,
        mId: membershipId.value,
        pword: passWord.value,
        vDate: vdate1,
        amtBalance: amtbal,
        sincedate: sinceDate
    };
    
    
    
    if(gymMemberObj.mId in localStorage){
        alert('Member already exist');
    }
    else
    {
        var gymMemberString=JSON.stringify(gymMemberObj);
        localStorage.setItem(gymMemberObj.mId,gymMemberString);
        alert('Registered Successfully!');
        window.location="./0login.html";
        //or
        // window.location.href="0login.html";
    }
}
function showpassword(){
    const passwordInput=document.getElementById("passWord");;
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
