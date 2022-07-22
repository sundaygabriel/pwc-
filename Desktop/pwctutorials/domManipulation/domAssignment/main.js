
const applicationform = document.querySelector("#application-form");
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const Age = document.querySelector("#age");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

applicationform.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (firstName.value === "" || lastName.value === "" || Age === "" ){
        msg.classList.add("error");
        msg.innerHTML = "Incomplete Form";
        setTimeout(() => msg.remove(), 5000);
    } else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${firstName.value} ${lastName.value} ${Age.value}`));
        
        userList.appendChild(li);
        firstName.value = "";
        lastName.value = "";
        Age.value = "";
    }
}



