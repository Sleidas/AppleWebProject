/*<!-- Sleidas Sabaliauskas (C23364683)-->*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Product-Link').addEventListener('click', function() {
        var contentDiv = document.getElementById('Purchase');
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'block'; 
        } else {
            contentDiv.style.display = 'none'; 
        }
    });
});