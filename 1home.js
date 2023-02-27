function logout()
{
    window.location="./0login.html";

}


memString2=localStorage.getItem("userS")

memObj2=JSON.parse(memString2)

nameUpper=memObj2.uname.charAt(0).toUpperCase()+memObj2.uname.slice(1);

if(memObj2.vDate<2)
{
    emptydiv1.innerHTML=`<h1>Welcome ${nameUpper}</h1>
    <br>
 <h2>Your Membership valid for ${memObj2.vDate} Month</h2>
 <br>
 <h3>Your Balance amount is Rs.${memObj2.amtBalance}/-</h3>
 <br>
 <h3>You are a member since ${memObj2.sincedate}</h3>`; 
}
else
{
    emptydiv1.innerHTML=`<h1>Welcome ${nameUpper}</h1>
                            <br>
                         <h2>Your Membership valid for ${memObj2.vDate} Months</h2>
                         <br>
                         <h3>Your Balance amount is Rs.${memObj2.amtBalance}/-</h3>
                         <br>
                         <h3>You are a member since ${memObj2.sincedate}</h3>`;
}


