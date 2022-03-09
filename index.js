const submitButton=document.getElementsByClassName('submitBtn btn11')[0];
submitButton.addEventListener("click", myFunction);
function myFunction() {
    const contactNo=document.getElementById('contactNo').value;
    const salesPersonName=document.getElementById('salesPersonName').value;
    let isValid=true;
    if(contactNo.length===10)
        isValid=true;
    else
        isValid=false;
    
    if(salesPersonName.length===0 && isValid)
        isValid=false;
    else if(isValid)
        isValid=true;

    if(isValid){
        alert("Form Submitted Sucessfully!!!");
    }else{
        alert("Error in contact no or name");
    }
    document.getElementById('contactNo').value="";
    document.getElementById('salesPersonName').value="";
}
