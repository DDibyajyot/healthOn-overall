let Name;
let age;
let bps;
let bpd;
let bs;
let bmi;

const getName = function (){
    let spn = document.querySelector('#result');
    let spnName = document.querySelector('#info-name');
    let spnAge = document.querySelector('#info-age');
    let spnBp = document.querySelector('#info-bp');
    let spnBs = document.querySelector('#info-bs');
    let spnbmi = document.querySelector('#info-bmi');
    Name = localStorage.getItem('Name');
    age = localStorage.getItem('Age');
    bps = localStorage.getItem('bps');
    bpd = localStorage.getItem('bpd');
    bs = localStorage.getItem('sugar');
    bmi = localStorage.getItem('bmi');
    // alert(Name);
    // spn.innerHTML = Name + ' ' + age + ' ' + bps + ' ' + bpd + ' ' + bs + ' ' + bmii + ' ';
    spnName.innerHTML =  Name;
    spnAge.innerHTML =  age;
    spnBp.innerHTML =  bps + "/" + bpd;
    spnBs.innerHTML =  bs;
    spnbmi.innerHTML =  bmi;

    bloodpressure()
    // bloodsugar()
    // bmii()
}

document.addEventListener('DOMContentLoaded', function (){
    getName();
})



function bloodpressure(){
    if (age<=10 && age>= 0){
      if(bps == 105 && bpd == 70){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life.";
        if(bs<=100 && bs>=80){
            var print = document.getElementById('bs-result');
            print.innerHTML = "Blood Sugar is normal. You can relax and lead a normal life."
            }
          else if(bs<=125 && bs>100){
            var print = document.getElementById('bs-result');
            print.innerHTML = "Blood Sugar is higher than average. You are PreDiabetic, please adher to the tips given below to avoid Diabetes."
            }
          else if(bs>125){
            var print = document.getElementById('bs-result');
            print.innerHTML = "Blood Sugar is extremely high. You are Diabetic, please adher to the tips given below to help deal with Diabetes."
            }
            if(bmi<=18.5){
                var print = document.getElementById('bmi-result');
                print.innerHTML = "Body Mass Index is lower than average. Please use the guide given below to help with increase in bmi.";
                }
            if(bmi>18.5 && bmi<=25){
                var print = document.getElementById('bmi-result');
                print.innerHTML = "Body Mass Index is average. You can relax and lead a normal life.";
                }
            if(bmi>25 && bmi<=30){
                var print = document.getElementById('bmi-result');
                print.innerHTML = "Body Mass Index is overweight. You can use the guide for help in regulating bmi.";
                }
            if(bmi>30){
                var print = document.getElementById('bmi-result');
                print.innerHTML = "Body Mass Index is obese. You can use the guide for help in regulating bmi.";
                }
        }
      else if(bps > 105 && bpd > 70){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension.";
      }
      else if(bps > 125 && bpd > 90){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension.";
      }
      else if(bps < 105 && bpd < 70){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 85 && bpd < 50){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }
    }

    else if (age<=20 && age> 10){
      if(bps == 120 && bpd == 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life."
        }
      else if(bps > 120 && bpd > 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension."
      }
      else if(bps > 145 && bpd > 100){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension."
      }
      else if(bps < 120 && bpd < 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 100 && bpd < 60){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }
    }

    else if (age<=30 && age> 20){
      if(bps == 120 && bpd == 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life."
        }
      else if(bps > 120 && bpd > 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension."
      }
      else if(bps > 140 && bpd > 100){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension."
      }
      else if(bps < 120 && bpd < 80){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 100 && bpd < 60){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }
    }

    else if (age<=40 && age> 30){
      if(bps == 123 && bpd == 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life."
        }
      else if(bps > 123 && bpd > 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension."
      }
      else if(bps > 143 && bpd > 102){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension."
      }
      else if(bps < 123 && bpd < 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 103 && bpd < 62){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }

    else if (age<=40 && age> 30){
      if(bps == 123 && bpd == 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life.";
        }
      else if(bps > 123 && bpd > 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension.";
      }
      else if(bps > 143 && bpd > 102){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension."
      }
      else if(bps < 123 && bpd < 82){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 103 && bpd < 62){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }

    }
    else if (age<=50 && age> 40){
      if(bps == 125 && bpd == 84){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is normal. You can relax and lead a normal life."
        }
      else if(bps > 125 && bpd > 84){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is above average. You could be bordering Hypertension."
      }
      else if(bps > 145 && bpd > 104){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely above average. You are suffering Hypertension. Please look below for tips to help with Hypertension."
      }
      else if(bps < 125 && bpd < 84){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is below average. You could be bordering Hypotension."
      }
      else if(bps < 105 && bpd < 64){
        var print = document.getElementById('bp-result');
        print.innerHTML = "BP is extremely low. You are suffering from Hypotension. Please look below for tips to help with Hypotension."
      }
    }

    if(bs<=100 && bs>=80){
      var print = document.getElementById('bs-result');
      print.innerHTML = "Blood Sugar is normal. You can relax and lead a normal life."
      }
    else if(bs<=125 && bs>100){
      var print = document.getElementById('bs-result');
      print.innerHTML = "Blood Sugar is higher than average. You are PreDiabetic, please adher to the tips given below to avoid Diabetes."
      }
    else if(bs>125){
      var print = document.getElementById('bs-result');
      print.innerHTML = "Blood Sugar is extremely high. You are Diabetic, please adher to the tips given below to help deal with Diabetes."
      }
    if(bmi<=18.5){
        var print = document.getElementById('bmi-result');
        print.innerHTML = "Body Mass Index is lower than average. Please use the guide given below to help with increase in bmi.";
        }
    if(bmi>18.5 && bmi<=25){
        var print = document.getElementById('bmi-result');
        print.innerHTML = "Body Mass Index is average. You can relax and lead a normal life.";
        }
    if(bmi>25 && bmi<=30){
        var print = document.getElementById('bmi-result');
        print.innerHTML = "Body Mass Index is overweight. You can use the guide for help in regulating bmi.";
        }
    if(bmi>30){
        var print = document.getElementById('bmi-result');
        print.innerHTML = "Body Mass Index is obese. You can use the guide for help in regulating bmi.";
        }
    }
}
 
