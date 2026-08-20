var csInterface = new CSInterface();

var metersInput = document.getElementById("meters");
var scaleInput = document.getElementById("scale");
var resultText = document.getElementById("resultText");
var drawBtn = document.getElementById("drawBtn");

function calculatePoints() {
    var meters = parseFloat(metersInput.value) || 0;
    var scale = parseFloat(scaleInput.value) || 1;
    var mm = (meters * 1000) / scale;
    var pts = mm * 2.83464567;
    
    resultText.innerText = "Result: " + mm.toFixed(2) + " mm (" + pts.toFixed(2) + " pt)";
    return pts;
}

metersInput.addEventListener("input", calculatePoints);
scaleInput.addEventListener("input", calculatePoints);

drawBtn.addEventListener("click", function() {
    var pts = calculatePoints();
    // Pass target length in points into ExtendScript host layer
    csInterface.evalScript("drawLineInIllustrator(" + pts + ")");
});