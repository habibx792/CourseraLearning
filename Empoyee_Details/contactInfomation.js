const form = document.getElementById("form1");
const checkData = () => {
  var username = document.getElementById("name").value.trim();
  var emailid = document.getElementById("email").value.trim();
  if (username === "") {
    alert("Please enter your name")
    return false;
  }
  if(emailid==="")
  {
    alert("Please enter your email");
    return false;
  }
  return true;
};
form.addEventListener('submit',(event)=>{
    if(!checkData())
    {
        event.preventDefault();
    }
})
