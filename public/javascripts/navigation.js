function openNav() {
    document.getElementById("nav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    document.main.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}