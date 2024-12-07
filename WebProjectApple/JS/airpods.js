/*<!-- Sleidas Sabaliauskas (C23364683)-->*/
document.addEventListener('DOMContentLoaded', function() {
    const airpodsProDiv = document.getElementById('airpods-pro');
    const airpodsMaxDiv = document.getElementById('airpods-max');
    const airpodsInfoDiv = document.getElementById('airpods-info');

    airpodsProDiv.addEventListener('click', function() {
        loadAirPodsInfo("<p>Airpod Pros provide diverse features like noise cancellation to block out everything surrounding.</p> " 
		+ "<p>They also offer a comfortable fit and seamless integration with Apple devices.</p>" +
		 "<p>They have a long battery life of 6 hours lasting you majority of the day.  </p>"
		 + "<p>The airpod pros consist of four pairs of silicone tips are included to fit a wide range of ears. </p>" + 
		"<p> The tips secure AirPods Pro in place and create an acoustic seal that closes in the sound.</p>");
		
    });

    airpodsMaxDiv.addEventListener('click', function() {
        loadAirPodsInfo("<p>AirPods Max info will be loaded here.</p>" + 
                     "<p>These over-ear headphones deliver high-fidelity audio and adaptive EQ for immersive sound.</p>" +
					 "<p> AirPods Max are designed for an uncompromising fit that creates the best seal for many different head shapes </p>" +
					 "<p> It provides Immersive listening, to cancel unwanted external sound, AirPods Max use a total of six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you are hearing.</p>");
    });

    function loadAirPodsInfo(info) {
        airpodsInfoDiv.innerHTML = info;
    }
});