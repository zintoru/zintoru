menuButton.onclick = function myFunction() {
    var x = document.getElementById("MyTopnav");

    if(x.className === "topnav") {
        x.classname += "responsive";
    }   else {
        x.className = "topnav";
    }
}