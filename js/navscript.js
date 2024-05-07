
function myFunction() {
    var x = document.getElementById("nav");
    if (x.classList.contains("open")) {
        x.classList.remove("open");
    } else {
        x.classList.add("open");
    }
}