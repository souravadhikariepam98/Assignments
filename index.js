const submitButton=document.getElementsByClassName('submitBtn btn11')[0];
submitButton.addEventListener("click", myFunction);
function myFunction() {
    const contactNo=document.getElementById('contactNo').value;
    const salesPersonName=document.getElementById('salesPersonName').value;
    let isValid1=true;
    let isValid2=true;
    if(contactNo.length===10)
        isValid1=true;
    else
        isValid1=false;
    
    if(salesPersonName.length===0)
        isValid2=false;
    else
        isValid2=true;

    if(isValid1 && isValid2){
        alert("Form Submitted Sucessfully...");
        document.getElementById('contactNo').value="";
        document.getElementById('salesPersonName').value="";
        document.getElementById('contactNo').style.backgroundColor="white";
        document.getElementById('salesPersonName').style.backgroundColor="white";
    }else{
        if(!isValid1 && !isValid2){
            document.getElementById('contactNo').style.backgroundColor="red";
            document.getElementById('salesPersonName').style.backgroundColor="red";
            alert("check name and contact!!!");
        }else if(!isValid1){
            document.getElementById('contactNo').style.backgroundColor="red";
            alert("Check contact!!!");
        }else{  
            document.getElementById("salesPersonName").style.backgroundColor="red";
            alert("Check Name!!!");
        }
    }
}
