window.addEventListener("load",()=>{
    "use strict";   
    window.document.getElementById("employeeForm").addEventListener("submit", (e)=> {
        e.preventDefault();
        window.console.log("ID:" + window.document.getElementById("employeeId").value);
        window.console.log("Name:" + window.document.getElementById("fullName").value);
        window.console.log("Extension:" + window.document.getElementById("extension").value);
        window.console.log("Email:" + window.document.getElementById("email").value);
        window.console.log("Department:" + window.document.getElementById("department").value);      
    });
  });