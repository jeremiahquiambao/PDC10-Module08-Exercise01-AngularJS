function validate(){

    // ID
    if(document.myForm.employeeId.value==""){
        document.getElementById("employeeIdErr").innerHTML = "Please enter your employee id";
        return false;
    }
    
    // First Name
    if(document.myForm.firstName.value==""){
        document.getElementById("firstNameErr").innerHTML = "Please enter your first name";
        return false;
    }

    // Last Name
    if(document.myForm.lastName.value==""){
        document.getElementById("lastNameErr").innerHTML = "Please enter your last name";
        return false;
    }


    // Department
    if(document.myForm.empDept.value==""){
        document.getElementById("empDeptErr").innerHTML = "Please enter your department";
        return false;
    }

    // Position
    if(document.myForm.empPosition.value==""){
        document.getElementById("empPositionErr").innerHTML = "Please enter your position";
        return false;
    }

    // Email Address
    if(document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    } 
    else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    // Contact Number
    if(document.myForm.empContactNum.value==""){
        document.getElementById("empContactNumErr").innerHTML = "Please enter your contact number";
        return false;
    }

    // Salary
    if(document.myForm.empSalary.value==""){
        document.getElementById("empSalaryErr").innerHTML = "Please enter your salary";
        return false;
    }

    // Salary
    if(document.myForm.empUserName.value==""){
        document.getElementById("empUserNameErr").innerHTML = "Please enter a username";
        return false;
    }


}

