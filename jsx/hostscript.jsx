function drawLineInIllustrator(pts) {
    if (app.documents.length === 0) {
        alert("Please open an Illustrator document first.");
        return;
    }
    
    var doc = app.activeDocument;
    var line = doc.pathItems.add();
    var center = doc.activeView.centerPoint;
    
    var startX = center[0];
    var startY = center[1];
    var endX = center[0] + parseFloat(pts);
    var endY = center[1];

    line.setEntirePath([[startX, startY], [endX, endY]]);
    line.stroked = true;
    line.strokeWidth = 1;
}