const submitButton=document.getElementsByClassName('submitBtn btn11')[0];
submitButton.addEventListener("click", myFunction);
function myFunction() {
    const contactNo=document.getElementById('contactNo').value;
    if(contactNo.length===10)
        alert("Form Submitted Successfully!!!");
    else
        alert("wrong input in Phone number...");
    document.getElementById('contactNo').value="";
}