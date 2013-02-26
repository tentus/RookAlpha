#pragma strict

var updateInterval = 0.5;
 
private var accum:float = 0.0;	// FPS accumulated over the interval
private var frames:int = 0;		// Frames drawn over the interval
private var timeLeft:float;		// Left time for current interval
 
function Start() {
    timeLeft = updateInterval;  
}
 
function Update() {
    timeLeft -= Time.deltaTime;
    accum += Time.timeScale/Time.deltaTime;
    ++frames;
 
    // Interval ended - update GUI text and start new interval
    if(timeLeft <= 0.0) {
        // display two fractional digits (f2 format)
        guiText.text = (accum/frames).ToString("f2") + " fps";
        timeLeft = updateInterval;
        accum = 0.0;
        frames = 0;
    }
}