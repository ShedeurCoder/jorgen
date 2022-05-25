const ulNav = document.getElementById("ul-nav");
function showNav() {
    if (ulNav.style.display == "block") {
        ulNav.style.display = "none";
    } else {
        ulNav.style.display = "block";
    }
}
document.getElementById('newsletter').onsubmit = function() {
    document.getElementsByTagName('input')[0].value = "";
    document.getElementsByTagName('input')[1].value = "";
    alert("Thank you for subscribing.");
    return false;
}