var Name;
var bps;
var bpd;
var bs;
var bmi;
var age;
let btn = document.querySelector("#submit");
const storeInput = function(){
    Name = document.getElementById("Name").value;
    // Name = "Prabhav";
    age = document.getElementById("age").value;
    bps = document.getElementById("bps").value;
    bpd = document.getElementById("bpd").value;
    bs = document.getElementById("sugar").value;
    bmi = document.getElementById("bmi").value;
    
    // alert(Name);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Age", age);
    localStorage.setItem("bps", bps);
    localStorage.setItem("bpd", bpd);
    localStorage.setItem("sugar", bs);
    localStorage.setItem("bmi", bmi);
    window.document.location = 'C:/Users/Peyush Khera/Documents/FitnessBuddy/result.html';  
}
btn.addEventListener("click", function(){
    storeInput();
})



