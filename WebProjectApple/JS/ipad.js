/*<!-- Sleidas Sabaliauskas (C23364683)-->*/
document.getElementById("show-info-btn").addEventListener("click", function() {
    var infoDiv = document.getElementById("ipad-info");
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
});