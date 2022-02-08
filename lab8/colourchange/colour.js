let current = "red";

function colourChanger() {
    if (current === "red") {
        document.getElementById("redPara").style.color = "blue";
        document.getElementById("redPara").innerHTML = "I am BLUE";
        current = "blue";
    } else if (current === "blue") {
        document.getElementById("redPara").style.color = "green";
        document.getElementById("redPara").innerHTML = "I am GREEN";
        current = "green";
    } else if (current === "green") {
        document.getElementById("redPara").style.color = "orange";
        document.getElementById("redPara").innerHTML = "I am Orange";
        current = "orange";
    }
    /*else if (current === "orange") {
                       document.getElementById("redPara").style.color = "red";
                       document.getElementById("redPara").innerHTML = "I am RED";
                       current = "red";
                   }*/
    else {
        document.getElementById("redPara").style.color = "red";
        document.getElementById("redPara").innerHTML = "I am RED";
        current = "red";
    }
}